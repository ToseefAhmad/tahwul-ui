/**
 * API Endpoints - Centralized endpoint definitions
 */

export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },

  // Dashboard
  DASHBOARD: {
    STATS: '/dashboard/stats',
    TIMELINE: '/dashboard/timeline',
    PERFORMANCE: '/dashboard/performance',
    AUDIT_READINESS: '/dashboard/audit-readiness',
    COMPLIANCE_SCORE: '/dashboard/compliance-score',
    RECENT_ACTIVITIES: '/dashboard/activities',
    TOP_LEADERS: '/dashboard/leaders',
  },

  // Perspectives
  PERSPECTIVES: {
    LIST: '/perspectives',
    DETAIL: (id: string) => `/perspectives/${id}`,
    CATEGORIES: '/perspectives/categories',
  },

  // Criteria
  CRITERIA: {
    LIST: '/criteria',
    DETAIL: (id: string) => `/criteria/${id}`,
    EVIDENCE: (id: string) => `/criteria/${id}/evidence`,
    COMMENTS: (id: string) => `/criteria/${id}/comments`,
    ACTIVITIES: (id: string) => `/criteria/${id}/activities`,
  },

  // Documents
  DOCUMENTS: {
    LIST: '/documents',
    DETAIL: (id: string) => `/documents/${id}`,
    UPLOAD: '/documents/upload',
    DOWNLOAD: (id: string) => `/documents/${id}/download`,
  },

  // Tasks
  TASKS: {
    LIST: '/tasks',
    DETAIL: (id: string) => `/tasks/${id}`,
    ASSIGN: (id: string) => `/tasks/${id}/assign`,
    STATUS: (id: string) => `/tasks/${id}/status`,
  },

  // Users
  USERS: {
    LIST: '/users',
    DETAIL: (id: string) => `/users/${id}`,
    ROLES: '/users/roles',
  },

  // Reports
  REPORTS: {
    LIST: '/reports',
    GENERATE: '/reports/generate',
    DOWNLOAD: (id: string) => `/reports/${id}/download`,
  },
} as const;
