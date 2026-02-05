import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { CriteriaDetail } from '../../types';

interface DetailsHeaderProps {
  criteria: CriteriaDetail;
}

export function DetailsHeader({ criteria }: DetailsHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="details-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
        <span className="details-title">{criteria.title}</span>
      </button>
    </div>
  );
}

export function DetailsBanner({ criteria }: DetailsHeaderProps) {
  const progressColor = criteria.progress >= 100 ? '#22c55e' : '#3b82f6';
  
  return (
    <div className="details-banner">
      <div className="banner-content">
        <span className="category-badge">{criteria.categoryLabel}</span>
        <h1 className="banner-title">{criteria.title}</h1>
        <p className="banner-description">{criteria.description}</p>
      </div>
      <div className="banner-progress">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle
            cx="45"
            cy="45"
            r="38"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="6"
          />
          <circle
            cx="45"
            cy="45"
            r="38"
            fill="none"
            stroke={progressColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 38}
            strokeDashoffset={2 * Math.PI * 38 * (1 - criteria.progress / 100)}
            transform="rotate(-90 45 45)"
          />
          <text
            x="45"
            y="50"
            textAnchor="middle"
            fontSize="18"
            fontWeight="700"
            fill={progressColor}
          >
            {criteria.progress}%
          </text>
        </svg>
      </div>
    </div>
  );
}
