package rw.ac.auca.warehouse.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.DuplicateResourceException;
import rw.ac.auca.common.exception.ResourceNotFoundException;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.dto.WarehouseRequest;
import rw.ac.auca.warehouse.dto.WarehouseResponse;
import rw.ac.auca.warehouse.repository.WarehouseRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class WarehouseServiceImpl implements WarehouseService {

    private final WarehouseRepository warehouseRepository;
    private final ProductRepository productRepository;

    @Override
    @Transactional
    public WarehouseResponse createWarehouse(WarehouseRequest request) {
        String normalizedCode = request.warehouseCode().trim().toUpperCase();

        if (warehouseRepository.existsByWarehouseCode(normalizedCode)) {
            throw new DuplicateResourceException("Warehouse with code '" + normalizedCode + "' already exists");
        }

        Warehouse warehouse = Warehouse.builder()
                .warehouseCode(normalizedCode)
                .warehouseName(request.warehouseName().trim())
                .location(request.location().trim())
                .capacity(request.capacity())
                .contactEmail(request.contactEmail() != null ? request.contactEmail().trim() : null)
                .active(request.active() != null ? request.active() : true)
                .build();

        Warehouse saved = warehouseRepository.save(warehouse);
        return mapToResponse(saved);
    }

    @Override
    @Transactional
    public WarehouseResponse updateWarehouse(UUID id, WarehouseRequest request) {
        Warehouse warehouse = getWarehouseEntity(id);
        String normalizedCode = request.warehouseCode().trim().toUpperCase();

        if (warehouseRepository.existsByWarehouseCodeAndIdNot(normalizedCode, id)) {
            throw new DuplicateResourceException("Warehouse code '" + normalizedCode + "' is already in use by another warehouse");
        }

        int currentStock = calculateCurrentStock(warehouse);
        if (request.capacity() < currentStock) {
            throw new BusinessRuleException(
                    "Cannot reduce warehouse capacity to " + request.capacity()
                            + " units because it currently holds " + currentStock + " units of inventory"
            );
        }

        warehouse.setWarehouseCode(normalizedCode);
        warehouse.setWarehouseName(request.warehouseName().trim());
        warehouse.setLocation(request.location().trim());
        warehouse.setCapacity(request.capacity());
        warehouse.setContactEmail(request.contactEmail() != null ? request.contactEmail().trim() : null);
        if (request.active() != null) {
            warehouse.setActive(request.active());
        }

        Warehouse updated = warehouseRepository.save(warehouse);
        return mapToResponse(updated);
    }

    @Override
    public WarehouseResponse getWarehouseById(UUID id) {
        Warehouse warehouse = getWarehouseEntity(id);
        return mapToResponse(warehouse);
    }

    @Override
    public WarehouseResponse getWarehouseByCode(String code) {
        Warehouse warehouse = warehouseRepository.findByWarehouseCode(code.trim().toUpperCase())
                .orElseThrow(() -> new ResourceNotFoundException("Warehouse not found with code: " + code));
        return mapToResponse(warehouse);
    }

    @Override
    public List<WarehouseResponse> getAllWarehouses() {
        return warehouseRepository.findAll().stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    @Transactional
    public void deleteWarehouse(UUID id) {
        Warehouse warehouse = getWarehouseEntity(id);

        if (productRepository.existsByWarehouseId(id)) {
            throw new BusinessRuleException("Cannot delete warehouse '" + warehouse.getWarehouseCode()
                    + "' because it currently has assigned products");
        }

        warehouseRepository.delete(warehouse);
    }

    @Override
    public Warehouse getWarehouseEntity(UUID id) {
        return warehouseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Warehouse not found with id: " + id));
    }

    private int calculateCurrentStock(Warehouse warehouse) {
        if (warehouse.getId() == null) {
            return 0;
        }
        return productRepository.findByWarehouseId(warehouse.getId()).stream()
                .mapToInt(p -> p.getQuantityInStock() != null ? p.getQuantityInStock() : 0)
                .sum();
    }

    private WarehouseResponse mapToResponse(Warehouse warehouse) {
        int currentStock = calculateCurrentStock(warehouse);
        int remaining = Math.max(0, warehouse.getCapacity() - currentStock);

        return new WarehouseResponse(
                warehouse.getId(),
                warehouse.getWarehouseCode(),
                warehouse.getWarehouseName(),
                warehouse.getLocation(),
                warehouse.getCapacity(),
                currentStock,
                remaining,
                warehouse.getContactEmail(),
                warehouse.isActive(),
                warehouse.getCreatedAt(),
                warehouse.getUpdatedAt()
        );
    }
}
