
export const ROUTES = {
  LOGIN: '/login',
  NOT_FOUND: '/404',
  UNAUTHORIZED: '/401',

  DASHBOARD: '/',
  PERSPECTIVES: '/perspectives',
  TASKS: '/tasks',
  DOCUMENTS: '/documents',
  REPORTS: '/reports',
  USERS: '/users',
  CRITERIA_DETAILS: '/criteria/:id',
} as const;

export function getCriteriaDetailsRoute(id: string): string {
  return `/criteria/${id}`;
}

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD, icon: 'dashboard' },
  { id: 'perspectives', label: 'Perspectives', path: ROUTES.PERSPECTIVES, icon: 'perspectives' },
  { id: 'tasks', label: 'Tasks', path: ROUTES.TASKS, icon: 'tasks' },
  { id: 'documents', label: 'Documents', path: ROUTES.DOCUMENTS, icon: 'documents' },
  { id: 'reports', label: 'Reports', path: ROUTES.REPORTS, icon: 'reports' },
  { id: 'users', label: 'Users & Roles', path: ROUTES.USERS, icon: 'users' },
] as const;

export type RouteKey = keyof typeof ROUTES;
export type NavItemId = (typeof NAV_ITEMS)[number]['id'];
