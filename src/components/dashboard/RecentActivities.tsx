import { recentActivities } from '../../data/mockData';

export function RecentActivities() {
  return (
    <div className="recent-activities-card">
      <h3 className="card-title">Recent Activities</h3>
      <div className="activities-list">
        {recentActivities.map((activity) => (
          <>
          <div key={activity.id} className="activity-row">
            <div className="activity-dot" />
            <div className="activity-text">
              <p className="activity-description">{activity.description}</p>
            </div>
            <span className="activity-time">{activity.timestamp}</span>
          </div>
          <hr></hr>
          </>
        ))}
      </div>
    </div>
  );
}
