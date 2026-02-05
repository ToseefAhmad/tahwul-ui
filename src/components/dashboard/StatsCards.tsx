import { dashboardStats } from '../../data/mockData';

import progressIcon from '../../assets/icon/progress.svg';
import folderIcon from '../../assets/icon/folder.svg';
import folderCheckIcon from '../../assets/icon/folder-check.svg';
import fileStackIcon from '../../assets/icon/file-stack.svg';
import fileCheckIcon from '../../assets/icon/file-check.svg';
import uploadIcon from '../../assets/icon/upload.svg';

const statsConfig = [
  { 
    key: 'overallProgress' as const, 
    label: 'Overall Progress', 
    icon: progressIcon,
    format: (v: number) => `${v}%`,
  },
  { 
    key: 'totalCriteria' as const, 
    label: 'Total Criteria', 
    icon: folderIcon,
    format: (v: number) => v.toString(),
  },
  { 
    key: 'completedCriteria' as const, 
    label: 'Completed Criteria', 
    icon: folderCheckIcon,
    format: (v: number) => v.toString(),
  },
  { 
    key: 'evidenceDocuments' as const, 
    label: 'Evidence Documents', 
    icon: fileStackIcon,
    format: (v: number) => v.toString(),
  },
  { 
    key: 'evidenceCompleted' as const, 
    label: 'Evidence (Completed)', 
    icon: fileCheckIcon,
    format: (v: number) => v.toString(),
  },
  { 
    key: 'uploadedToDGA' as const, 
    label: 'Uploaded To DGA', 
    icon: uploadIcon,
    format: (v: number) => v.toString(),
  },
];

export function StatsCards() {
  return (
    <div className="stats-grid">
      {statsConfig.map((stat) => {
        const value = dashboardStats[stat.key];
        return (
          <div key={stat.key} className="stat-card">
            <div className="stat-content">
              <div className="stat-value">{stat.format(value)}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-icon">
              <img src={stat.icon} alt={stat.label} className="stat-icon-img" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
