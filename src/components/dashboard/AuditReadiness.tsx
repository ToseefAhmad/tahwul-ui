import { auditReadiness } from '../../data/mockData';

export function AuditReadiness() {
  const score = auditReadiness.readinessLevel;
  const percentage = score / 100;
  
  const radius = 60;
  const strokeWidth = 12;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage * circumference);

  return (
    <div className="audit-readiness-card">
      <h3 className="card-title">Audit Readiness</h3>
      <div className="audit-gauge-container">
        <svg className="audit-gauge" viewBox="0 0 160 90">
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 20 80 A 60 60 0 0 1 140 80"
            fill="none"
            stroke="#22c55e"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />
        </svg>
        <div className="audit-value">
          <span className="audit-percentage">{score}%</span>
        </div>
        <div className="audit-label">Readiness Level</div>
      </div>
      
      <div className="audit-stats">
        <div className="audit-stat">
          <span className="audit-stat-value">{auditReadiness.overdueStds}</span>
          <span className="audit-stat-label">Overdue Stds</span>
        </div>
        <div className="audit-stat">
          <span className="audit-stat-value">{auditReadiness.missingEvidence}</span>
          <span className="audit-stat-label">Missing Evidence</span>
        </div>
      </div>
    </div>
  );
}
