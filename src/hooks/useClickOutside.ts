import { useEffect, useRef, type RefObject } from 'react';

/**
 * Custom hook that triggers a callback when clicking outside the referenced element
 * @param callback - Function to call when clicking outside
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: () => void
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

/**
 * Custom hook that triggers a callback when clicking outside multiple referenced elements
 * @param callback - Function to call when clicking outside
 * @param refs - Array of refs to check
 */
export function useClickOutsideMultiple(
  callback: () => void,
  refs: RefObject<HTMLElement>[]
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutsideAll = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      );

      if (clickedOutsideAll) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, refs]);
}
