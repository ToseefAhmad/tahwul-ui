/**
 * Common/shared types used across the application
 */

// Generic status type
export type Status = 'pending' | 'in-progress' | 'completed' | 'cancelled';

// Pagination types
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// API response wrapper
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

// Sort direction
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  direction: SortDirection;
}

// Filter operator
export type FilterOperator = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'in';

export interface FilterConfig {
  field: string;
  operator: FilterOperator;
  value: unknown;
}

// Navigation item
export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  active?: boolean;
}

// Timeline milestone
export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

// Generic ID type
export type ID = string | number;
