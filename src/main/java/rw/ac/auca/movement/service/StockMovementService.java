package rw.ac.auca.movement.service;

import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.dto.StockMovementResponse;

import java.util.List;
import java.util.UUID;

public interface StockMovementService {

    StockMovementResponse recordMovement(StockMovementRequest request);

    StockMovementResponse getMovementById(UUID id);

    StockMovementResponse getMovementByReferenceCode(String referenceCode);

    List<StockMovementResponse> getAllMovements();

    List<StockMovementResponse> getMovementsByProduct(UUID productId);

    List<StockMovementResponse> getMovementsByWarehouse(UUID warehouseId);

    void reverseMovement(UUID id);
}
