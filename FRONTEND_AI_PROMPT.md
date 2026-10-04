# 🤖 Master AI Prompt: Enterprise Stock Management System Frontend (UI/UX)

> **Instructions for Developers**:  
> Copy and paste the entire prompt below into **Claude 3.5 / 3.7**, **ChatGPT (GPT-4o)**, **v0 by Vercel**, **Bolt.new**, **Cursor**, or **Lovable** to generate a complete, production-grade frontend tailored to the Stock Management System backend.

---

```markdown
# Role & Objective
You are a Staff Principal Frontend Architect and Senior UI/UX Designer.
Your task is to build a complete, production-ready, beautiful, responsive Single Page Application (SPA) or Web Application for an enterprise **Stock Management System** that connects to our Spring Boot 3.4+ / Java 21 REST backend.

The design must feel as polished and functional as modern enterprise SaaS platforms (such as Stripe Dashboard, Linear, Vercel, or Shopify Inventory).

---

## 1. Technical Stack & Architecture
- **Framework**: React 18/19 (TypeScript) using Vite or Next.js (App Router)
- **Styling**: Tailwind CSS with CSS Variables for theme tokens
- **Component Primitives**: Radix UI / Shadcn UI pattern (clean, accessible, headless)
- **Icons**: Lucide React (`lucide-react`)
- **State & Server Cache**: TanStack Query (React Query v5) for query caching, loading skeletons, and optimistic updates
- **Form Management**: React Hook Form with Zod validation schema
- **Tables & Filtering**: TanStack Table (React Table v8) for sorting, safe pagination, and column filtering
- **Feedback & Notifications**: Sonner or React Hot Toast for toast notifications
- **Data Visualization**: Recharts for inventory trends and warehouse capacity donut/gauge charts

---

## 2. Backend API Contract & Specifications
The backend is running locally at `http://localhost:8080/api/v1` (with Docker Compose support).

### Global Headers & Auditing
- **Auditing Header**: Every mutating request (`POST`, `PUT`, `DELETE`) should include the header:
  `X-User-Id: <current-user-email-or-id>` (default to `"operator@auca.ac.rw"`).

### Standard Response Envelopes
1. **Success Envelope (`ApiResponse<T>`)**:
   ```json
   {
     "success": true,
     "message": "Operation completed successfully",
     "data": { ... } // or array [ ... ]
   }
   ```
2. **Error Envelope (`ErrorResponse`)**:
   ```json
   {
     "timestamp": "2026-10-04T00:50:50.123",
     "status": 400, // 404, 409, 500
     "error": "Bad Request",
     "message": "Human-readable failure explanation",
     "path": "/api/v1/stock-movements",
     "validationErrors": {
       "quantity": "Quantity must be greater than zero",
       "warehouseCode": "Warehouse code is mandatory"
     }
   }
   ```

### Critical Endpoints
1. **Warehouses (`/api/v1/warehouses`)**:
   - `GET /api/v1/warehouses`: List all warehouses
   - `POST /api/v1/warehouses`: Create warehouse `{ warehouseCode, warehouseName, location, capacity, contactEmail, active }`
   - `GET /api/v1/warehouses/{id}`: Single warehouse details
   - `PUT /api/v1/warehouses/{id}`: Update warehouse `{ warehouseCode, warehouseName, location, capacity, contactEmail, active }`
   - `DELETE /api/v1/warehouses/{id}`: Delete warehouse (fails with 400 if products exist)

2. **Products (`/api/v1/products`)**:
   - `GET /api/v1/products`: List all products (includes computed `isLowStock: boolean`)
   - `GET /api/v1/products/paged?page=0&size=10&sort=productName,asc`: Safe paginated endpoint returning `{ content: Product[], totalPages, totalElements, size, number }`
   - `POST /api/v1/products`: Create product `{ sku, productName, description, price, quantityInStock, reorderLevel, warehouseId }`
   - `GET /api/v1/products/{id}`: Get product by UUID
   - `PUT /api/v1/products/{id}`: Update product details
   - `DELETE /api/v1/products/{id}`: Delete product (fails with 400 if `quantityInStock > 0`)

3. **Stock Movements (`/api/v1/stock-movements`)**:
   - `POST /api/v1/stock-movements`: Record movement:
     ```json
     {
       "productId": "uuid",
       "movementType": "STOCK_IN" | "STOCK_OUT" | "ADJUSTMENT",
       "quantity": 25,
       "referenceCode": "PO-2026-001",
       "notes": "Weekly inventory restock"
     }
     ```
   - `GET /api/v1/stock-movements`: List all movement audit trail records
   - `GET /api/v1/stock-movements/product/{productId}`: Movement history for specific product

---

## 3. Strict Business Logic Enforcements in the UI

1. **Deficit Protection (Cannot dispatch more stock than available)**:
   - When user selects `STOCK_OUT`, the quantity input MUST validate `quantity <= currentStock`.
   - If user enters a quantity greater than current stock, show an inline red warning: *"Requested quantity (X) exceeds available stock (Y). This transaction will be rejected by the server."*
   - Disable the submit button until valid.

2. **Warehouse Capacity Protection**:
   - For `STOCK_IN`, display the destination warehouse's current occupancy and remaining capacity.
   - Show a visual progress bar (`currentStock / capacity * 100`).
   - If incoming quantity exceeds remaining capacity, warn the user before submission.

3. **Optimistic Locking Conflict Handling (HTTP 409)**:
   - When the backend throws `409 Conflict` (Optimistic Locking collision), show a distinctive Modal or Toast:
     *"Concurrency Conflict: Another user just updated this record. We have refreshed the data to the latest version. Please review and try again."*
   - Automatically trigger a React Query cache refetch.

4. **Guarded Product Deletion**:
   - In the Product table, if `product.quantityInStock > 0`, the Delete button MUST be disabled with a tooltip: *"Products with active inventory balance (> 0 units) cannot be deleted. Deplete or adjust stock to 0 first."*

5. **Live Low Stock Indicators**:
   - If `quantityInStock <= reorderLevel`, badge must display red: `LOW STOCK [! Alert]`.
   - If `quantityInStock > reorderLevel`, badge displays green: `IN STOCK`.
   - If `quantityInStock === 0`, badge displays dark gray: `OUT OF STOCK`.

---

## 4. Required Screens & Key User Flows

### Screen 1: Executive Overview Dashboard
- **Top Stats Grid**:
  - Total Warehouses count
  - Total Products Cataloged
  - Total Physical Inventory Count (sum of all `quantityInStock`)
  - Active Low Stock Alerts count (clickable, filters products)
- **Warehouse Capacity Utilization Widget**: Horizontal progress bars or circular gauges per warehouse showing % used.
- **Recent Stock Movements Ledger**: Live feed of the last 10 movements with badges (`STOCK_IN` green, `STOCK_OUT` amber, `ADJUSTMENT` blue).
- **Quick Action Buttons**: "⚡ Record Stock Movement", "➕ New Product", "➕ New Warehouse".

### Screen 2: Warehouse Facilities Directory
- Table with columns: Code, Name, Location, Capacity Gauge, Contact Email, Active Status, Actions (Edit, Delete, View Products).
- "Add Warehouse" Dialog with validation for `warehouseCode` (uppercase alphanumeric, e.g., `WH-KGL-001`).
- Slide-over Drawer showing all products stored in the selected warehouse.

### Screen 3: Product Inventory Catalog
- Paginated table supporting page sizes (10, 25, 50).
- Global Search bar (filters SKU and Product Name) + Warehouse dropdown filter + "Show Low Stock Only" switch.
- Columns: SKU, Name, Warehouse, Unit Price, Stock Level (bold), Reorder Level, Status Badge, Actions (Move Stock, Edit, Delete).
- "Add Product" Dialog with dropdown dynamically populated from active warehouses.

### Screen 4: Transactional Movement Modal (The Core Action Modal)
- Clean 3-step or unified wizard:
  1. Select Product (searchable combobox displaying current stock & warehouse).
  2. Select Type (`STOCK_IN` / `STOCK_OUT` / `ADJUSTMENT`) with visual icons.
  3. Enter Quantity, Reference Code (auto-generate button, e.g. `REF-202610-XXX`), and Notes.
- **Live Stock Simulation Preview**:
  - Displays: `Current Stock (50)` &rarr; `Delta (-10)` &rarr; `New Stock (40)`.
- Submit button with loading spinner and error toast handling.

### Screen 5: Movement Audit Trail (Ledger)
- Comprehensive audit table with Date/Time formatting, Reference Code, Product SKU, Type, Quantity, Previous &rarr; Resulting Stock, Notes, and Actor (`CreatedBy`).
- Export to CSV functionality.

### Screen 6: Low Stock Command Center
- Dedicated filter view displaying only critical products needing replenishment.
- Single-click "Quick Restock" button that pre-fills the `STOCK_IN` modal.

---

## 5. UI/UX Polish & Design Tokens
- **Theme**: Clean Slate & Navy Enterprise Theme:
  - Primary: `#1E3A8A` (Deep Royal Navy)
  - Primary Hover: `#1D4ED8`
  - Accent / Focus: `#3B82F6`
  - Success: `#16A34A`
  - Warning: `#D97706`
  - Danger / Error: `#DC2626`
  - Background: `#F8FAFC`
  - Surface Card: `#FFFFFF`
  - Border: `#E2E8F0`
- **Typography**: Inter or System Font Stack (`font-sans`), tabular numbers (`tabular-nums`) for currency and stock counts.
- **Micro-Interactions**: Smooth modal animations, subtle table row hover states, skeleton loaders while queries are fetching, instant optimistic updates.
- **Empty States**: Friendly illustration or icon when tables are empty with a direct "Add your first..." call to action.

---

## 6. Output Deliverable Request
Please provide:
1. Complete project structure.
2. Complete API client implementation (using Axios or Fetch with type-safe interfaces matching the backend DTOs).
3. The React Query hooks for Warehouses, Products, and Stock Movements.
4. The complete, fully working page components and modal implementations.
```
