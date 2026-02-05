

import type { CriteriaStatus } from '../types';

export const CRITERIA_STATUS_COLORS: Record<CriteriaStatus, { bg: string; text: string; border?: string }> = {
  'not-started': {
    bg: '#f3f4f6',
    text: '#6b7280',
  },
  'in-progress': {
    bg: '#fef3c7',
    text: '#d97706',
  },
  'completed': {
    bg: '#d1fae5',
    text: '#059669',
  },
  'partially-uploaded': {
    bg: '#dbeafe',
    text: '#2563eb',
  },
  'fully-uploaded': {
    bg: '#d1fae5',
    text: '#059669',
  },
  'delayed': {
    bg: '#fee2e2',
    text: '#dc2626',
  },
};

export const EVIDENCE_STATUS_COLORS = {
  approved: {
    bg: '#d1fae5',
    text: '#059669',
  },
  'pending-review': {
    bg: '#fef3c7',
    text: '#d97706',
  },
  'in-progress': {
    bg: '#dbeafe',
    text: '#2563eb',
  },
  rejected: {
    bg: '#fee2e2',
    text: '#dc2626',
  },
} as const;

export function getProgressColor(percentage: number): string {
  if (percentage >= 80) return '#059669'; // Green
  if (percentage >= 60) return '#2563eb'; // Blue
  if (percentage >= 40) return '#d97706'; // Amber
  return '#dc2626'; // Red
}

export const STAT_ICON_COLORS = {
  blue: '#3b82f6',
  green: '#10b981',
  purple: '#8b5cf6',
  orange: '#f59e0b',
  red: '#ef4444',
  cyan: '#06b6d4',
} as const;

export type StatIconColor = keyof typeof STAT_ICON_COLORS;
