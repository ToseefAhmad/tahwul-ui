import type { CriteriaDetail } from '../../types';

interface OverviewTabProps {
  criteria: CriteriaDetail;
}

const leaders = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

export function OverviewTab({ criteria }: OverviewTabProps) {
  return (
    <div className="overview-tab">
      <div className="overview-table-card">
        <div className="overview-table">
          <div className="overview-row">
            <div className="overview-label">
              <span>Objective</span>
            </div>
            <div className="overview-value">{criteria.objective}</div>
          </div>

          <div className="overview-row">
            <div className="overview-label">
              <span>Implementation<br />Requirements</span>
            </div>
            <div className="overview-value">
              <p className="requirements-intro">
                Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:
              </p>
              <div className="requirements-list">
                {criteria.implementationRequirements.map((req, index) => (
                  <p key={index}>{req}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="overview-row">
            <div className="overview-label">
              <span>Evidence<br />Documents</span>
            </div>
            <div className="overview-value">{criteria.evidenceDocuments}</div>
          </div>

          <div className="overview-row">
            <div className="overview-label">
              <span>Related<br />Regulations</span>
            </div>
            <div className="overview-value">{criteria.relatedRegulations}</div>
          </div>

          <div className="overview-row">
            <div className="overview-label">
              <span>Scope</span>
            </div>
            <div className="overview-value">{criteria.scope}</div>
          </div>
        </div>
      </div>

      <div className="leaders-section-card">
        <h3 className="leaders-section-title">Leaders</h3>
        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img 
                src={leader.avatarUrl} 
                alt={leader.name}
                className="leader-card-avatar"
              />
              <div className="leader-card-info">
                <span className="leader-card-name">{leader.name}</span>
                <span className="leader-card-perspective">{leader.perspective}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
