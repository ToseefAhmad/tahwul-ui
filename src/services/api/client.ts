/**
 * API Client - Centralized HTTP client for all API requests
 * This provides a foundation for when a real backend is connected
 */

import type { ApiResponse } from '../../types';

// Base configuration
const DEFAULT_BASE_URL = import.meta.env.VITE_API_URL ?? '/api';
const DEFAULT_TIMEOUT = 30000;

interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>;
  timeout?: number;
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = DEFAULT_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  /**
   * Set authorization token for subsequent requests
   */
  setAuthToken(token: string | null): void {
    if (token) {
      this.defaultHeaders = {
        ...this.defaultHeaders,
        Authorization: `Bearer ${token}`,
      };
    } else {
      const { ...headers } = this.defaultHeaders as Record<string, string>;
      delete headers.Authorization;
      this.defaultHeaders = headers;
    }
  }

  /**
   * Build URL with query parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(endpoint, this.baseUrl);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  /**
   * Make HTTP request with timeout support
   */
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const { params, timeout = DEFAULT_TIMEOUT, ...fetchConfig } = config;

    const url = this.buildUrl(endpoint, params);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchConfig,
        headers: {
          ...this.defaultHeaders,
          ...fetchConfig.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        return {
          data: data as T,
          success: false,
          message: data.message || `HTTP Error: ${response.status}`,
          errors: data.errors,
        };
      }

      return {
        data: data as T,
        success: true,
      };
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof Error && error.name === 'AbortError') {
        return {
          data: null as T,
          success: false,
          message: 'Request timed out',
        };
      }

      return {
        data: null as T,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: unknown, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances
export { ApiClient };
