package rw.ac.auca;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;
import rw.ac.auca.common.dto.ApiResponse;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.DuplicateResourceException;
import rw.ac.auca.common.exception.InsufficientStockException;
import rw.ac.auca.controller.ProductController;
import rw.ac.auca.movement.controller.StockMovementController;
import rw.ac.auca.movement.domain.MovementType;
import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.dto.StockMovementResponse;
import rw.ac.auca.product.dto.ProductRequest;
import rw.ac.auca.product.dto.ProductResponse;
import rw.ac.auca.warehouse.controller.WarehouseController;
import rw.ac.auca.warehouse.dto.WarehouseRequest;
import rw.ac.auca.warehouse.dto.WarehouseResponse;

import java.util.List;
import java.util.UUID;

import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.service.ProductService;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
class StockManagementApiIntegrationTest {

    @Autowired
    private WarehouseController warehouseController;

    @Autowired
    private ProductController productController;

    @Autowired
    private StockMovementController stockMovementController;

    @Autowired
    private ProductService productService;

    @Test
    @DisplayName("End-to-End Flow: Warehouse -> Product -> Stock Movements -> Inventory Balances")
    void completeEndToEndIntegrationFlow() {
        // 1. Create Warehouse
        WarehouseRequest whReq = new WarehouseRequest(
                "WH-INT-01",
                "Kigali Logistics Hub",
                "Gahanga, Kigali",
                500,
                "hub@logistics.rw",
                true
        );

        ResponseEntity<ApiResponse<WarehouseResponse>> whResponse = warehouseController.createWarehouse(whReq);
        assertThat(whResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(whResponse.getBody()).isNotNull();
        assertThat(whResponse.getBody().isSuccess()).isTrue();

        WarehouseResponse createdWh = whResponse.getBody().getData();
        UUID warehouseId = createdWh.id();
        assertThat(createdWh.warehouseCode()).isEqualTo("WH-INT-01");
        assertThat(createdWh.capacity()).isEqualTo(500);

        // 2. Test Duplicate Warehouse validation
        assertThatThrownBy(() -> warehouseController.createWarehouse(whReq))
                .isInstanceOf(DuplicateResourceException.class)
                .hasMessageContaining("already exists");

        // 3. Create Product assigned to Warehouse
        ProductRequest prodReq = new ProductRequest(
                "SKU-INT-001",
                "Logitech MX Master 3S",
                "Ergonomic wireless mouse",
                99.99,
                50,
                10,
                warehouseId
        );

        ResponseEntity<ApiResponse<ProductResponse>> prodResponse = productController.createProduct(prodReq);
        assertThat(prodResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(prodResponse.getBody()).isNotNull();

        ProductResponse createdProd = prodResponse.getBody().getData();
        UUID productId = createdProd.id();
        assertThat(createdProd.sku()).isEqualTo("SKU-INT-001");
        assertThat(createdProd.quantityInStock()).isEqualTo(50);
        assertThat(createdProd.lowStockAlert()).isFalse();

        // 4. Test Duplicate SKU validation
        assertThatThrownBy(() -> productController.createProduct(prodReq))
                .isInstanceOf(DuplicateResourceException.class)
                .hasMessageContaining("already exists");

        // 5. Record STOCK_IN movement (+30 units)
        StockMovementRequest stockInReq = new StockMovementRequest(
                MovementType.STOCK_IN,
                30,
                productId,
                "Restock from supplier shipment"
        );

        ResponseEntity<ApiResponse<StockMovementResponse>> stockInResp = stockMovementController.recordMovement(stockInReq);
        assertThat(stockInResp.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(stockInResp.getBody()).isNotNull();
        assertThat(stockInResp.getBody().getData().previousStock()).isEqualTo(50);
        assertThat(stockInResp.getBody().getData().resultingStock()).isEqualTo(80);

        // 6. Verify product stock is updated in database
        ProductResponse fetchedProd = productController.getProductById(productId).getBody().getData();
        assertThat(fetchedProd.quantityInStock()).isEqualTo(80);

        // 7. Record STOCK_OUT movement (-40 units)
        StockMovementRequest stockOutReq = new StockMovementRequest(
                MovementType.STOCK_OUT,
                40,
                productId,
                "Sales dispatch to retail store"
        );

        ResponseEntity<ApiResponse<StockMovementResponse>> stockOutResp = stockMovementController.recordMovement(stockOutReq);
        assertThat(stockOutResp.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(stockOutResp.getBody().getData().previousStock()).isEqualTo(80);
        assertThat(stockOutResp.getBody().getData().resultingStock()).isEqualTo(40);

        // 8. Test Business Logic: Prevent Insufficient Stock on excessive STOCK_OUT
        StockMovementRequest excessiveOut = new StockMovementRequest(
                MovementType.STOCK_OUT,
                100, // Available is only 40!
                productId,
                "Impossible order"
        );

        assertThatThrownBy(() -> stockMovementController.recordMovement(excessiveOut))
                .isInstanceOf(InsufficientStockException.class)
                .hasMessageContaining("exceeds current stock");

        // 9. Query Low Stock Products
        ResponseEntity<ApiResponse<List<ProductResponse>>> lowStockResp = productController.getLowStockProducts();
        assertThat(lowStockResp.getStatusCode()).isEqualTo(HttpStatus.OK);

        // 10. Verify Warehouse Stock and remaining capacity calculation
        WarehouseResponse updatedWh = warehouseController.getWarehouseById(warehouseId).getBody().getData();
        assertThat(updatedWh.currentStockCount()).isEqualTo(40);
        assertThat(updatedWh.remainingCapacity()).isEqualTo(460);

        // 11. Test Deletion Protection: Cannot delete warehouse with products
        assertThatThrownBy(() -> warehouseController.deleteWarehouse(warehouseId))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("currently has assigned products");

        // 12. Test Deletion Protection: Cannot delete product with stock > 0
        assertThatThrownBy(() -> productController.deleteProduct(productId))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("currently has 40 units in stock");

        // 13. Verify Production Auditing & Optimistic Locking Version
        Product entity = productService.getProductEntity(productId);
        assertThat(entity.getVersion()).isNotNull();
        assertThat(entity.getCreatedBy()).isNotNull();
        assertThat(entity.getCreatedAt()).isNotNull();

        // 14. Verify Safe Pagination Endpoint
        var pagedResp = productController.getProductsPaged(org.springframework.data.domain.PageRequest.of(0, 10));
        assertThat(pagedResp.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(pagedResp.getBody()).isNotNull();
        assertThat(pagedResp.getBody().getData().getTotalElements()).isGreaterThanOrEqualTo(1);
    }
}
