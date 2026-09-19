package rw.ac.auca.product.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rw.ac.auca.product.domain.Product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {

    Optional<Product> findBySku(String sku);

    boolean existsBySku(String sku);

    boolean existsBySkuAndIdNot(String sku, UUID id);

    List<Product> findByWarehouseId(UUID warehouseId);

    Page<Product> findByWarehouseId(UUID warehouseId, Pageable pageable);

    List<Product> findByQuantityInStockLessThanEqual(Integer threshold);

    boolean existsByWarehouseId(UUID warehouseId);
}
