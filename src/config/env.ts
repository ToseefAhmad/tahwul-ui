/**
 * Environment configuration
 * Centralized access to environment variables with type safety
 */

interface EnvConfig {
  // API
  apiUrl: string;
  apiTimeout: number;

  // App
  appName: string;
  appVersion: string;

  // Feature flags
  enableMockData: boolean;
  enableDebugMode: boolean;

  // Environment
  isDev: boolean;
  isProd: boolean;
  isTest: boolean;
}

export const env: EnvConfig = {
  // API configuration
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api',
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,

  // App info
  appName: import.meta.env.VITE_APP_NAME ?? 'Tahwul',
  appVersion: import.meta.env.VITE_APP_VERSION ?? '1.0.0',

  // Feature flags
  enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA !== 'false',
  enableDebugMode: import.meta.env.VITE_DEBUG_MODE === 'true',

  // Environment detection
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  isTest: import.meta.env.MODE === 'test',
};

// Type augmentation for import.meta.env
declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL?: string;
    readonly VITE_API_TIMEOUT?: string;
    readonly VITE_APP_NAME?: string;
    readonly VITE_APP_VERSION?: string;
    readonly VITE_ENABLE_MOCK_DATA?: string;
    readonly VITE_DEBUG_MODE?: string;
  }
}
