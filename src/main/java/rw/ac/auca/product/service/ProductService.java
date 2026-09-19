package rw.ac.auca.product.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import rw.ac.auca.product.domain.Product;
import rw.ac.auca.product.dto.ProductRequest;
import rw.ac.auca.product.dto.ProductResponse;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    ProductResponse registerProduct(ProductRequest request);

    ProductResponse updateProduct(UUID id, ProductRequest request);

    ProductResponse findProductById(UUID id);

    ProductResponse findProductBySku(String sku);

    List<ProductResponse> findAllProducts();

    Page<ProductResponse> findAllProductsPaged(Pageable pageable);

    List<ProductResponse> findProductsByWarehouse(UUID warehouseId);

    List<ProductResponse> findLowStockProducts();

    void deleteProduct(UUID id);

    Product getProductEntity(UUID id);
}
