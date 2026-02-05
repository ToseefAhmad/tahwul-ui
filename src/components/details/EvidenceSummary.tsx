import type { CriteriaDetail } from '../../types';

import fileStackIcon from '../../assets/icon/file-stack.svg';
import documentsIcon from '../../assets/icon/documents.svg';
import fileExportIcon from '../../assets/icon/file-export.svg';
import fileCheckIcon from '../../assets/icon/file-check.svg';

interface EvidenceSummaryProps {
  criteria: CriteriaDetail;
}

export function EvidenceSummary({ criteria }: EvidenceSummaryProps) {
  const summaryItems = [
    {
      id: 'total',
      icon: fileStackIcon,
      value: criteria.totalEvidence,
      label: 'Total Evidence',
    },
    {
      id: 'review',
      icon: documentsIcon,
      value: criteria.underReviewEvidence,
      label: 'Under Review Evidence',
    },
    {
      id: 'progress',
      icon: fileExportIcon,
      value: criteria.inProgressEvidence,
      label: 'In Progress Evidence',
    },
    {
      id: 'completed',
      icon: fileCheckIcon,
      value: criteria.completedEvidence,
      label: 'Completed Evidence',
    },
  ];

  return (
    <div className="evidence-summary">
      {summaryItems.map((item) => (
        <div key={item.id} className="evidence-summary-card">
          <div className="summary-icon">
            <img src={item.icon} alt={item.label} className="summary-icon-img" />
          </div>
          <div className="summary-info">
            <div className="summary-value">{item.value}</div>
            <div className="summary-label">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
