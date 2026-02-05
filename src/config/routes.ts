import { lazy, type ComponentType } from 'react';
import { ROUTES } from '../constants';

const Dashboard = lazy(() => import('../pages/Dashboard').then((m) => ({ default: m.Dashboard })));
const DetailsPage = lazy(() => import('../pages/DetailsPage').then((m) => ({ default: m.DetailsPage })));
const LoginPage = lazy(() => import('../pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const UnauthorizedPage = lazy(() => import('../pages/UnauthorizedPage').then((m) => ({ default: m.UnauthorizedPage })));

export interface RouteConfig {
  path: string;
  element: ComponentType;
  label: string;
  isProtected: boolean;
  showInNav?: boolean;
  icon?: string;
}

export const protectedRoutes: RouteConfig[] = [
  {
    path: ROUTES.DASHBOARD,
    element: Dashboard,
    label: 'Dashboard',
    isProtected: true,
    showInNav: true,
    icon: 'dashboard',
  },
  {
    path: ROUTES.PERSPECTIVES,
    element: Dashboard,
    label: 'Perspectives',
    isProtected: true,
    showInNav: true,
    icon: 'perspectives',
  },
  {
    path: ROUTES.TASKS,
    element: Dashboard,
    label: 'Tasks',
    isProtected: true,
    showInNav: true,
    icon: 'tasks',
  },
  {
    path: ROUTES.DOCUMENTS,
    element: Dashboard,
    label: 'Documents',
    isProtected: true,
    showInNav: true,
    icon: 'documents',
  },
  {
    path: ROUTES.REPORTS,
    element: Dashboard,
    label: 'Reports',
    isProtected: true,
    showInNav: true,
    icon: 'reports',
  },
  {
    path: ROUTES.USERS,
    element: Dashboard,
    label: 'Users & Roles',
    isProtected: true,
    showInNav: true,
    icon: 'users',
  },
  {
    path: ROUTES.CRITERIA_DETAILS,
    element: DetailsPage,
    label: 'Criteria Details',
    isProtected: true,
    showInNav: false,
  },
];

export const publicRouteConfig = {
  login: {
    path: ROUTES.LOGIN,
    element: LoginPage,
    label: 'Login',
  },
  notFound: {
    path: ROUTES.NOT_FOUND,
    element: NotFoundPage,
    label: 'Not Found',
  },
  unauthorized: {
    path: ROUTES.UNAUTHORIZED,
    element: UnauthorizedPage,
    label: 'Unauthorized',
  },
};

export const routes = protectedRoutes;

export const navRoutes = protectedRoutes.filter((route) => route.showInNav);
