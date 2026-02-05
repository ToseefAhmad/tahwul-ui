import type { Activity } from '../../types';

interface ActivitiesPanelProps {
  activities: Activity[];
}

export function ActivitiesPanel({ activities }: ActivitiesPanelProps) {
  return (
    <div className="activities-panel">
      <h3 className="activities-panel-title">Recent Activities</h3>
      <div className="activities-panel-list">
        {activities.map((activity) => (
          <>
          <div key={activity.id} className="activity-panel-item">
            <div className="activity-panel-dot" />
            <div className="activity-panel-content">
              <p className="activity-panel-text">{activity.description}</p>
            </div>
            <span className="activity-panel-time">{activity.timestamp}</span>
          </div>
          <hr></hr>
          </>
        ))}
      </div>
    </div>
  );
}
