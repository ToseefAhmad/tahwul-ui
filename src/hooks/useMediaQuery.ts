import { useState, useEffect } from 'react';
import { MEDIA_QUERIES, type Breakpoint } from '../constants';

/**
 * Custom hook for responsive design using media queries
 * @param query - CSS media query string or breakpoint key
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Modern browsers
    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * Hook to check if screen is below a certain breakpoint
 * @param breakpoint - Breakpoint key (xs, sm, md, lg, xl, 2xl)
 */
export function useBreakpoint(breakpoint: Breakpoint | '2xl'): boolean {
  const query = MEDIA_QUERIES[breakpoint];
  return useMediaQuery(query);
}

/**
 * Hook to check if screen is mobile (below md breakpoint)
 */
export function useIsMobile(): boolean {
  return useMediaQuery(MEDIA_QUERIES.md);
}

/**
 * Hook to check if screen is tablet (between sm and lg)
 */
export function useIsTablet(): boolean {
  const isBelowLg = useMediaQuery(MEDIA_QUERIES.lg);
  const isAboveSm = useMediaQuery(MEDIA_QUERIES.smUp);
  return isBelowLg && isAboveSm;
}

/**
 * Hook to check if screen is desktop (above lg breakpoint)
 */
export function useIsDesktop(): boolean {
  return useMediaQuery(MEDIA_QUERIES.lgUp);
}
