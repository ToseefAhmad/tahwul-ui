/**
 * Auth Service - Handles authentication operations
 */

import type { User, LoginCredentials, LoginResponse } from '../types';
import { STORAGE_KEYS } from '../constants';

// Demo credentials for development
const DEMO_CREDENTIALS = {
  email: 'toseef@dev.com',
  password: 'admin',
  user: {
    id: '1',
    email: 'toseef@dev.com',
    name: 'Mohamed',
    role: 'admin' as const,
  },
};

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Auth service for handling authentication
 */
export const authService = {
  /**
   * Login with credentials
   */
  async login(credentials: LoginCredentials): Promise<LoginResponse | null> {
    await delay(500);

    // Demo authentication
    if (
      credentials.email === DEMO_CREDENTIALS.email &&
      credentials.password === DEMO_CREDENTIALS.password
    ) {
      const response: LoginResponse = {
        user: DEMO_CREDENTIALS.user,
        token: 'demo-token-' + Date.now(),
      };

      // Store user in localStorage
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));

      return response;
    }

    return null;
  },

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    await delay(100);
    localStorage.removeItem(STORAGE_KEYS.USER);
  },

  /**
   * Get current user from storage
   */
  getCurrentUser(): User | null {
    const stored = localStorage.getItem(STORAGE_KEYS.USER);
    if (stored) {
      try {
        return JSON.parse(stored) as User;
      } catch {
        return null;
      }
    }
    return null;
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  },

  /**
   * Refresh session (mock implementation)
   */
  async refreshSession(): Promise<User | null> {
    await delay(100);
    return this.getCurrentUser();
  },

  /**
   * Update user profile (mock implementation)
   */
  async updateProfile(updates: Partial<User>): Promise<User | null> {
    await delay(200);

    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUser));
      return updatedUser;
    }

    return null;
  },
};
