interface ActivityItemProps {
  description: string;
  timestamp: string;
  type?: 'upload' | 'task' | 'create' | 'review' | 'default';
}

export function ActivityItem({ description, timestamp, type = 'default' }: ActivityItemProps) {
  const getIndicatorColor = () => {
    switch (type) {
      case 'upload':
        return 'indicator-red';
      case 'task':
        return 'indicator-blue';
      case 'create':
        return 'indicator-green';
      case 'review':
        return 'indicator-orange';
      default:
        return 'indicator-red';
    }
  };

  return (
    <div className="activity-item-row">
      <div className={`activity-indicator-dot ${getIndicatorColor()}`} />
      <div className="activity-text">
        <p className="activity-description">{description}</p>
      </div>
      <span className="activity-time">{timestamp}</span>
    </div>
  );
}
