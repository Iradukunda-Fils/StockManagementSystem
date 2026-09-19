package rw.ac.auca.movement;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.InsufficientStockException;
import rw.ac.auca.common.exception.WarehouseCapacityExceededException;
import rw.ac.auca.movement.domain.MovementType;
import rw.ac.auca.movement.domain.StockMovement;
import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.dto.StockMovementResponse;
import rw.ac.auca.movement.repository.StockMovementRepository;
import rw.ac.auca.movement.service.StockMovementServiceImpl;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.product.service.ProductService;
import rw.ac.auca.warehouse.domain.Warehouse;

import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class StockMovementServiceTest {

    @Mock
    private StockMovementRepository stockMovementRepository;

    @Mock
    private ProductRepository productRepository;

    @Mock
    private ProductService productService;

    @InjectMocks
    private StockMovementServiceImpl stockMovementService;

    private Warehouse warehouse;
    private Product product;
    private UUID productId;
    private UUID warehouseId;

    @BeforeEach
    void setUp() {
        warehouseId = UUID.randomUUID();
        warehouse = Warehouse.builder()
                .warehouseCode("WH-MAIN")
                .capacity(100)
                .active(true)
                .build();
        warehouse.setId(warehouseId);

        productId = UUID.randomUUID();
        product = Product.builder()
                .sku("SKU-PHONE-01")
                .productName("Smart Phone")
                .price(500.0)
                .quantityInStock(30)
                .warehouse(warehouse)
                .build();
        product.setId(productId);
    }

    @Test
    @DisplayName("Should successfully process STOCK_IN and increase product stock")
    void recordMovement_StockIn_Success() {
        StockMovementRequest inRequest = new StockMovementRequest(
                MovementType.STOCK_IN,
                20,
                productId,
                "New shipment arrival"
        );

        when(productService.getProductEntity(productId)).thenReturn(product);
        when(productRepository.findByWarehouseId(warehouseId)).thenReturn(List.of(product));
        when(stockMovementRepository.save(any(StockMovement.class))).thenAnswer(i -> i.getArgument(0));

        StockMovementResponse response = stockMovementService.recordMovement(inRequest);

        assertThat(response).isNotNull();
        assertThat(response.previousStock()).isEqualTo(30);
        assertThat(response.resultingStock()).isEqualTo(50);
        assertThat(product.getQuantityInStock()).isEqualTo(50);
        verify(productRepository).save(product);
    }

    @Test
    @DisplayName("Should throw WarehouseCapacityExceededException when STOCK_IN exceeds warehouse capacity")
    void recordMovement_StockIn_ExceedsCapacity_ThrowsException() {
        // Warehouse capacity is 100, current stock is 30, adding 80 = 110 > 100!
        StockMovementRequest excessiveIn = new StockMovementRequest(
                MovementType.STOCK_IN,
                80,
                productId,
                "Too large shipment"
        );

        when(productService.getProductEntity(productId)).thenReturn(product);
        when(productRepository.findByWarehouseId(warehouseId)).thenReturn(List.of(product));

        assertThatThrownBy(() -> stockMovementService.recordMovement(excessiveIn))
                .isInstanceOf(WarehouseCapacityExceededException.class)
                .hasMessageContaining("exceeds warehouse 'WH-MAIN' capacity");
    }

    @Test
    @DisplayName("Should successfully process STOCK_OUT and decrease product stock")
    void recordMovement_StockOut_Success() {
        StockMovementRequest outRequest = new StockMovementRequest(
                MovementType.STOCK_OUT,
                15,
                productId,
                "Order fulfillment"
        );

        when(productService.getProductEntity(productId)).thenReturn(product);
        when(stockMovementRepository.save(any(StockMovement.class))).thenAnswer(i -> i.getArgument(0));

        StockMovementResponse response = stockMovementService.recordMovement(outRequest);

        assertThat(response).isNotNull();
        assertThat(response.previousStock()).isEqualTo(30);
        assertThat(response.resultingStock()).isEqualTo(15);
        assertThat(product.getQuantityInStock()).isEqualTo(15);
        verify(productRepository).save(product);
    }

    @Test
    @DisplayName("Should throw InsufficientStockException when STOCK_OUT exceeds current stock")
    void recordMovement_StockOut_InsufficientStock_ThrowsException() {
        // Current stock is 30, requesting 40!
        StockMovementRequest excessiveOut = new StockMovementRequest(
                MovementType.STOCK_OUT,
                40,
                productId,
                "Order too big"
        );

        when(productService.getProductEntity(productId)).thenReturn(product);

        assertThatThrownBy(() -> stockMovementService.recordMovement(excessiveOut))
                .isInstanceOf(InsufficientStockException.class)
                .hasMessageContaining("exceeds current stock");
    }

    @Test
    @DisplayName("Should throw BusinessRuleException when ADJUSTMENT is missing audit notes")
    void recordMovement_AdjustmentMissingNotes_ThrowsException() {
        StockMovementRequest adjWithoutNotes = new StockMovementRequest(
                MovementType.ADJUSTMENT,
                25,
                productId,
                null // Missing mandatory audit reason!
        );

        when(productService.getProductEntity(productId)).thenReturn(product);

        assertThatThrownBy(() -> stockMovementService.recordMovement(adjWithoutNotes))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("audit explanation in 'notes' is mandatory");
    }
}
