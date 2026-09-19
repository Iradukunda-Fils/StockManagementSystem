package rw.ac.auca.warehouse.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record WarehouseResponse(
        UUID id,
        String warehouseCode,
        String warehouseName,
        String location,
        Integer capacity,
        Integer currentStockCount,
        Integer remainingCapacity,
        String contactEmail,
        boolean active,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
