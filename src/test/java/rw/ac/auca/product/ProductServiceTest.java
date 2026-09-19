package rw.ac.auca.product;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.common.exception.DuplicateResourceException;
import rw.ac.auca.common.exception.ResourceNotFoundException;
import rw.ac.auca.common.exception.WarehouseCapacityExceededException;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.dto.ProductRequest;
import rw.ac.auca.product.dto.ProductResponse;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.product.service.ProductServiceImpl;
import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.service.WarehouseService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @Mock
    private WarehouseService warehouseService;

    @InjectMocks
    private ProductServiceImpl productService;

    private Warehouse warehouse;
    private Product product;
    private ProductRequest validRequest;
    private UUID productId;
    private UUID warehouseId;

    @BeforeEach
    void setUp() {
        warehouseId = UUID.randomUUID();
        warehouse = Warehouse.builder()
                .warehouseCode("WH-01")
                .warehouseName("Main Warehouse")
                .capacity(500)
                .active(true)
                .products(new ArrayList<>())
                .build();
        warehouse.setId(warehouseId);

        productId = UUID.randomUUID();
        product = Product.builder()
                .sku("SKU-LAP-001")
                .productName("Dell XPS 15")
                .description("Developer laptop")
                .price(1500.0)
                .quantityInStock(20)
                .reorderLevel(5)
                .warehouse(warehouse)
                .build();
        product.setId(productId);

        validRequest = new ProductRequest(
                "SKU-LAP-001",
                "Dell XPS 15",
                "Developer laptop",
                1500.0,
                20,
                5,
                warehouseId
        );
    }

    @Test
    @DisplayName("Should successfully register a product when details are valid")
    void registerProduct_Success() {
        when(productRepository.existsBySku("SKU-LAP-001")).thenReturn(false);
        when(warehouseService.getWarehouseEntity(warehouseId)).thenReturn(warehouse);
        when(productRepository.save(any(Product.class))).thenReturn(product);

        ProductResponse response = productService.registerProduct(validRequest);

        assertThat(response).isNotNull();
        assertThat(response.sku()).isEqualTo("SKU-LAP-001");
        assertThat(response.quantityInStock()).isEqualTo(20);
        assertThat(response.lowStockAlert()).isFalse();
        verify(productRepository).save(any(Product.class));
    }

    @Test
    @DisplayName("Should throw DuplicateResourceException when product SKU already exists")
    void registerProduct_DuplicateSku_ThrowsException() {
        when(productRepository.existsBySku("SKU-LAP-001")).thenReturn(true);

        assertThatThrownBy(() -> productService.registerProduct(validRequest))
                .isInstanceOf(DuplicateResourceException.class)
                .hasMessageContaining("already exists");

        verify(productRepository, never()).save(any());
    }

    @Test
    @DisplayName("Should throw WarehouseCapacityExceededException when initial quantity exceeds capacity")
    void registerProduct_ExceedCapacity_ThrowsException() {
        ProductRequest excessiveReq = new ProductRequest(
                "SKU-BULK-001",
                "Bulk Item",
                "Large batch",
                10.0,
                600, // exceeds warehouse capacity of 500
                50,
                warehouseId
        );

        when(productRepository.existsBySku("SKU-BULK-001")).thenReturn(false);
        when(warehouseService.getWarehouseEntity(warehouseId)).thenReturn(warehouse);

        assertThatThrownBy(() -> productService.registerProduct(excessiveReq))
                .isInstanceOf(WarehouseCapacityExceededException.class)
                .hasMessageContaining("exceeds warehouse capacity");
    }

    @Test
    @DisplayName("Should throw BusinessRuleException when deleting product with stock remaining")
    void deleteProduct_WithStockRemaining_ThrowsException() {
        when(productRepository.findById(productId)).thenReturn(Optional.of(product));

        assertThatThrownBy(() -> productService.deleteProduct(productId))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("because it currently has 20 units in stock");

        verify(productRepository, never()).delete(any());
    }

    @Test
    @DisplayName("Should flag lowStockAlert when quantity is below or equal to reorder level")
    void findLowStockProducts_DetectsLowStock() {
        Product lowStockProduct = Product.builder()
                .sku("SKU-MOUSE-01")
                .productName("Wireless Mouse")
                .price(25.0)
                .quantityInStock(2)
                .reorderLevel(10) // 2 <= 10 -> Low stock!
                .warehouse(warehouse)
                .build();

        when(productRepository.findAll()).thenReturn(List.of(lowStockProduct));

        List<ProductResponse> lowStockList = productService.findLowStockProducts();

        assertThat(lowStockList).hasSize(1);
        assertThat(lowStockList.get(0).lowStockAlert()).isTrue();
    }
}
