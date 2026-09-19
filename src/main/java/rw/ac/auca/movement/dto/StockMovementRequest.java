package rw.ac.auca.movement.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import rw.ac.auca.movement.domain.MovementType;

import java.util.UUID;

public record StockMovementRequest(
        @NotNull(message = "Movement type is mandatory (STOCK_IN, STOCK_OUT, ADJUSTMENT)")
        MovementType movementType,

        @NotNull(message = "Quantity is mandatory")
        @Positive(message = "Quantity must be strictly positive")
        Integer quantity,

        @NotNull(message = "Product ID is mandatory")
        UUID productId,

        @Size(max = 500, message = "Notes must not exceed 500 characters")
        String notes
) {
}
