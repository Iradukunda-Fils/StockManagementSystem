# Stock Management System — UI/UX Design & Frontend Specification Guide

**Author**: Enterprise Solutions Architect & Senior UX Engineer  
**Target Audience**: Figma UI/UX Designers, Frontend Developers (React / Next.js / Vue / Angular / Thymeleaf)  
**Related Backend**: Spring Boot 4.x RESTful APIs (Java 21)  
**Assignment Requirement**: Assignment-4 (Requirement 1: UI/UX Design Composition & Implementation)  
**Design Standards**: Modern Enterprise ERP, Web Content Accessibility Guidelines (WCAG 2.1 AA), Mobile & Desktop Responsive  

---

## 1. Information Architecture & Navigation Hierarchy

The application follows an **Enterprise Workspace Layout** (Fixed Collapsible Sidebar + Dynamic Header + Responsive Canvas).

```
+----------------------------------------------------------------------------------------------------+
|  [Sidebar Navigation]     |  [Top Header: Global Search, Active Warehouse Selector, User Profile]  |
|                           +------------------------------------------------------------------------+
|  📊 Dashboard             |  [Main Dynamic Content Canvas]                                         |
|  🏭 Warehouses            |                                                                        |
|  📦 Product Catalog       |  - Metric KPI Cards                                                    |
|  🔄 Stock Movements       |  - Interactive Visual Charts & Data Tables                             |
|  ⚠️ Low Stock Alerts      |  - Contextual Drawers & Action Modals                                  |
|  📜 Audit Logs            |                                                                        |
+----------------------------------------------------------------------------------------------------+
```

### Sitemap & Screen Map:
1. `/dashboard` — High-level KPI metrics, capacity gauges, stock movement feed.
2. `/warehouses` — Warehouse grid/table, capacity utilization bars, "Add/Edit Warehouse" drawer.
3. `/products` — Paginated data table (`/api/v1/products/paged`), low-stock indicators, "Register Product" drawer.
4. `/movements` — Transactional ledger (`STOCK_IN`, `STOCK_OUT`, `ADJUSTMENT`), audit history timeline.

---

## 2. Design System & Tokens (For Figma Setup)

Figma designers should define these global styles in their **Local Variables / Tokens** library:

### 2.1 Color Palette

| Token Name | Hex Code | Purpose / Semantic Usage |
| :--- | :--- | :--- |
| `primary-600` (Brand Primary) | `#1E40AF` (Deep Indigo) | Primary action buttons, active navigation, brand accents |
| `primary-50` (Primary Surface) | `#EFF6FF` | Selected table rows, active menu background |
| `success-600` (Stock IN / Healthy) | `#16A34A` (Emerald) | `STOCK_IN` badges, healthy stock levels, success toasts |
| `warning-600` (Low Stock Alert) | `#D97706` (Amber) | Low stock badges (`quantityInStock <= reorderLevel`) |
| `danger-600` (Stock OUT / Deficit) | `#DC2626` (Crimson) | `STOCK_OUT` badges, error toasts, capacity overflow alerts |
| `info-600` (Audit Adjustment) | `#2563EB` (Cobalt) | `ADJUSTMENT` movement badges, audit trail tags |
| `neutral-900` (Text High-Contrast) | `#0F172A` (Slate 900) | Primary typography, headers |
| `neutral-600` (Text Muted) | `#475569` (Slate 600) | Labels, descriptions, timestamps |
| `neutral-100` (Border / Dividers) | `#E2E8F0` (Slate 200) | Card borders, table gridlines, modal dividers |
| `surface-canvas` | `#F8FAFC` (Slate 50) | Main canvas background |
| `surface-card` | `#FFFFFF` | Card surfaces, modal dialogues, input backgrounds |

### 2.2 Typography Scale (Inter / Roboto)

- **Display Header**: `28px` / Line Height: `36px` / SemiBold (`font-weight: 600`)
- **Page Title (H1)**: `22px` / Line Height: `28px` / SemiBold (`font-weight: 600`)
- **Section Title (H2)**: `18px` / Line Height: `24px` / Medium (`font-weight: 500`)
- **Card Title / Table Header**: `14px` / Line Height: `20px` / Medium (`font-weight: 500`)
- **Body Regular**: `14px` / Line Height: `20px` / Regular (`font-weight: 400`)
- **Caption / Metadata**: `12px` / Line Height: `16px` / Regular (`font-weight: 400`)
- **Code / SKU / UUID**: `13px` / Monospace (`JetBrains Mono` / `Courier New`)

### 2.3 Elevation & Shadows
- **Card Elevation**: `box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);`
- **Dropdown / Flyout**: `box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);`
- **Modal Dialogue**: `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);`

---

## 3. Screen-by-Screen Figma Specifications & API Mapping

### Screen 1: Executive Inventory Dashboard

#### UX Intent:
Give the inventory manager an instant 5-second overview of operational health across all storage facilities.

#### UI Components:
1. **Top Metric KPI Cards** (4-column grid):
   - **Total Active Warehouses**: Count of warehouses where `active = true`.
   - **Total SKUs Cataloged**: Total count of distinct products.
   - **Total Inventory Units**: Sum of all `quantityInStock`.
   - **Critical Low-Stock Count**: Count of products flagged with `lowStockAlert: true`. Highlighted with Amber warning badge.
2. **Warehouse Capacity Gauge Cards**:
   - Visual progress bar for each warehouse: `progress = (currentStockCount / capacity) * 100`.
   - Visual color coding:
     - `< 70%`: Emerald Green (Healthy)
     - `70% - 90%`: Amber (Near Capacity)
     - `> 90%`: Crimson Red (Critical Capacity)
3. **Recent Activity Feed**:
   - Last 5 stock movements with movement type pill, timestamp, and user ID (`createdBy`).

#### Backend API Endpoints Used:
- `GET /api/v1/warehouses` (fetches all facilities, capacity, `currentStockCount`, `remainingCapacity`).
- `GET /api/v1/products/low-stock` (fetches all products triggering reorder alert).
- `GET /api/v1/stock-movements` (fetches latest movements for the feed).

---

### Screen 2: Warehouses Management (`/warehouses`)

#### UX Intent:
Allow managers to configure facilities, inspect capacity utilization, and manage location details.

#### UI Wireframe Structure:
```
+----------------------------------------------------------------------------------------------------+
|  Warehouses  [Search by code/name...]               [+ Add Warehouse Button]                       |
+----------------------------------------------------------------------------------------------------+
|  [WH-KGL-01] Kigali Central Distribution Hub                Status: [● Active]                     |
|  Location: Kigali Special Economic Zone, Masoro             Capacity: 840 / 1,000 Units (84%)      |
|  Manager: kigali.hub@inventory.rw                           [██████████████████░░]                 |
|  Assigned Products: 42 SKUs                                 [View Details] [Edit] [Delete]         |
+----------------------------------------------------------------------------------------------------+
|  [WH-MUS-02] Musanze Northern Facility                      Status: [● Active]                     |
|  Location: Musanze Industrial Park                          Capacity: 120 / 500 Units (24%)        |
|  Manager: musanze@inventory.rw                              [█████░░░░░░░░░░░░░░░]                 |
|  Assigned Products: 12 SKUs                                 [View Details] [Edit] [Delete]         |
+----------------------------------------------------------------------------------------------------+
```

#### Modal / Drawer: "Add Warehouse" Form
- **Input Fields**:
  - `warehouseCode` (Text input, uppercase auto-format, min 3 chars, e.g., `WH-KGL-01`).
  - `warehouseName` (Text input, max 100 chars).
  - `location` (Text input, max 150 chars).
  - `capacity` (Numeric input, min `1`).
  - `contactEmail` (Email input format).
  - `active` (Toggle switch, default `true`).
- **Form Submission**:
  - `POST /api/v1/warehouses`
  - Body: `WarehouseRequest` JSON.
  - On `409 Conflict`: Display inline error under `warehouseCode`: *"Warehouse code already exists."*
  - On `201 Created`: Trigger success toast *"Warehouse created successfully"* and close drawer.

#### Delete Action Rule:
- When user clicks **Delete**:
  - Show confirmation modal: *"Are you sure you want to delete this warehouse?"*
  - If backend returns `400 Bad Request` with message *"Cannot delete warehouse because it currently has assigned products"*, display an error alert banner explaining products must be transferred first.

---

### Screen 3: Product Catalog & Inventory (`/products`)

#### UX Intent:
The primary operational screen where clerks search, filter, and inspect product details and stock balances.

#### UI Table Features:
- **Search Bar**: Debounced input filtering by SKU or Product Name.
- **Warehouse Filter**: Dropdown menu populated from `GET /api/v1/warehouses`.
- **Low Stock Filter Switch**: Toggle to instantly show only `lowStockAlert == true` items.
- **Data Table Columns**:
  1. `SKU`: Monospace badge (e.g., `PRD-LAP-001`).
  2. `Product Name & Description`: Two-line cell with title and muted description preview.
  3. `Warehouse`: Facility code and location tag.
  4. `Unit Price`: Currency formatted (e.g., `$1,850.00`).
  5. `Stock Level`:
     - Quantity number.
     - Low-stock badge if `quantityInStock <= reorderLevel` (`⚠️ 5 units (Min: 15)`).
  6. `Actions`: Dropdown with options:
     - `Record Movement` (Quick Stock In / Stock Out)
     - `Edit Product`
     - `Movement History`
     - `Delete Product`
- **Pagination Bar**:
  - Showing *"Showing 1 to 20 of 142 items"*.
  - Page size dropdown (`10`, `20`, `50`).
  - Previous / Next buttons calling `GET /api/v1/products/paged?page={page}&size={size}&sort=productName,asc`.

#### Drawer: "Register Product" Form
- **Form Inputs**:
  - `sku` (Text, auto-uppercase).
  - `productName` (Text, required).
  - `warehouseId` (Select dropdown populated with active warehouses).
  - `price` (Decimal currency input > 0).
  - `quantityInStock` (Numeric >= 0).
  - `reorderLevel` (Numeric >= 0, default 10).
  - `description` (Textarea, max 500 chars).
- **Client-Side Live Calculation**:
  - As the user types `quantityInStock`, show the selected warehouse remaining capacity.
  - If `quantityInStock > selectedWarehouse.remainingCapacity`, show immediate warning: *"Warning: This quantity exceeds available warehouse capacity!"*

---

### Screen 4: Stock Movement & Transaction Center (`/movements`)

#### UX Intent:
Transactional control center. Clerks record stock intake (receiving shipments), stock dispatches (sales fulfillment), and auditors record physical recount adjustments.

#### Quick Action Modals (Tabbed or 3 Distinct Modals):

#### Modal A: "Receive Stock (STOCK_IN)"
- **Fields**:
  - Product Selector (Searchable autocomplete dropdown).
  - Target Warehouse: Auto-populated from product's assigned facility.
  - Current Available Space: Displays `warehouse.remainingCapacity`.
  - Quantity to Receive: Numeric input (`> 0`).
  - Remarks / Notes: Text input (optional, e.g., *"Vendor PO #10823"*).
- **Backend API**: `POST /api/v1/stock-movements` with `movementType: "STOCK_IN"`.
- **Validation**: If `quantity > remainingCapacity`, backend returns `400 Bad Request` with `WarehouseCapacityExceededException`. UI displays error banner: *"Warehouse capacity exceeded."*

#### Modal B: "Dispatch Stock (STOCK_OUT)"
- **Fields**:
  - Product Selector (Searchable dropdown).
  - Available Stock Badge: Displays `product.quantityInStock` in bold green.
  - Quantity to Dispatch: Numeric input (`> 0`).
  - Delivery Reference / Notes: Text input (e.g., *"Sales Dispatch Order #SO-4819"*).
- **Backend API**: `POST /api/v1/stock-movements` with `movementType: "STOCK_OUT"`.
- **Validation**:
  - Frontend validation: Prevent submitting if `quantity > quantityInStock`.
  - Backend validation: If insufficient stock, backend returns `400 Bad Request` with `InsufficientStockException`.

#### Modal C: "Audit Adjustment (ADJUSTMENT)"
- **Purpose**: Physical inventory recounts, damage write-offs, or reconciliation audits.
- **Fields**:
  - Product Selector.
  - Current System Count: e.g., `45 units`.
  - Verified Physical Count: e.g., `42 units`.
  - Audit Notes / Reason: **Mandatory Textarea** (e.g., *"Quarterly audit: 3 units damaged in transit"*).
- **Backend API**: `POST /api/v1/stock-movements` with `movementType: "ADJUSTMENT"`.
- **Validation**: If `notes` is blank, submit button is disabled. Backend strictly rejects blank notes.

#### Movement Audit Ledger Table:
- Displays complete chronological audit trail (`GET /api/v1/stock-movements`):
  - `Reference Code`: e.g., `MOV-20260919215637-902`.
  - `Type`: Green badge for `STOCK_IN`, Red badge for `STOCK_OUT`, Blue badge for `ADJUSTMENT`.
  - `Delta`: `+25` (Green) or `-15` (Red).
  - `Pre/Post Balance`: Visual pill showing `30 ➔ 55`.
  - `Date & Time`: Formatted timestamp (e.g., `19 Sep 2026, 21:56`).
  - `Actor (Auditing)`: Shows `createdBy` (e.g., `clerk.masoro@inventory.rw` or `SYSTEM`).
  - `Notes / Justification`: Expandable remarks text.
  - `Action`: **Reverse** button (calls `DELETE /api/v1/stock-movements/{id}`).

---

## 4. Frontend-to-Backend State Mapping & Error Handling

### 4.1 Global API Response Structure
Frontend developers should create standard TypeScript interfaces for API consumption:

```typescript
// Generic API Wrapper
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

// RFC-Compliant Error Response
export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  validationErrors?: Record<string, string>; // Maps field name to error message
}
```

### 4.2 Handling Form Validation Errors (HTTP 400)
When the backend returns `400 Bad Request` due to Bean Validation failure:
```json
{
  "status": 400,
  "error": "Validation Failed",
  "validationErrors": {
    "price": "Price must be strictly positive",
    "sku": "Product SKU is mandatory"
  }
}
```
- **UI Designer Requirement in Figma**: Every form input component MUST have an **Error State** variant with:
  - Red border (`#DC2626`).
  - Red helper text directly below the input displaying the backend's `validationErrors[fieldName]`.

### 4.3 Handling Concurrency Conflicts (HTTP 409 Conflict)
When two clerks modify the same record concurrently:
```json
{
  "status": 409,
  "error": "Concurrency Conflict",
  "message": "This record was concurrently modified by another user. Please reload and retry."
}
```
- **UI Designer Requirement in Figma**: Design a **Conflict Dialogue Modal**:
  - Icon: Warning triangle.
  - Title: *"Record Concurrently Modified"*
  - Body: *"Another warehouse clerk has updated this product's stock while you were viewing it."*
  - Action Button: *"Reload Latest Data"* (refreshes query cache).

---

## 5. Figma File Architecture & Component Organization

When organizing the Figma design project for **Assignment-4 (Requirement 1)**, structure your Figma pages as follows:

```
📁 Stock Management System (Figma Project)
│
├── 📄 1. Cover & Overview (Project info, Student ID, Assignment title)
├── 📄 2. Design System & Style Guide (Colors, Typography, Spacing, Shadows)
├── 📄 3. UI Components & Variants (Buttons, Inputs, Badges, Table Rows, Cards)
├── 📄 4. Screen 1: Dashboard (Desktop 1440px & Tablet 768px)
├── 📄 5. Screen 2: Warehouses (List view, Add Warehouse Modal, Detail Card)
├── 📄 6. Screen 3: Product Catalog (Data Table, Register Product Drawer, Filter States)
├── 📄 7. Screen 4: Stock Movements & Audit (Transaction Modals, Ledger Timeline)
└── 📄 8. Interactive Prototype Flows (Clickable prototype connections)
```

### Auto-Layout & Component Variants Checklist:
- [x] All buttons have `Default`, `Hover`, `Pressed`, and `Disabled` variants.
- [x] Form inputs have `Default`, `Focused`, `Filled`, and `Error` states.
- [x] Data tables use Figma Auto-Layout for rows with alternating row background stripes.
- [x] Badges are configured with boolean variants for `STOCK_IN` (Green), `STOCK_OUT` (Red), `ADJUSTMENT` (Blue), and `LOW_STOCK` (Amber).
