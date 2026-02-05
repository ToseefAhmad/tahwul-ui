/**
 * Dashboard-related types
 */

// Stat card for dashboard statistics
export interface StatCard {
  id: string;
  value: string | number;
  label: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}

// Dashboard statistics
export interface DashboardStats {
  overallProgress: number;
  totalCriteria: number;
  completedCriteria: number;
  evidenceDocuments: number;
  evidenceCompleted: number;
  uploadedToDGA: number;
}

// Top performing leader
export interface Leader {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatarUrl?: string;
}

// Monthly performance data point
export interface PerformanceDataPoint {
  label: string;
  value: number;
}

// Audit readiness data
export interface AuditReadinessData {
  readinessLevel: number;
  overdueStds: number;
  missingEvidence: number;
}

// Compliance score data
export interface ComplianceScoreData {
  score: number;
  label: string;
}

// Activity types
export type ActivityType = 'upload' | 'comment' | 'status-change' | 'review';

// Activity item
export interface Activity {
  id: string;
  description: string;
  author: string;
  timestamp: string;
  type: ActivityType;
}
