# Stock Management System — Technical Documentation & Assignment Report

**Course**: Web Technology / Enterprise Java Application Development  
**Institution**: Adventist University of Central Africa (AUCA)  
**Assignment**: Assignment-4 (Requirements 2, 3 & 4)  
**Submission Deadline**: 20th September 2026  
**Technology Stack**: Spring Boot 4.x, Java 21, Spring Data JPA, Hibernate, PostgreSQL, H2 (Testing), Lombok, Bean Validation, Postman  

---

## 1. Student & Submission Information

| Field | Details |
| :--- | :--- |
| **Student ID** | `[INSERT YOUR STUDENT ID, e.g., 23000]` |
| **Full Name** | `[INSERT YOUR FIRST NAME AND LAST NAME]` |
| **Class / Group** | `Group B / INN-3` |
| **Public GitHub Repository** | https://github.com/Iradukunda-Fils/StockManagementSystem |
| **Video Demonstration Link (Google Vids)** | `[INSERT YOUR GOOGLE VIDS / DRIVE SHAREABLE LINK]` |
| **UI/UX & Figma Specification Guide** | [UI_UX_DESIGN_SPECIFICATION.md](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/UI_UX_DESIGN_SPECIFICATION.md) |
| **Submission Archive Name** | `23000_first_name_last_name_assigment_3.zip` |

---

## 2. Executive Summary & Architectural Design

The **Stock Management System** is an enterprise-grade inventory platform developed to manage multi-warehouse storage facilities, catalog products, track real-time stock balances, and orchestrate transactional stock movements with comprehensive business logic validations.

### Architectural Blueprint (Layered N-Tier Architecture)

```
+-------------------------------------------------------------------------------+
|                       Presentation Layer (REST Controllers)                   |
|   - ProductController, WarehouseController, StockMovementController           |
|   - Handles HTTP Requests/Responses & Statuses (200, 201, 204, 400, 404, 409) |
|   - Enforces Input Bean Validation (@Valid, @NotBlank, @Positive, etc.)       |
+-------------------------------------------------------------------------------+
                                        │  DTOs (Java 21 Records)
                                        ▼
+-------------------------------------------------------------------------------+
|               Global Exception Interceptor (@RestControllerAdvice)            |
|   - Centralized error translation to uniform ErrorResponse JSON format        |
+-------------------------------------------------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                        Business Logic Layer (Services)                        |
|   - WarehouseService, ProductService, StockMovementService                    |
|   - Enforces transactional boundaries (@Transactional)                        |
|   - Enforces domain rules (capacity limits, deficit protection, auditing)     |
+-------------------------------------------------------------------------------+
                                        │  Entities
                                        ▼
+-------------------------------------------------------------------------------+
|                       Data Access Layer (JPA Repositories)                    |
|   - WarehouseRepository, ProductRepository, StockMovementRepository           |
|   - Spring Data JPA abstraction over PostgreSQL / H2 in-memory                |
+-------------------------------------------------------------------------------+
```

### Design Patterns Implemented:
1. **Layered Architecture (Separation of Concerns)**: Clear boundaries between Presentation, Service, Repository, and Persistence layers.
2. **Data Transfer Object (DTO) Pattern with Java 21 Records**: Decouples domain entities from external JSON contracts, preventing mass-assignment vulnerabilities and recursion.
3. **Constructor-Based Dependency Injection (IoC)**: Uses Lombok `@RequiredArgsConstructor` with `final` fields, eliminating fragile field `@Autowired` annotations and facilitating easy unit test mocking.
4. **Base Entity Pattern (`@MappedSuperclass`)**: Centralizes UUID primary keys, versioning (`@Version`), and auditing (`createdAt`, `updatedAt`, `createdBy`, `lastModifiedBy`).
5. **Front Controller / Interceptor Exception Handling Pattern**: Implemented via `@RestControllerAdvice` (`GlobalExceptionHandler`) to translate validation, domain rules, and optimistic lock collisions into standardized RFC-compliant error payloads.
6. **Strategy / Policy Pattern for Inventory Transactions**: Encapsulates specific validation behaviors for each transaction type (`STOCK_IN`, `STOCK_OUT`, and `ADJUSTMENT`).

### Production Hardening for Real-World Workload (~100 Users):
- **Optimistic Locking (`@Version`)**: Solves race conditions where concurrent clerks attempt to dispatch the same stock simultaneously. Concurrency collisions are caught and translated into HTTP 409 Conflict without database deadlock.
- **Enterprise JPA User Auditing (`@CreatedBy`, `@LastModifiedBy`)**: Enabled via `@EnableJpaAuditing` and `SecurityAuditorAware` to track *which* employee created or updated any catalog item or stock movement.
- **Safe Pagination (`Pageable`)**: Endpoint `/api/v1/products/paged` ensures JVM memory stability when inventory catalogs scale to thousands of items.
- **Structured Observability Logging (`@Slf4j`)**: Records audit logs for every stock mutation, stock-out rejection, and reversal.
- **Multi-Threaded Real-World Simulation Test**: `ConcurrentStockSimulationTest` proves thread safety under 10 concurrent warehouse clerks.

---

## 3. The 3 Selected Core Entities

### 1. `Warehouse` (`rw.ac.auca.warehouse.domain.Warehouse`)
Represents physical storage hubs with capacity limits and operational parameters.
- **Attributes**:
  - `id`: `UUID` (Primary Key, autogenerated)
  - `warehouseCode`: `String` (Unique, max 50, e.g., `WH-KGL-01`)
  - `warehouseName`: `String` (Name of facility, max 100)
  - `location`: `String` (Physical address, max 150)
  - `capacity`: `Integer` (Maximum items the warehouse can store)
  - `contactEmail`: `String` (Facility manager email)
  - `active`: `boolean` (Active status)
  - `createdAt`, `updatedAt`: `LocalDateTime`

### 2. `Product` (`rw.ac.auca.product.domain.Product`)
Represents cataloged physical goods held in storage.
- **Attributes**:
  - `id`: `UUID` (Primary Key)
  - `sku`: `String` (Unique Stock Keeping Unit, e.g., `PRD-LAP-001`)
  - `productName`: `String` (Item name, max 100)
  - `description`: `String` (Detailed specs, max 500)
  - `price`: `Double` (Selling/unit price > 0)
  - `quantityInStock`: `Integer` (Current inventory balance)
  - `reorderLevel`: `Integer` (Threshold below which low-stock alerts trigger)
  - `warehouse`: `@ManyToOne` relation to `Warehouse`
  - `createdAt`, `updatedAt`: `LocalDateTime`

### 3. `StockMovement` (`rw.ac.auca.movement.domain.StockMovement`)
The transactional engine recording inventory audit logs for every stock mutation.
- **Attributes**:
  - `id`: `UUID` (Primary Key)
  - `referenceCode`: `String` (Unique audit tracking code, e.g., `MOV-202609-123`)
  - `movementType`: `Enum` (`STOCK_IN`, `STOCK_OUT`, `ADJUSTMENT`)
  - `quantity`: `Integer` (Units moved or counted)
  - `previousStock`: `Integer` (Audit snapshot before mutation)
  - `resultingStock`: `Integer` (Audit snapshot after mutation)
  - `movementDate`: `LocalDateTime`
  - `notes`: `String` (Audit justification / remarks)
  - `product`: `@ManyToOne` relation to `Product`
  - `warehouse`: `@ManyToOne` relation to `Warehouse`

---

## 4. Entity-Relationship (ER) Diagram

```
+----------------------------------+          1:N           +----------------------------------+
|            WAREHOUSES            | ---------------------> |             PRODUCTS             |
+----------------------------------+                        +----------------------------------+
| PK id              : UUID        |                        | PK id              : UUID        |
|    warehouse_code  : VARCHAR(50) |                        |    sku             : VARCHAR(50) |
|    warehouse_name  : VARCHAR(100)|                        |    product_name    : VARCHAR(100)|
|    location        : VARCHAR(150)|                        |    price           : NUMERIC     |
|    capacity        : INTEGER     |                        |    quantity_in_stock: INTEGER   |
|    contact_email   : VARCHAR(100)|                        |    reorder_level   : INTEGER     |
|    active          : BOOLEAN     |                        | FK warehouse_id    : UUID        |
|    created_at      : TIMESTAMP   |                        |    created_at      : TIMESTAMP   |
|    updated_at      : TIMESTAMP   |                        |    updated_at      : TIMESTAMP   |
+----------------------------------+                        +----------------------------------+
                |                                                              |
                | 1:N                                                          | 1:N
                v                                                              v
+----------------------------------------------------------------------------------------------+
|                                       STOCK_MOVEMENTS                                        |
+----------------------------------------------------------------------------------------------+
| PK id              : UUID                                                                    |
|    reference_code  : VARCHAR(50) [UNIQUE]                                                    |
|    movement_type   : VARCHAR(20) [STOCK_IN, STOCK_OUT, ADJUSTMENT]                           |
|    quantity        : INTEGER                                                                 |
|    previous_stock  : INTEGER                                                                 |
|    resulting_stock : INTEGER                                                                 |
|    movement_date   : TIMESTAMP                                                               |
|    notes           : VARCHAR(500)                                                            |
| FK product_id      : UUID                                                                    |
| FK warehouse_id    : UUID                                                                    |
|    created_at      : TIMESTAMP                                                               |
+----------------------------------------------------------------------------------------------+
```

---

## 5. Business Logic Validations Applied

| Entity | Rule / Validation | Exception / HTTP Code | Rationale |
| :--- | :--- | :--- | :--- |
| **Warehouse** | Warehouse code must be unique | `DuplicateResourceException` (409) | Avoids duplicate identification of facilities |
| **Warehouse** | Capacity must be strictly positive (`> 0`) | `MethodArgumentNotValidException` (400) | Enforces physical warehouse reality |
| **Warehouse** | Cannot reduce capacity below current stored stock | `BusinessRuleException` (400) | Prevents phantom storage capacity deficits |
| **Warehouse** | Cannot delete warehouse with assigned products | `BusinessRuleException` (400) | Protects referential and physical integrity |
| **Product** | SKU must be unique | `DuplicateResourceException` (409) | Prevents stock barcode/SKU collisions |
| **Product** | Price must be strictly positive (`> 0.0`) | `MethodArgumentNotValidException` (400) | Ensures non-zero commercial asset valuation |
| **Product** | Assigned warehouse must be active | `BusinessRuleException` (400) | Inactive facilities cannot accept new inventory |
| **Product** | Initial quantity cannot exceed warehouse capacity | `WarehouseCapacityExceededException` (400) | Prevents initial warehouse overloading |
| **Product** | Cannot delete product with remaining stock | `BusinessRuleException` (400) | Must deplete or write-off stock before archiving |
| **Product** | Low stock notification flag | `lowStockAlert` boolean returned in DTO | Proactive alerts when stock drops below threshold |
| **StockMovement** | Quantity must be positive (`> 0`) | `MethodArgumentNotValidException` (400) | Movement size must be greater than zero |
| **StockMovement** | `STOCK_OUT` cannot exceed current stock | `InsufficientStockException` (400) | Prevents negative inventory balances |
| **StockMovement** | `STOCK_IN` cannot exceed warehouse capacity | `WarehouseCapacityExceededException` (400) | Prevents exceeding physical capacity limit |
| **StockMovement** | `ADJUSTMENT` requires audit reason notes | `BusinessRuleException` (400) | Mandatory accounting audit requirement |
| **StockMovement** | Atomic stock mutation | `@Transactional` boundary | Ensures inventory synchronization is ACID-compliant |
| **StockMovement** | Reversal / Deletion restores balances | `@Transactional` with capacity/stock checks | Ensures data integrity on transaction rollbacks |

---

## 6. REST API Endpoints Specification

### Warehouse Endpoints (`/api/v1/warehouses`)
- `POST /api/v1/warehouses`: Create a new warehouse (HTTP 201)
- `GET /api/v1/warehouses`: Retrieve all warehouses with live stock calculations (HTTP 200)
- `GET /api/v1/warehouses/{id}`: Retrieve warehouse by UUID (HTTP 200)
- `GET /api/v1/warehouses/code/{code}`: Retrieve warehouse by code (HTTP 200)
- `PUT /api/v1/warehouses/{id}`: Update warehouse details (HTTP 200)
- `DELETE /api/v1/warehouses/{id}`: Delete an empty warehouse (HTTP 204)

### Product Endpoints (`/api/v1/products`)
- `POST /api/v1/products`: Register a new product (HTTP 201)
- `GET /api/v1/products`: Retrieve all products (HTTP 200)
- `GET /api/v1/products/{id}`: Retrieve product by UUID (HTTP 200)
- `GET /api/v1/products/sku/{sku}`: Retrieve product by SKU (HTTP 200)
- `GET /api/v1/products/warehouse/{warehouseId}`: Retrieve products stored in a warehouse (HTTP 200)
- `GET /api/v1/products/low-stock`: Retrieve items below or equal to reorder level (HTTP 200)
- `PUT /api/v1/products/{id}`: Update product details (HTTP 200)
- `DELETE /api/v1/products/{id}`: Delete product with zero stock (HTTP 204)

### Stock Movement Endpoints (`/api/v1/stock-movements`)
- `POST /api/v1/stock-movements`: Record movement (`STOCK_IN`, `STOCK_OUT`, `ADJUSTMENT`) (HTTP 201)
- `GET /api/v1/stock-movements`: List complete chronological audit trail (HTTP 200)
- `GET /api/v1/stock-movements/{id}`: Retrieve movement by UUID (HTTP 200)
- `GET /api/v1/stock-movements/reference/{referenceCode}`: Lookup by reference code (HTTP 200)
- `GET /api/v1/stock-movements/product/{productId}`: Movement history for a product (HTTP 200)
- `GET /api/v1/stock-movements/warehouse/{warehouseId}`: Movement history for a warehouse (HTTP 200)
- `DELETE /api/v1/stock-movements/{id}`: Reverse movement and adjust stock (HTTP 204)

---

## 7. Sample API Requests & Responses

### 1. Create Warehouse
**Request**: `POST /api/v1/warehouses`
```json
{
  "warehouseCode": "WH-KGL-01",
  "warehouseName": "Kigali Central Distribution Hub",
  "location": "Kigali Special Economic Zone, Masoro",
  "capacity": 1000,
  "contactEmail": "kigali.hub@inventory.rw",
  "active": true
}
```
**Response**: `201 Created`
```json
{
  "success": true,
  "message": "Warehouse created successfully",
  "data": {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "warehouseCode": "WH-KGL-01",
    "warehouseName": "Kigali Central Distribution Hub",
    "location": "Kigali Special Economic Zone, Masoro",
    "capacity": 1000,
    "currentStockCount": 0,
    "remainingCapacity": 1000,
    "contactEmail": "kigali.hub@inventory.rw",
    "active": true,
    "createdAt": "2026-09-19T21:30:00",
    "updatedAt": "2026-09-19T21:30:00"
  },
  "timestamp": "2026-09-19T21:30:00"
}
```

### 2. Validation Error (Negative Capacity)
**Request**: `POST /api/v1/warehouses` with `"capacity": -50`
**Response**: `400 Bad Request`
```json
{
  "timestamp": "2026-09-19T21:30:05",
  "status": 400,
  "error": "Validation Failed",
  "message": "Input validation failed for one or more fields",
  "path": "/api/v1/warehouses",
  "validationErrors": {
    "capacity": "Capacity must be strictly positive"
  }
}
```

### 3. Record Stock Out (Insufficient Stock Failure)
**Request**: `POST /api/v1/stock-movements`
```json
{
  "movementType": "STOCK_OUT",
  "quantity": 500,
  "productId": "8a32b0f1-9c88-43d2-8b61-9f93bf28a110",
  "notes": "Attempting to dispatch more than available"
}
```
**Response**: `400 Bad Request`
```json
{
  "timestamp": "2026-09-19T21:30:10",
  "status": 400,
  "error": "Bad Request",
  "message": "Cannot record STOCK_OUT: Requested quantity (500) exceeds current stock (50) for product SKU: PRD-LAP-001",
  "path": "/api/v1/stock-movements"
}
```

---

## 8. Postman Testing Guide

1. Open **Postman**.
2. Click **Import** in the top-left corner.
3. Select the file: `StockManagementSystem.postman_collection.json` located in the root of the project.
4. The collection is organized into 3 folders:
   - `1. Warehouses` (8 requests)
   - `2. Products` (10 requests)
   - `3. Stock Movements` (10 requests)
5. Notice that collection variables (`warehouseId`, `productId`, `movementId`) are **automatically saved** by test scripts on creation requests, making manual copy-pasting of UUIDs unnecessary!
6. Run the collection using the **Collection Runner** to verify all automated test assertions pass with green checkmarks.

---

## 9. Video Recording Guide (5–10 Minutes via Google Vids)

As required by Assignment-4 (Requirement 4), record a 5–10 minute presentation using Google Vids (or screen recorder with webcam enabled).

### Recommended Video Presentation Script & Outline:

| Time | Agenda Item | Demonstration Content |
| :--- | :--- | :--- |
| **0:00 – 1:00** | **Introduction** | State your name, student ID, course, and project title (*"Stock Management System"*). |
| **1:00 – 2:30** | **Architectural Design** | Show your project structure in your IDE. Explain the N-Tier Layered Architecture (`Controller -> Service -> Repository -> Entity`), DTO records, and Global Exception Handler. |
| **2:30 – 4:30** | **Entity 1: Warehouse CRUD** | Open Postman: Execute `POST /api/v1/warehouses`, demonstrate input validation rejection (negative capacity), duplicate code check, and `GET /api/v1/warehouses`. |
| **4:30 – 6:30** | **Entity 2: Product CRUD** | Demonstrate `POST /api/v1/products`, show warehouse linkage, low-stock threshold alert calculation, and prevention of product deletion when stock > 0. |
| **6:30 – 8:30** | **Entity 3: Stock Movement Engine** | Demonstrate `STOCK_IN` (product stock increases), `STOCK_OUT` (product stock decreases), show business logic validation blocking excessive `STOCK_OUT` (insufficient stock), and warehouse capacity limits. |
| **8:30 – 9:30** | **Automated Tests** | Run `./mvnw test` in your terminal to demonstrate all 17 automated unit and integration tests passing (`BUILD SUCCESS`). |
| **9:30 – 10:00** | **Conclusion** | Mention your public GitHub repository and conclude the presentation. |

---

## 10. Packaging & Submission Instructions

Follow these exact steps to prepare your submission archive before the deadline:

1. **Update Placeholders**:
   - In this `DOCUMENTATION.md` file, replace `[INSERT YOUR STUDENT ID]` with your actual AUCA Student ID.
   - Insert your Name, Public GitHub URL, and Google Vids video link.

2. **Commit & Push to GitHub**:
   ```bash
   git add .
   git commit -m "Complete Assignment 4 Stock Management System implementation"
   git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
   git push -u origin master
   ```

3. **Package the Project Zip**:
   Format: `23000_first_name_last_name_assigment_3.zip` (replacing with your details):
   ```bash
   zip -r 23000_first_name_last_name_assigment_3.zip . -x "target/*" ".git/*" ".idea/*"
   ```

4. **Verify Contents of Zip**:
   Ensure the zip file contains:
   - Complete Spring Boot source code (`src/`, `pom.xml`, `mvnw`)
   - `DOCUMENTATION.md` (with GitHub link and Video link)
   - `StockManagementSystem.postman_collection.json`
