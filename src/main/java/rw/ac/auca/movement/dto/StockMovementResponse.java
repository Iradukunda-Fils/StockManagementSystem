package rw.ac.auca.movement.dto;

import rw.ac.auca.movement.domain.MovementType;

import java.time.LocalDateTime;
import java.util.UUID;

public record StockMovementResponse(
        UUID id,
        String referenceCode,
        MovementType movementType,
        Integer quantity,
        Integer previousStock,
        Integer resultingStock,
        LocalDateTime movementDate,
        String notes,
        UUID productId,
        String productSku,
        String productName,
        UUID warehouseId,
        String warehouseCode,
        String warehouseName,
        LocalDateTime createdAt
) {
}
