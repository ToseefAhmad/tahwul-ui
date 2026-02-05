import { useNavigate } from 'react-router-dom';
import { CriteriaIndicator } from '../common';
import { perspectiveCategories } from '../../data/mockData';
import type { CriteriaStatus } from '../../types';

const statusLegend: { status: CriteriaStatus; label: string }[] = [
  { status: 'not-started', label: 'Not Started' },
  { status: 'in-progress', label: 'In Progress' },
  { status: 'completed', label: 'Completed' },
  { status: 'partially-uploaded', label: 'Partially Uploaded' },
  { status: 'fully-uploaded', label: 'Fully Uploaded' },
  { status: 'delayed', label: 'Delayed' },
];

export function ProgressStatus() {
  const navigate = useNavigate();

  const handleCriteriaClick = () => {
    navigate('/criteria/1-1-1');
  };

  return (
    <div className="progress-status-section">
      <div className="progress-status-header">
        <h2 className="section-title">Progress Status</h2>
        <div className="status-legend">
          {statusLegend.map((item) => (
            <div key={item.status} className="legend-item">
              <span className={`legend-dot legend-dot-${item.status}`} />
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="perspectives-grid">
        {perspectiveCategories.map((category) => (
          <div key={category.id} className="perspective-card">
            <div className="perspective-header">
              <div className="perspective-name">{category.name}</div>
              <div className="perspective-progress">
                {category.progress % 1 === 0 
                  ? `${category.progress}%` 
                  : category.id === '3' 
                    ? `%${category.progress.toFixed(2)}` 
                    : `${category.progress.toFixed(2)}%`}
              </div>
            </div>

            <div className="subcategories">
              {category.subCategories.map((sub) => (
                <div key={sub.id} className="subcategory">
                  <div className="subcategory-name">{sub.name}</div>
                  {sub.criteria.length > 0 && (
                    <div className="criteria-indicators">
                      {sub.criteria.map((criteria) => (
                        <CriteriaIndicator
                          key={criteria.number}
                          number={criteria.number}
                          status={criteria.status}
                          onClick={handleCriteriaClick}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
