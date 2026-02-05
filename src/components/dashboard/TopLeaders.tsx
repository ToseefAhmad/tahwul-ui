import { topPerformingLeaders } from '../../data/mockData';

export function TopLeaders() {
  return (
    <div className="top-leaders-card">
      <h3 className="card-title">Top Performing Perspective Leaders</h3>
      <div className="leaders-list">
        {topPerformingLeaders.map((leader) => (
          <>
          <div key={leader.id} className="leader-row">
            <img 
              src={leader.avatarUrl} 
              alt={leader.name}
              className="leader-avatar"
            />
            <div className="leader-details">
              <span className="leader-name">{leader.name}</span>
              <span className="leader-perspective">{leader.perspective}</span>
            </div>
            <span className="leader-score">{leader.score}%</span>
          </div>
          <hr></hr>
          </>
        ))}
      </div>
    </div>
  );
}
