package rw.ac.auca.movement.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import rw.ac.auca.common.dto.ApiResponse;
import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.dto.StockMovementResponse;
import rw.ac.auca.movement.service.StockMovementService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/stock-movements")
@RequiredArgsConstructor
public class StockMovementController {

    private final StockMovementService stockMovementService;

    @PostMapping
    public ResponseEntity<ApiResponse<StockMovementResponse>> recordMovement(
            @Valid @RequestBody StockMovementRequest request) {
        StockMovementResponse created = stockMovementService.recordMovement(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Stock movement recorded successfully", created));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<StockMovementResponse>>> getAllMovements() {
        List<StockMovementResponse> movements = stockMovementService.getAllMovements();
        return ResponseEntity.ok(ApiResponse.success("Stock movements retrieved successfully", movements));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<StockMovementResponse>> getMovementById(@PathVariable UUID id) {
        StockMovementResponse movement = stockMovementService.getMovementById(id);
        return ResponseEntity.ok(ApiResponse.success("Stock movement retrieved successfully", movement));
    }

    @GetMapping("/reference/{referenceCode}")
    public ResponseEntity<ApiResponse<StockMovementResponse>> getMovementByReferenceCode(
            @PathVariable String referenceCode) {
        StockMovementResponse movement = stockMovementService.getMovementByReferenceCode(referenceCode);
        return ResponseEntity.ok(ApiResponse.success("Stock movement retrieved successfully", movement));
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<ApiResponse<List<StockMovementResponse>>> getMovementsByProduct(
            @PathVariable UUID productId) {
        List<StockMovementResponse> movements = stockMovementService.getMovementsByProduct(productId);
        return ResponseEntity.ok(ApiResponse.success("Product movements retrieved successfully", movements));
    }

    @GetMapping("/warehouse/{warehouseId}")
    public ResponseEntity<ApiResponse<List<StockMovementResponse>>> getMovementsByWarehouse(
            @PathVariable UUID warehouseId) {
        List<StockMovementResponse> movements = stockMovementService.getMovementsByWarehouse(warehouseId);
        return ResponseEntity.ok(ApiResponse.success("Warehouse movements retrieved successfully", movements));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Void> reverseMovement(@PathVariable UUID id) {
        stockMovementService.reverseMovement(id);
        return ResponseEntity.noContent().build();
    }
}
