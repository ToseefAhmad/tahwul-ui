import { complianceScore } from '../../data/mockData';

export function ComplianceScore() {
  const score = complianceScore.score;
  const percentage = score / 100;
  
  const radius = 70;
  const strokeWidth = 14;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage * circumference);

  return (
    <div className="compliance-score-card">
      <h3 className="card-title">Overall Compliance Score</h3>
      <div className="compliance-gauge-container">
        <svg className="compliance-gauge" viewBox="0 0 180 100">
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M 20 90 A 70 70 0 0 1 160 90"
            fill="none"
            stroke="#dc2626"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.8s ease' }}
          />
        </svg>
        <div className="compliance-value">
          <span className="compliance-percentage">{score}%</span>
        </div>
        <div className="compliance-label">{complianceScore.label}</div>
      </div>
    </div>
  );
}
