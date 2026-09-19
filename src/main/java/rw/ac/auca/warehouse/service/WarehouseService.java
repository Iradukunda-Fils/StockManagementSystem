package rw.ac.auca.warehouse.service;

import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.dto.WarehouseRequest;
import rw.ac.auca.warehouse.dto.WarehouseResponse;

import java.util.List;
import java.util.UUID;

public interface WarehouseService {

    WarehouseResponse createWarehouse(WarehouseRequest request);

    WarehouseResponse updateWarehouse(UUID id, WarehouseRequest request);

    WarehouseResponse getWarehouseById(UUID id);

    WarehouseResponse getWarehouseByCode(String code);

    List<WarehouseResponse> getAllWarehouses();

    void deleteWarehouse(UUID id);

    Warehouse getWarehouseEntity(UUID id);
}
