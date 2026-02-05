export interface User {
  id?: string;
  email: string;
  name: string;
  role?: UserRole;
  avatar?: string;
}

// User roles
export type UserRole = 'admin' | 'manager' | 'user' | 'viewer';

// Login credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

// Login response
export interface LoginResponse {
  user: User;
  token?: string;
  refreshToken?: string;
  expiresAt?: string;
}

// Auth context state
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Auth context actions
export interface AuthActions {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshSession?: () => Promise<void>;
}

// Combined auth context type
export type AuthContextType = AuthState & AuthActions;

// Session storage data
export interface StoredSession {
  user: User;
  expiresAt?: string;
}
