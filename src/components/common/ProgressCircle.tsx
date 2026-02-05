interface ProgressCircleProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  strokeWidth?: number;
  showLabel?: boolean;
}

export function ProgressCircle({
  progress,
  size = 'md',
  strokeWidth = 8,
  showLabel = true,
}: ProgressCircleProps) {
  const sizes = {
    sm: 48,
    md: 80,
    lg: 120,
  };

  const dimension = sizes[size];
  const radius = (dimension - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  const getColor = () => {
    if (progress >= 100) return '#22c55e';
    if (progress >= 75) return '#22c55e';
    if (progress >= 50) return '#f59e0b';
    if (progress >= 25) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="progress-circle" style={{ width: dimension, height: dimension }}>
      <svg width={dimension} height={dimension}>
        <circle
          className="progress-circle-bg"
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={dimension / 2}
          cy={dimension / 2}
        />
        <circle
          className="progress-circle-progress"
          stroke={getColor()}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={dimension / 2}
          cy={dimension / 2}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
            transition: 'stroke-dashoffset 0.5s ease-in-out',
          }}
        />
      </svg>
      {showLabel && (
        <span className="progress-circle-label" style={{ color: getColor() }}>
          {progress}%
        </span>
      )}
    </div>
  );
}
