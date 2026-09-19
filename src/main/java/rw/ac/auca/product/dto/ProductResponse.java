package rw.ac.auca.product.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record ProductResponse(
        UUID id,
        String sku,
        String productName,
        String description,
        Double price,
        Integer quantityInStock,
        Integer reorderLevel,
        boolean lowStockAlert,
        UUID warehouseId,
        String warehouseCode,
        String warehouseName,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
