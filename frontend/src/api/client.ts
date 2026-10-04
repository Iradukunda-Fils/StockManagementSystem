import type {
  ApiResponse,
  WarehouseResponse,
  WarehouseRequest,
  ProductResponse,
  ProductRequest,
  StockMovementResponse,
  StockMovementRequest,
  PagedResponse
} from './types';

const API_BASE = '/api/v1';
const DEFAULT_USER_ID = 'iradukunda@auca.ac.rw';

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = {
    'Content-Type': 'application/json',
    'X-User-Id': DEFAULT_USER_ID,
    ...(options.headers || {})
  };

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    let errorJson;
    try {
      errorJson = await response.json();
    } catch {
      errorJson = { message: `Request failed with status ${response.status}` };
    }
    const error = new Error(errorJson.message || `HTTP ${response.status}`);
    (error as any).status = response.status;
    (error as any).details = errorJson;
    throw error;
  }

  if (response.status === 204) {
    return {} as T;
  }

  const json: ApiResponse<T> = await response.json();
  return json.data;
}

export const api = {
  // Warehouses
  getWarehouses: () => request<WarehouseResponse[]>('/warehouses'),
  getWarehouseById: (id: string) => request<WarehouseResponse>(`/warehouses/${id}`),
  createWarehouse: (data: WarehouseRequest) => 
    request<WarehouseResponse>('/warehouses', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  updateWarehouse: (id: string, data: WarehouseRequest) =>
    request<WarehouseResponse>(`/warehouses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  deleteWarehouse: (id: string) =>
    request<void>(`/warehouses/${id}`, {
      method: 'DELETE'
    }),

  // Products
  getProducts: () => request<ProductResponse[]>('/products'),
  getProductsPaged: (page = 0, size = 10) => 
    request<PagedResponse<ProductResponse>>(`/products/paged?page=${page}&size=${size}&sort=productName,asc`),
  getProductById: (id: string) => request<ProductResponse>(`/products/${id}`),
  createProduct: (data: ProductRequest) =>
    request<ProductResponse>('/products', {
      method: 'POST',
      body: JSON.stringify(data)
    }),
  updateProduct: (id: string, data: ProductRequest) =>
    request<ProductResponse>(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),
  deleteProduct: (id: string) =>
    request<void>(`/products/${id}`, {
      method: 'DELETE'
    }),

  // Stock Movements
  getMovements: () => request<StockMovementResponse[]>('/stock-movements'),
  getMovementsByProduct: (productId: string) => 
    request<StockMovementResponse[]>(`/stock-movements/product/${productId}`),
  createMovement: (data: StockMovementRequest) =>
    request<StockMovementResponse>('/stock-movements', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  // Health probe
  checkHealth: async (): Promise<boolean> => {
    try {
      const res = await fetch(`${API_BASE}/products`, { method: 'HEAD' });
      return res.ok;
    } catch {
      return false;
    }
  }
};
