package rw.ac.auca.product.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

import java.util.UUID;

public record ProductRequest(
        @NotBlank(message = "Product SKU is mandatory")
        @Size(min = 3, max = 50, message = "Product SKU must be between 3 and 50 characters")
        String sku,

        @NotBlank(message = "Product name is mandatory")
        @Size(max = 100, message = "Product name must not exceed 100 characters")
        String productName,

        @Size(max = 500, message = "Description must not exceed 500 characters")
        String description,

        @NotNull(message = "Price is mandatory")
        @Positive(message = "Price must be strictly positive")
        Double price,

        @NotNull(message = "Quantity in stock is mandatory")
        @Min(value = 0, message = "Quantity in stock cannot be negative")
        Integer quantityInStock,

        @NotNull(message = "Reorder level is mandatory")
        @Min(value = 0, message = "Reorder level cannot be negative")
        Integer reorderLevel,

        @NotNull(message = "Warehouse ID is mandatory")
        UUID warehouseId
) {
}
