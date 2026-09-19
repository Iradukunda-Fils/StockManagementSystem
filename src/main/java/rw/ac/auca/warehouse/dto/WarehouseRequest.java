package rw.ac.auca.warehouse.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record WarehouseRequest(
        @NotBlank(message = "Warehouse code is mandatory")
        @Size(min = 3, max = 50, message = "Warehouse code must be between 3 and 50 characters")
        String warehouseCode,

        @NotBlank(message = "Warehouse name is mandatory")
        @Size(max = 100, message = "Warehouse name must not exceed 100 characters")
        String warehouseName,

        @NotBlank(message = "Warehouse location is mandatory")
        @Size(max = 150, message = "Warehouse location must not exceed 150 characters")
        String location,

        @NotNull(message = "Capacity is mandatory")
        @Positive(message = "Capacity must be strictly positive")
        Integer capacity,

        @Email(message = "Contact email must be a valid email address")
        String contactEmail,

        Boolean active
) {
}
