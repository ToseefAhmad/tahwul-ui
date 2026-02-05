/**
 * Dashboard Service - Handles all dashboard-related data operations
 * Currently uses mock data, can be easily switched to API calls
 */

import type {
  DashboardStats,
  Leader,
  PerformanceDataPoint,
  AuditReadinessData,
  ComplianceScoreData,
  Activity,
  TimelineMilestone,
  PerspectiveCategory,
} from '../types';

import {
  dashboardStats,
  topPerformingLeaders,
  monthlyPerformance,
  auditReadiness,
  complianceScore,
  recentActivities,
  timelineMilestones,
  perspectiveCategories,
} from '../data/mockData';

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Dashboard service for fetching dashboard data
 */
export const dashboardService = {
  /**
   * Get dashboard statistics
   */
  async getStats(): Promise<DashboardStats> {
    await delay(100);
    return dashboardStats;
  },

  /**
   * Get timeline milestones
   */
  async getTimeline(): Promise<TimelineMilestone[]> {
    await delay(100);
    return timelineMilestones;
  },

  /**
   * Get perspective categories
   */
  async getPerspectives(): Promise<PerspectiveCategory[]> {
    await delay(100);
    return perspectiveCategories;
  },

  /**
   * Get top performing leaders
   */
  async getTopLeaders(): Promise<Leader[]> {
    await delay(100);
    return topPerformingLeaders;
  },

  /**
   * Get recent activities
   */
  async getRecentActivities(): Promise<Activity[]> {
    await delay(100);
    return recentActivities;
  },

  /**
   * Get monthly performance data
   */
  async getMonthlyPerformance(): Promise<PerformanceDataPoint[]> {
    await delay(100);
    return monthlyPerformance;
  },

  /**
   * Get audit readiness data
   */
  async getAuditReadiness(): Promise<AuditReadinessData> {
    await delay(100);
    return auditReadiness;
  },

  /**
   * Get compliance score
   */
  async getComplianceScore(): Promise<ComplianceScoreData> {
    await delay(100);
    return complianceScore;
  },

  /**
   * Get all dashboard data at once
   */
  async getAllDashboardData() {
    const [
      stats,
      timeline,
      perspectives,
      leaders,
      activities,
      performance,
      audit,
      compliance,
    ] = await Promise.all([
      this.getStats(),
      this.getTimeline(),
      this.getPerspectives(),
      this.getTopLeaders(),
      this.getRecentActivities(),
      this.getMonthlyPerformance(),
      this.getAuditReadiness(),
      this.getComplianceScore(),
    ]);

    return {
      stats,
      timeline,
      perspectives,
      leaders,
      activities,
      performance,
      audit,
      compliance,
    };
  },
};
