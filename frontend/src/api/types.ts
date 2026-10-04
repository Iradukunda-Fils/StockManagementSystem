export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp?: string;
}

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  validationErrors?: Record<string, string>;
}

export interface WarehouseResponse {
  id: string;
  warehouseCode: string;
  warehouseName: string;
  location: string;
  capacity: number;
  contactEmail?: string | null;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
}

export interface WarehouseRequest {
  warehouseCode: string;
  warehouseName: string;
  location: string;
  capacity: number;
  contactEmail?: string | null;
  active?: boolean;
}

export interface ProductResponse {
  id: string;
  sku: string;
  productName: string;
  description?: string | null;
  price: number;
  quantityInStock: number;
  reorderLevel: number;
  warehouseId: string;
  warehouseName?: string;
  warehouseCode?: string;
  isLowStock: boolean;
  createdAt?: string;
  updatedAt?: string;
  version?: number;
}

export interface ProductRequest {
  sku: string;
  productName: string;
  description?: string | null;
  price: number;
  quantityInStock: number;
  reorderLevel: number;
  warehouseId: string;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}

export type MovementType = 'STOCK_IN' | 'STOCK_OUT' | 'ADJUSTMENT';

export interface StockMovementResponse {
  id: string;
  productId: string;
  productName?: string;
  productSku?: string;
  warehouseId: string;
  warehouseName?: string;
  movementType: MovementType;
  quantity: number;
  previousStock: number;
  resultingStock: number;
  referenceCode: string;
  notes?: string | null;
  movementDate: string;
  createdBy?: string;
  version?: number;
}

export interface StockMovementRequest {
  productId: string;
  movementType: MovementType;
  quantity: number;
  referenceCode: string;
  notes?: string;
}
