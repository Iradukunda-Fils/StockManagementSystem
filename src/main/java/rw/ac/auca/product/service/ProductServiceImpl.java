package rw.ac.auca.product.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.DuplicateResourceException;
import rw.ac.auca.common.exception.ResourceNotFoundException;
import rw.ac.auca.common.exception.WarehouseCapacityExceededException;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.dto.ProductRequest;
import rw.ac.auca.product.dto.ProductResponse;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.service.WarehouseService;

import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final WarehouseService warehouseService;

    @Override
    @Transactional
    public ProductResponse registerProduct(ProductRequest request) {
        String normalizedSku = request.sku().trim().toUpperCase();

        if (productRepository.existsBySku(normalizedSku)) {
            log.warn("Attempt to register duplicate product SKU: {}", normalizedSku);
            throw new DuplicateResourceException("Product with SKU '" + normalizedSku + "' already exists");
        }

        Warehouse warehouse = warehouseService.getWarehouseEntity(request.warehouseId());
        if (!warehouse.isActive()) {
            throw new BusinessRuleException("Cannot assign product to inactive warehouse: " + warehouse.getWarehouseCode());
        }

        // Validate warehouse capacity against initial quantity
        int currentStored = calculateWarehouseCurrentStock(warehouse);
        if (currentStored + request.quantityInStock() > warehouse.getCapacity()) {
            throw new WarehouseCapacityExceededException(
                    "Adding " + request.quantityInStock() + " units exceeds warehouse capacity. "
                            + "Current stock: " + currentStored + ", Capacity: " + warehouse.getCapacity()
            );
        }

        Product product = Product.builder()
                .sku(normalizedSku)
                .productName(request.productName().trim())
                .description(request.description() != null ? request.description().trim() : null)
                .price(request.price())
                .quantityInStock(request.quantityInStock())
                .reorderLevel(request.reorderLevel())
                .warehouse(warehouse)
                .build();

        Product saved = productRepository.save(product);
        log.info("Registered product: {} ({}) in warehouse: {}", saved.getProductName(), saved.getSku(), warehouse.getWarehouseCode());
        return mapToResponse(saved);
    }

    @Override
    @Transactional
    public ProductResponse updateProduct(UUID id, ProductRequest request) {
        Product product = getProductEntity(id);
        String normalizedSku = request.sku().trim().toUpperCase();

        if (productRepository.existsBySkuAndIdNot(normalizedSku, id)) {
            throw new DuplicateResourceException("Product SKU '" + normalizedSku + "' is already in use by another product");
        }

        Warehouse newWarehouse = warehouseService.getWarehouseEntity(request.warehouseId());
        if (!newWarehouse.isActive()) {
            throw new BusinessRuleException("Cannot assign product to inactive warehouse: " + newWarehouse.getWarehouseCode());
        }

        // Check capacity if moving warehouse or updating stock
        int additionalStock;
        if (product.getWarehouse().getId().equals(newWarehouse.getId())) {
            additionalStock = request.quantityInStock() - product.getQuantityInStock();
        } else {
            additionalStock = request.quantityInStock();
        }

        if (additionalStock > 0) {
            int currentStored = calculateWarehouseCurrentStock(newWarehouse);
            if (currentStored + additionalStock > newWarehouse.getCapacity()) {
                throw new WarehouseCapacityExceededException(
                        "Updating product exceeds warehouse capacity. "
                                + "Available capacity: " + (newWarehouse.getCapacity() - currentStored)
                );
            }
        }

        product.setSku(normalizedSku);
        product.setProductName(request.productName().trim());
        product.setDescription(request.description() != null ? request.description().trim() : null);
        product.setPrice(request.price());
        product.setQuantityInStock(request.quantityInStock());
        product.setReorderLevel(request.reorderLevel());
        product.setWarehouse(newWarehouse);

        Product updated = productRepository.save(product);
        log.info("Updated product ID: {}, new SKU: {}", id, normalizedSku);
        return mapToResponse(updated);
    }

    @Override
    public ProductResponse findProductById(UUID id) {
        Product product = getProductEntity(id);
        return mapToResponse(product);
    }

    @Override
    public ProductResponse findProductBySku(String sku) {
        Product product = productRepository.findBySku(sku.trim().toUpperCase())
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with SKU: " + sku));
        return mapToResponse(product);
    }

    @Override
    public List<ProductResponse> findAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public Page<ProductResponse> findAllProductsPaged(Pageable pageable) {
        return productRepository.findAll(pageable)
                .map(this::mapToResponse);
    }

    @Override
    public List<ProductResponse> findProductsByWarehouse(UUID warehouseId) {
        warehouseService.getWarehouseEntity(warehouseId); // verify exists
        return productRepository.findByWarehouseId(warehouseId).stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public List<ProductResponse> findLowStockProducts() {
        return productRepository.findAll().stream()
                .filter(p -> p.getQuantityInStock() <= p.getReorderLevel())
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    @Transactional
    public void deleteProduct(UUID id) {
        Product product = getProductEntity(id);

        if (product.getQuantityInStock() > 0) {
            log.warn("Rejected deletion of product {} because {} units remain in stock", product.getSku(), product.getQuantityInStock());
            throw new BusinessRuleException(
                    "Cannot delete product '" + product.getProductName()
                            + "' because it currently has " + product.getQuantityInStock()
                            + " units in stock. Please deplete or write off stock first."
            );
        }

        productRepository.delete(product);
        log.info("Deleted product ID: {}, SKU: {}", id, product.getSku());
    }

    @Override
    public Product getProductEntity(UUID id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    private int calculateWarehouseCurrentStock(Warehouse warehouse) {
        if (warehouse.getProducts() == null || warehouse.getProducts().isEmpty()) {
            return 0;
        }
        return warehouse.getProducts().stream()
                .mapToInt(p -> p.getQuantityInStock() != null ? p.getQuantityInStock() : 0)
                .sum();
    }

    private ProductResponse mapToResponse(Product product) {
        boolean isLowStock = product.getQuantityInStock() <= product.getReorderLevel();
        return new ProductResponse(
                product.getId(),
                product.getSku(),
                product.getProductName(),
                product.getDescription(),
                product.getPrice(),
                product.getQuantityInStock(),
                product.getReorderLevel(),
                isLowStock,
                product.getWarehouse().getId(),
                product.getWarehouse().getWarehouseCode(),
                product.getWarehouse().getWarehouseName(),
                product.getCreatedAt(),
                product.getUpdatedAt()
        );
    }
}
