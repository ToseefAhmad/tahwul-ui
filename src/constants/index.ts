// Routes
export { ROUTES, NAV_ITEMS, getCriteriaDetailsRoute } from './routes';
export type { RouteKey, NavItemId } from './routes';

// Status colors
export {
  CRITERIA_STATUS_COLORS,
  EVIDENCE_STATUS_COLORS,
  STAT_ICON_COLORS,
  getProgressColor,
} from './statusColors';
export type { StatIconColor } from './statusColors';

// Breakpoints
export { BREAKPOINTS, MEDIA_QUERIES } from './breakpoints';
export type { Breakpoint } from './breakpoints';

// App-wide constants
export const APP_NAME = 'Tahwul';
export const APP_VERSION = '1.0.0';

// Storage keys
export const STORAGE_KEYS = {
  USER: 'tahwul_user',
  THEME: 'tahwul_theme',
  SIDEBAR_COLLAPSED: 'tahwul_sidebar_collapsed',
} as const;

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50],
} as const;
