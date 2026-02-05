/**
 * Responsive breakpoint constants
 * Matches CSS media query breakpoints in styles/variables.css
 */

export const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Media query strings for use in JavaScript
export const MEDIA_QUERIES = {
  xs: `(max-width: ${BREAKPOINTS.xs}px)`,
  sm: `(max-width: ${BREAKPOINTS.sm}px)`,
  md: `(max-width: ${BREAKPOINTS.md}px)`,
  lg: `(max-width: ${BREAKPOINTS.lg}px)`,
  xl: `(max-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `(max-width: ${BREAKPOINTS['2xl']}px)`,
  
  // Min-width variants
  smUp: `(min-width: ${BREAKPOINTS.sm + 1}px)`,
  mdUp: `(min-width: ${BREAKPOINTS.md + 1}px)`,
  lgUp: `(min-width: ${BREAKPOINTS.lg + 1}px)`,
  xlUp: `(min-width: ${BREAKPOINTS.xl + 1}px)`,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
