/**
 * Application configuration
 * Non-environment specific configuration values
 */

export const appConfig = {
  // Pagination defaults
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50, 100],
  },

  // Date/time formats
  dateFormats: {
    display: 'MMM dd, yyyy',
    input: 'yyyy-MM-dd',
    timestamp: 'yyyy-MM-dd HH:mm:ss',
  },

  // File upload limits
  upload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'image/jpeg',
      'image/png',
    ],
    allowedExtensions: ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.jpeg', '.png'],
  },

  // Toast/notification settings
  notifications: {
    duration: 5000, // 5 seconds
    position: 'top-right' as const,
  },

  // Session settings
  session: {
    timeout: 30 * 60 * 1000, // 30 minutes
    warningBefore: 5 * 60 * 1000, // 5 minutes before expiry
  },

  // UI settings
  ui: {
    sidebarWidth: 260,
    sidebarCollapsedWidth: 70,
    headerHeight: 54,
    animationDuration: 200, // ms
  },

  // Chart colors
  chartColors: {
    primary: '#1e3a5f',
    secondary: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4',
    gradient: ['#1e3a5f', '#3b82f6'],
  },

  // Status label mappings
  statusLabels: {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    completed: 'Completed',
    'partially-uploaded': 'Partially Uploaded',
    'fully-uploaded': 'Fully Uploaded',
    delayed: 'Delayed',
    approved: 'Approved',
    'pending-review': 'Pending Review',
    rejected: 'Rejected',
  },
} as const;

export type AppConfig = typeof appConfig;
