# 📦 Enterprise Stock Management System

[![Java 21](https://img.shields.io/badge/Java-21%20LTS-orange.svg?style=flat&logo=openjdk)](https://openjdk.org/projects/jdk/21/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4%2B-green.svg?style=flat&logo=springboot)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%20Alpine-blue.svg?style=flat&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED.svg?style=flat&logo=docker)](https://www.docker.com/)
[![Tests](https://img.shields.io/badge/Tests-18%2F18%20Passed-brightgreen.svg?style=flat)](#automated-testing)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/LICENSE)

An enterprise-grade, production-hardened inventory and stock movement orchestration system developed with **Java 21**, **Spring Boot**, **Hibernate / Spring Data JPA**, and **PostgreSQL**.

Built with an N-Tier Layered Architecture, real-world concurrency control via optimistic locking (`@Version`), automatic JPA auditing, idempotent business logic validation, and multi-container Docker deployment.

---

## 👤 Author Information

- **Student Name**: Iradukunda Fils
- **Student ID**: `29853`
- **Class / Group**: INN-3 / Group B
- **Institution**: Adventist University of Central Africa (AUCA)
- **Course**: Web Technology / Enterprise Java Application Development
- **Assignment**: Assignment-4 (Requirements 2, 3 & 4)
- **GitHub Repository**: [https://github.com/Iradukunda-Fils/StockManagementSystem](https://github.com/Iradukunda-Fils/StockManagementSystem)
- **Submission Archive**: `29853_iradukunda_fils_assigment_3.zip`

---

## 🏛️ Architectural Blueprint

The application adheres strictly to the **Separation of Concerns (SoC)** principle using an **N-Tier Layered Architecture**:

```
+-------------------------------------------------------------------------------+
|                       Presentation Layer (REST Controllers)                   |
|   - ProductController, WarehouseController, StockMovementController           |
|   - Strict HTTP Status Handlers (200 OK, 201 Created, 204 No Content, etc.)   |
|   - Declarative Bean Validation (@Valid, @NotBlank, @Positive, etc.)          |
+-------------------------------------------------------------------------------+
                                        │  DTOs (Immutable Java 21 Records)
                                        ▼
+-------------------------------------------------------------------------------+
|               Global Exception Interceptor (@RestControllerAdvice)            |
|   - Centralized RFC 7807-style uniform ErrorResponse JSON                     |
|   - Translates OptimisticLockingFailureException -> HTTP 409 Conflict         |
|   - Translates EntityNotFoundException -> HTTP 404 Not Found                  |
|   - Translates Validation / Business Exceptions -> HTTP 400 Bad Request       |
+-------------------------------------------------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                        Business Logic Layer (Services)                        |
|   - ProductService, WarehouseService, StockMovementService                    |
|   - Enforces ACID Transaction Boundaries (@Transactional)                     |
|   - Domain Logic: Deficit protection, warehouse capacity, deletion guards     |
+-------------------------------------------------------------------------------+
                                        │  Entities
                                        ▼
+-------------------------------------------------------------------------------+
|                       Data Access Layer (JPA Repositories)                    |
|   - ProductRepository, WarehouseRepository, StockMovementRepository           |
|   - Audited BaseEntity with @Version, @CreatedBy, @LastModifiedBy             |
|   - Dual Database Support: PostgreSQL (Prod/Docker) & H2 (In-Memory Testing)  |
+-------------------------------------------------------------------------------+
```

---

## 🚀 Key Features & Enterprise Hardening

### 1. Multi-Warehouse & Inventory Management
- **Hierarchical Domain**: Warehouses hold multiple Products; each Product has tracked inventory across movements.
- **Dynamic Threshold Alerts**: Automatic computation of `isLowStock` boolean flag whenever `quantityInStock <= lowStockThreshold`.
- **Zero-Stock Deletion Safety Guard**: Prevents deletion of any product with existing stock balance (`quantity > 0`) to safeguard physical inventory.
- **Warehouse Deletion Safety Guard**: Prevents deletion of warehouses containing active product catalogs.

### 2. Transactional Stock Movement Engine
- **Atomic Operations**: `STOCK_IN`, `STOCK_OUT`, and `TRANSFER` operations execute inside transactional boundaries (`@Transactional`).
- **Deficit Protection**: Blocks `STOCK_OUT` if the requested quantity exceeds the current stock balance.
- **Capacity Enforcement**: Blocks `STOCK_IN` if incoming quantity breaches maximum warehouse storage capacity.
- **Audit Logging**: Every inventory transaction creates an immutable `StockMovement` audit record.

### 3. Production Hardening Enhancements
- **Optimistic Locking (`@Version`)**: Entity versioning on `BaseEntity` eliminates concurrent lost updates.
- **JPA User Auditing (`@CreatedBy`, `@LastModifiedBy`)**: Connects Spring Data JPA auditing with an `AuditorAware` bean capturing client identities via `X-User-Id` request headers (defaulting to `SYSTEM`).
- **Concurrency Conflict Handling**: Global exception interception translates `OptimisticLockingFailureException` into HTTP **409 Conflict**.
- **Safe Pagination**: Zero-indexed, page-size-capped endpoint (`/api/v1/products/paged`) prevents heap exhaustion from large datasets.
- **Multi-Threaded Real-World Simulation Test**: Automated integration test simulating 10 concurrent threads mutating stock simultaneously to guarantee thread safety.

---

## 🛠️ Technology Stack

| Layer / Aspect | Technology | Details |
| :--- | :--- | :--- |
| **Language** | Java 21 (LTS) | Virtual threads support, Records, Pattern Matching |
| **Framework** | Spring Boot 3.4 / 4.x | Web MVC, Data JPA, Validation |
| **Persistence** | Hibernate / JPA | ORM, Optimistic Locking (`@Version`), Auditing |
| **Database** | PostgreSQL 16 (Production) / H2 (Testing) | ACID compliance, Foreign Keys, Unique Indexes |
| **Containerization** | Docker & Docker Compose | Multi-stage build, Temurin 21 JRE, Non-root user |
| **API Testing** | Postman | Automated collection with pre/post-request scripts |
| **Code Quality** | Lombok | Boilerplate elimination (Getters, Setters, Builders) |

---

## 🐳 Quick Start with Docker (Recommended)

The entire application stack (PostgreSQL + Spring Boot) is containerized and orchestrates with a single command.

### Prerequisites
- [Docker Engine](https://docs.docker.com/engine/install/) (v24+)
- [Docker Compose](https://docs.docker.com/compose/) (v2+)

### 1. Clone the Repository
```bash
git clone https://github.com/Iradukunda-Fils/StockManagementSystem.git
cd StockManagementSystem
```

### 2. Start Services
```bash
docker compose up -d --build
```

### 3. Verify Container Health
```bash
docker compose ps
```
*Expected Output:*
```
NAME              IMAGE                          STATUS                   PORTS
stock_mgmt_db     postgres:16-alpine             Up (healthy)             0.0.0.0:5432->5432/tcp
stock_mgmt_app    stockmanagementsystem-stock-app Up (healthy)             0.0.0.0:8080->8080/tcp
```

### 4. View Application Logs
```bash
docker compose logs -f stock-app
```

### 5. Stop the Containers
```bash
# Stop containers (preserves database data)
docker compose down

# Stop and remove database volume (fresh start)
docker compose down -v
```

---

## 💻 Local Development Setup (Without Docker)

### Prerequisites
- JDK 21 (Eclipse Temurin or OpenJDK)
- PostgreSQL 16 running on `localhost:5432` with database `inn_3_grp_b`

### Run Application
```bash
# Linux / macOS
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```
The application will start on `http://localhost:8080`.

---

## 🧪 Automated Testing

The project includes unit tests, integration tests, business logic tests, and concurrency stress tests. All tests run against an isolated in-memory H2 database.

```bash
# Run all automated tests
./mvnw clean test
```

### Test Coverage Highlights:
- `WarehouseServiceTest`: Warehouse capacity validations, unique code constraints, cascade checks.
- `ProductServiceTest`: Product CRUD, low-stock threshold logic, zero-stock deletion safeguards.
- `StockMovementServiceTest`: Atomic `STOCK_IN` / `STOCK_OUT`, deficit rejection, capacity limits.
- `StockConcurrencySimulationTest`: 10 concurrent threads performing simultaneous stock mutations to verify optimistic locking and thread safety.

**Result: 18 / 18 Tests Passing (`BUILD SUCCESS`)**.

---

## 📡 REST API Reference

All endpoints are versioned under `/api/v1`.

### 1. Warehouses (`/api/v1/warehouses`)
| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/warehouses` | Create a new warehouse | `201 Created` |
| `GET` | `/api/v1/warehouses` | Retrieve all warehouses | `200 OK` |
| `GET` | `/api/v1/warehouses/{id}` | Retrieve warehouse by UUID | `200 OK` |
| `PUT` | `/api/v1/warehouses/{id}` | Update existing warehouse | `200 OK` |
| `DELETE`| `/api/v1/warehouses/{id}` | Delete warehouse (guarded) | `204 No Content` |

### 2. Products (`/api/v1/products`)
| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/products` | Create product linked to warehouse | `201 Created` |
| `GET` | `/api/v1/products` | List all products with threshold status | `200 OK` |
| `GET` | `/api/v1/products/paged`| Safe paginated product retrieval | `200 OK` |
| `GET` | `/api/v1/products/{id}` | Retrieve product by UUID | `200 OK` |
| `PUT` | `/api/v1/products/{id}` | Update product details/thresholds | `200 OK` |
| `DELETE`| `/api/v1/products/{id}` | Delete product (stock must be 0) | `204 No Content` |

### 3. Stock Movements (`/api/v1/stock-movements`)
| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/stock-movements` | Record stock mutation (`STOCK_IN` / `STOCK_OUT`) | `201 Created` |
| `GET` | `/api/v1/stock-movements` | Retrieve all stock movement audit records | `200 OK` |
| `GET` | `/api/v1/stock-movements/{id}` | Retrieve stock movement by UUID | `200 OK` |
| `GET` | `/api/v1/stock-movements/product/{id}`| Audit trail for a specific product | `200 OK` |

---

## 📮 Postman Collection Testing

A fully automated Postman collection is included in the root directory:
- **Collection File**: [`StockManagementSystem.postman_collection.json`](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/StockManagementSystem.postman_collection.json)

### Features:
- Organized into 3 entity folders (`Warehouses`, `Products`, `Stock Movements`).
- Automated pre-request and test assertion scripts (`pm.test`).
- Auto-extracts and sets collection variables (`warehouseId`, `productId`, `movementId`) so tests chain together seamlessly without manual copying.

---

## 🎨 UI/UX & Figma Specification

For frontend developers and UI/UX designers building client interfaces (web, mobile, or Figma):
- See the comprehensive specification guide: [`UI_UX_DESIGN_SPECIFICATION.md`](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/UI_UX_DESIGN_SPECIFICATION.md).
- Includes:
  - 6 full screen specifications (Dashboard, Warehouses, Products, Movement Modal, Audit Trail, Low Stock Center).
  - Design Tokens (8pt Grid, Color Palette, Typography scale).
  - Component States (Default, Loading Skeleton, Empty, Error, Toast).
  - Figma Frame Setup & Autolayout guidelines.

---

## 📖 Complete Technical Documentation

For in-depth architectural analysis, database schemas, code snippets, exception responses, and video presentation guides:
- Read the full documentation: [`DOCUMENTATION.md`](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/DOCUMENTATION.md).

---

## 📄 License

This project is open-source and licensed under the [MIT License](file:///home/iradukunda/Lost/Learn/Auca-Innovation/JAVA/WebTeck/StockManagementSystem/LICENSE).
