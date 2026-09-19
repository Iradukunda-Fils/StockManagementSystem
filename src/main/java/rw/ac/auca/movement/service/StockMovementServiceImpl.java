package rw.ac.auca.movement.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.InsufficientStockException;
import rw.ac.auca.common.exception.ResourceNotFoundException;
import rw.ac.auca.common.exception.WarehouseCapacityExceededException;
import rw.ac.auca.movement.domain.MovementType;
import rw.ac.auca.movement.domain.StockMovement;
import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.dto.StockMovementResponse;
import rw.ac.auca.movement.repository.StockMovementRepository;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.product.service.ProductService;
import rw.ac.auca.warehouse.domain.Warehouse;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StockMovementServiceImpl implements StockMovementService {

    private final StockMovementRepository stockMovementRepository;
    private final ProductRepository productRepository;
    private final ProductService productService;

    @Override
    @Transactional
    public StockMovementResponse recordMovement(StockMovementRequest request) {
        Product product = productService.getProductEntity(request.productId());
        Warehouse warehouse = product.getWarehouse();

        if (!warehouse.isActive()) {
            log.warn("Rejected stock movement: warehouse {} is inactive", warehouse.getWarehouseCode());
            throw new BusinessRuleException(
                    "Cannot record stock movement for product in inactive warehouse: " + warehouse.getWarehouseCode());
        }

        int previousStock = product.getQuantityInStock();
        int resultingStock;

        switch (request.movementType()) {
            case STOCK_IN -> {
                int currentWarehouseStock = calculateWarehouseTotalStock(warehouse);
                if (currentWarehouseStock + request.quantity() > warehouse.getCapacity()) {
                    log.warn("Rejected STOCK_IN: exceeds warehouse {} capacity ({})", warehouse.getWarehouseCode(), warehouse.getCapacity());
                    throw new WarehouseCapacityExceededException(
                            "Cannot record STOCK_IN: Adding " + request.quantity()
                                    + " units exceeds warehouse '" + warehouse.getWarehouseCode()
                                    + "' capacity of " + warehouse.getCapacity()
                                    + " units. (Current total stored: " + currentWarehouseStock + ")"
                    );
                }
                resultingStock = previousStock + request.quantity();
                log.info("Processing STOCK_IN: SKU {}, qty: +{}, stock: {} -> {}", product.getSku(), request.quantity(), previousStock, resultingStock);
            }
            case STOCK_OUT -> {
                if (previousStock < request.quantity()) {
                    log.warn("Rejected STOCK_OUT: SKU {} has {} units, requested {}", product.getSku(), previousStock, request.quantity());
                    throw new InsufficientStockException(
                            "Cannot record STOCK_OUT: Requested quantity (" + request.quantity()
                                    + ") exceeds current stock (" + previousStock
                                    + ") for product SKU: " + product.getSku()
                    );
                }
                resultingStock = previousStock - request.quantity();
                log.info("Processing STOCK_OUT: SKU {}, qty: -{}, stock: {} -> {}", product.getSku(), request.quantity(), previousStock, resultingStock);
            }
            case ADJUSTMENT -> {
                if (request.notes() == null || request.notes().trim().isEmpty()) {
                    throw new BusinessRuleException(
                            "An audit explanation in 'notes' is mandatory for stock ADJUSTMENT movements"
                    );
                }
                // For ADJUSTMENT, request.quantity() represents the new verified physical count
                resultingStock = request.quantity();
                int delta = resultingStock - previousStock;
                if (delta > 0) {
                    int currentWarehouseStock = calculateWarehouseTotalStock(warehouse);
                    if (currentWarehouseStock + delta > warehouse.getCapacity()) {
                        throw new WarehouseCapacityExceededException(
                                "Adjustment to " + resultingStock + " exceeds warehouse capacity"
                        );
                    }
                }
                log.info("Processing ADJUSTMENT: SKU {}, audit count: {}, reason: {}", product.getSku(), resultingStock, request.notes());
            }
            default -> throw new BusinessRuleException("Unsupported movement type: " + request.movementType());
        }

        // Atomically update product stock
        product.setQuantityInStock(resultingStock);
        productRepository.save(product);

        // Create movement transaction record
        String referenceCode = generateReferenceCode();
        StockMovement movement = StockMovement.builder()
                .referenceCode(referenceCode)
                .movementType(request.movementType())
                .quantity(request.quantity())
                .previousStock(previousStock)
                .resultingStock(resultingStock)
                .movementDate(LocalDateTime.now())
                .notes(request.notes() != null ? request.notes().trim() : null)
                .product(product)
                .warehouse(warehouse)
                .build();

        StockMovement saved = stockMovementRepository.save(movement);
        log.info("Completed stock movement ref: {}, type: {}, product: {}", saved.getReferenceCode(), saved.getMovementType(), product.getSku());
        return mapToResponse(saved);
    }

    @Override
    public StockMovementResponse getMovementById(UUID id) {
        StockMovement movement = stockMovementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock movement not found with id: " + id));
        return mapToResponse(movement);
    }

    @Override
    public StockMovementResponse getMovementByReferenceCode(String referenceCode) {
        StockMovement movement = stockMovementRepository.findByReferenceCode(referenceCode.trim().toUpperCase())
                .orElseThrow(() -> new ResourceNotFoundException("Stock movement not found with reference: " + referenceCode));
        return mapToResponse(movement);
    }

    @Override
    public List<StockMovementResponse> getAllMovements() {
        return stockMovementRepository.findAllByOrderByMovementDateDesc().stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<StockMovementResponse> getMovementsByProduct(UUID productId) {
        productService.getProductEntity(productId); // Validate existence
        return stockMovementRepository.findByProductIdOrderByMovementDateDesc(productId).stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<StockMovementResponse> getMovementsByWarehouse(UUID warehouseId) {
        return stockMovementRepository.findByWarehouseIdOrderByMovementDateDesc(warehouseId).stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    @Transactional
    public void reverseMovement(UUID id) {
        StockMovement movement = stockMovementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock movement not found with id: " + id));

        Product product = movement.getProduct();
        Warehouse warehouse = movement.getWarehouse();

        switch (movement.getMovementType()) {
            case STOCK_IN -> {
                // Reversing STOCK_IN means deducting the stock back out
                if (product.getQuantityInStock() < movement.getQuantity()) {
                    throw new BusinessRuleException(
                            "Cannot reverse STOCK_IN movement: current product stock ("
                                    + product.getQuantityInStock() + ") is less than movement quantity ("
                                    + movement.getQuantity() + ")"
                    );
                }
                product.setQuantityInStock(product.getQuantityInStock() - movement.getQuantity());
            }
            case STOCK_OUT -> {
                // Reversing STOCK_OUT means returning stock back into inventory
                int currentWarehouseStock = calculateWarehouseTotalStock(warehouse);
                if (currentWarehouseStock + movement.getQuantity() > warehouse.getCapacity()) {
                    throw new WarehouseCapacityExceededException(
                            "Cannot reverse STOCK_OUT movement: warehouse would exceed capacity"
                    );
                }
                product.setQuantityInStock(product.getQuantityInStock() + movement.getQuantity());
            }
            case ADJUSTMENT -> {
                // Revert to previous stock recorded in audit snapshot
                product.setQuantityInStock(movement.getPreviousStock());
            }
        }

        productRepository.save(product);
        stockMovementRepository.delete(movement);
        log.info("Reversed stock movement: ref {}, SKU {}", movement.getReferenceCode(), product.getSku());
    }

    private int calculateWarehouseTotalStock(Warehouse warehouse) {
        List<Product> products = productRepository.findByWarehouseId(warehouse.getId());
        return products.stream()
                .mapToInt(p -> p.getQuantityInStock() != null ? p.getQuantityInStock() : 0)
                .sum();
    }

    private String generateReferenceCode() {
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        int randomSuffix = ThreadLocalRandom.current().nextInt(100, 999);
        return "MOV-" + timestamp + "-" + randomSuffix;
    }

    private StockMovementResponse mapToResponse(StockMovement movement) {
        return new StockMovementResponse(
                movement.getId(),
                movement.getReferenceCode(),
                movement.getMovementType(),
                movement.getQuantity(),
                movement.getPreviousStock(),
                movement.getResultingStock(),
                movement.getMovementDate(),
                movement.getNotes(),
                movement.getProduct().getId(),
                movement.getProduct().getSku(),
                movement.getProduct().getProductName(),
                movement.getWarehouse().getId(),
                movement.getWarehouse().getWarehouseCode(),
                movement.getWarehouse().getWarehouseName(),
                movement.getCreatedAt()
        );
    }
}
