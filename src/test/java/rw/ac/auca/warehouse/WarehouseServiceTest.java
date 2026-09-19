package rw.ac.auca.warehouse;

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
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.repository.ProductRepository;
import rw.ac.auca.warehouse.domain.Warehouse;
import rw.ac.auca.warehouse.dto.WarehouseRequest;
import rw.ac.auca.warehouse.dto.WarehouseResponse;
import rw.ac.auca.warehouse.repository.WarehouseRepository;
import rw.ac.auca.warehouse.service.WarehouseServiceImpl;

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
class WarehouseServiceTest {

    @Mock
    private WarehouseRepository warehouseRepository;

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private WarehouseServiceImpl warehouseService;

    private Warehouse warehouse;
    private WarehouseRequest validRequest;
    private UUID warehouseId;

    @BeforeEach
    void setUp() {
        warehouseId = UUID.randomUUID();
        warehouse = Warehouse.builder()
                .warehouseCode("WH-KGL-01")
                .warehouseName("Kigali Central Hub")
                .location("Kigali Special Economic Zone")
                .capacity(1000)
                .contactEmail("kigali@warehouse.rw")
                .active(true)
                .products(new ArrayList<>())
                .build();
        warehouse.setId(warehouseId);

        validRequest = new WarehouseRequest(
                "WH-KGL-01",
                "Kigali Central Hub",
                "Kigali Special Economic Zone",
                1000,
                "kigali@warehouse.rw",
                true
        );
    }

    @Test
    @DisplayName("Should successfully create a warehouse when data is valid")
    void createWarehouse_Success() {
        when(warehouseRepository.existsByWarehouseCode("WH-KGL-01")).thenReturn(false);
        when(warehouseRepository.save(any(Warehouse.class))).thenReturn(warehouse);

        WarehouseResponse response = warehouseService.createWarehouse(validRequest);

        assertThat(response).isNotNull();
        assertThat(response.warehouseCode()).isEqualTo("WH-KGL-01");
        assertThat(response.capacity()).isEqualTo(1000);
        verify(warehouseRepository).save(any(Warehouse.class));
    }

    @Test
    @DisplayName("Should throw DuplicateResourceException when warehouse code already exists")
    void createWarehouse_DuplicateCode_ThrowsException() {
        when(warehouseRepository.existsByWarehouseCode("WH-KGL-01")).thenReturn(true);

        assertThatThrownBy(() -> warehouseService.createWarehouse(validRequest))
                .isInstanceOf(DuplicateResourceException.class)
                .hasMessageContaining("already exists");

        verify(warehouseRepository, never()).save(any());
    }

    @Test
    @DisplayName("Should throw BusinessRuleException when reducing capacity below current stock")
    void updateWarehouse_ReduceCapacityBelowStock_ThrowsException() {
        Product p = Product.builder()
                .productName("Item")
                .quantityInStock(500)
                .build();

        when(warehouseRepository.findById(warehouseId)).thenReturn(Optional.of(warehouse));
        when(warehouseRepository.existsByWarehouseCodeAndIdNot("WH-KGL-01", warehouseId)).thenReturn(false);
        when(productRepository.findByWarehouseId(warehouseId)).thenReturn(List.of(p));

        WarehouseRequest updateReq = new WarehouseRequest(
                "WH-KGL-01",
                "Kigali Central Hub",
                "Kigali SEZ",
                400, // lower than current 500
                "contact@wh.rw",
                true
        );

        assertThatThrownBy(() -> warehouseService.updateWarehouse(warehouseId, updateReq))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("Cannot reduce warehouse capacity");
    }

    @Test
    @DisplayName("Should throw BusinessRuleException when deleting warehouse with assigned products")
    void deleteWarehouse_WithAssignedProducts_ThrowsException() {
        when(warehouseRepository.findById(warehouseId)).thenReturn(Optional.of(warehouse));
        when(productRepository.existsByWarehouseId(warehouseId)).thenReturn(true);

        assertThatThrownBy(() -> warehouseService.deleteWarehouse(warehouseId))
                .isInstanceOf(BusinessRuleException.class)
                .hasMessageContaining("currently has assigned products");

        verify(warehouseRepository, never()).delete(any());
    }

    @Test
    @DisplayName("Should throw ResourceNotFoundException when warehouse ID is not found")
    void getWarehouseById_NotFound_ThrowsException() {
        UUID randomId = UUID.randomUUID();
        when(warehouseRepository.findById(randomId)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> warehouseService.getWarehouseById(randomId))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessageContaining("Warehouse not found");
    }
}
