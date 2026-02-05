import type { ReactNode } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ value, label, icon, className = '' }: StatCardProps) {
  return (
    <div className={`stat-card ${className}`}>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
      {icon && <div className="stat-icon">{icon}</div>}
    </div>
  );
}
