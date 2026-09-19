package rw.ac.auca.movement;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import rw.ac.auca.common.exception.BusinessRuleException;
import rw.ac.auca.movement.domain.MovementType;
import rw.ac.auca.movement.dto.StockMovementRequest;
import rw.ac.auca.movement.service.StockMovementService;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.dto.ProductRequest;
import rw.ac.auca.product.dto.ProductResponse;
import rw.ac.auca.product.service.ProductService;
import rw.ac.auca.warehouse.dto.WarehouseRequest;
import rw.ac.auca.warehouse.dto.WarehouseResponse;
import rw.ac.auca.warehouse.service.WarehouseService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
class ConcurrentStockSimulationTest {

    @Autowired
    private WarehouseService warehouseService;

    @Autowired
    private ProductService productService;

    @Autowired
    private StockMovementService stockMovementService;

    @Test
    @DisplayName("Real-World Simulation: 10 Concurrent Warehouse Clerks Dispatching Simultaneously")
    void simulateConcurrentStockDispatches() throws InterruptedException {
        // 1. Setup Warehouse with high capacity
        WarehouseRequest whReq = new WarehouseRequest(
                "WH-CONC-01",
                "Concurrent Test Facility",
                "Kigali Hub",
                5000,
                "ops@warehouse.rw",
                true
        );
        WarehouseResponse wh = warehouseService.createWarehouse(whReq);

        // 2. Setup Product with initial stock of 50 units
        int initialStock = 50;
        ProductRequest prodReq = new ProductRequest(
                "SKU-CONC-001",
                "High-Demand Widget",
                "Hot-selling retail item",
                45.0,
                initialStock,
                10,
                wh.id()
        );
        ProductResponse prod = productService.registerProduct(prodReq);
        UUID productId = prod.id();

        // 3. Simulate 10 concurrent clerks all trying to dispatch 10 units each (Total demand = 100 units > 50 units!)
        int numberOfClerks = 10;
        int unitsPerClerk = 10;

        ExecutorService executor = Executors.newFixedThreadPool(numberOfClerks);
        CountDownLatch startSignal = new CountDownLatch(1);
        CountDownLatch doneSignal = new CountDownLatch(numberOfClerks);

        AtomicInteger successfulDispatches = new AtomicInteger(0);
        AtomicInteger failedDispatches = new AtomicInteger(0);
        List<String> errorMessages = Collections.synchronizedList(new ArrayList<>());

        for (int i = 0; i < numberOfClerks; i++) {
            executor.submit(() -> {
                try {
                    startSignal.await(); // Synchronize all 10 threads to fire simultaneously

                    StockMovementRequest dispatchReq = new StockMovementRequest(
                            MovementType.STOCK_OUT,
                            unitsPerClerk,
                            productId,
                            "Concurrent customer checkout order"
                    );

                    stockMovementService.recordMovement(dispatchReq);
                    successfulDispatches.incrementAndGet();
                } catch (Exception ex) {
                    failedDispatches.incrementAndGet();
                    errorMessages.add(ex.getClass().getSimpleName() + ": " + ex.getMessage());
                } finally {
                    doneSignal.countDown();
                }
            });
        }

        // Fire all threads at the exact same instant
        startSignal.countDown();
        boolean completed = doneSignal.await(15, TimeUnit.SECONDS);
        executor.shutdown();

        assertThat(completed).isTrue();

        // 4. Verify System Invariants
        Product finalProduct = productService.getProductEntity(productId);
        int finalStock = finalProduct.getQuantityInStock();

        int totalUnitsDispatched = successfulDispatches.get() * unitsPerClerk;

        System.out.println("=== Simulation Results ===");
        System.out.println("Initial Stock: " + initialStock);
        System.out.println("Successful dispatches: " + successfulDispatches.get() + " (" + totalUnitsDispatched + " units)");
        System.out.println("Rejected dispatches: " + failedDispatches.get());
        System.out.println("Final Stock remaining: " + finalStock);

        // Core Invariants:
        // 1. Stock must NEVER be negative
        assertThat(finalStock).isGreaterThanOrEqualTo(0);

        // 2. Inventory conservation: (initialStock) must strictly equal (dispatched + remaining)
        assertThat(totalUnitsDispatched + finalStock).isEqualTo(initialStock);

        // 3. We cannot have dispatched more units than initially available
        assertThat(totalUnitsDispatched).isLessThanOrEqualTo(initialStock);
    }
}
