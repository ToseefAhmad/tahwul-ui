import {
  ProjectTimeline,
  StatsCards,
  ProgressStatus,
  RecentActivities,
  ComplianceScore,
  TopLeaders,
  MonthlyPerformance,
  AuditReadiness,
} from '../components/dashboard';

export function Dashboard() {
  return (
    <div className="dashboard-page">
      <ProjectTimeline />
      
      <StatsCards />
      
      <ProgressStatus />
      
      <div className="dashboard-bottom-row">
        <ComplianceScore />
        <TopLeaders />
        <RecentActivities />
      </div>
      
      <div className="dashboard-bottom-row dashboard-bottom-row-2">
        <MonthlyPerformance />
        <AuditReadiness />
      </div>
    </div>
  );
}
