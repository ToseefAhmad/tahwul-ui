interface GaugeChartProps {
  value: number;
  maxValue?: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  colorScheme?: 'default' | 'success' | 'warning' | 'danger';
}

export function GaugeChart({
  value,
  maxValue = 100,
  size = 'md',
  label,
  colorScheme = 'default',
}: GaugeChartProps) {
  const sizes = {
    sm: { width: 120, height: 70, strokeWidth: 10, fontSize: 20 },
    md: { width: 180, height: 100, strokeWidth: 14, fontSize: 32 },
    lg: { width: 240, height: 130, strokeWidth: 18, fontSize: 42 },
  };

  const config = sizes[size];
  const percentage = Math.min((value / maxValue) * 100, 100);
  
  const radius = (config.width - config.strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const getGradientColors = () => {
    switch (colorScheme) {
      case 'success':
        return { start: '#22c55e', end: '#16a34a' };
      case 'warning':
        return { start: '#f59e0b', end: '#d97706' };
      case 'danger':
        return { start: '#ef4444', end: '#dc2626' };
      default:
        if (percentage < 50) {
          return { start: '#ef4444', end: '#f97316' };
        } else if (percentage < 75) {
          return { start: '#f59e0b', end: '#84cc16' };
        }
        return { start: '#22c55e', end: '#16a34a' };
    }
  };

  const colors = getGradientColors();
  const gradientId = `gauge-gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="gauge-chart" style={{ width: config.width, height: config.height + 30 }}>
      <svg width={config.width} height={config.height} viewBox={`0 0 ${config.width} ${config.height}`}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="100%" stopColor={colors.end} />
          </linearGradient>
        </defs>
        
        <path
          d={`M ${config.strokeWidth / 2} ${config.height - 5} 
              A ${radius} ${radius} 0 0 1 ${config.width - config.strokeWidth / 2} ${config.height - 5}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
        />
        
        <path
          d={`M ${config.strokeWidth / 2} ${config.height - 5} 
              A ${radius} ${radius} 0 0 1 ${config.width - config.strokeWidth / 2} ${config.height - 5}`}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s ease-in-out' }}
        />
      </svg>
      
      <div className="gauge-value" style={{ fontSize: config.fontSize }}>
        {value}%
      </div>
      
      {label && <div className="gauge-label">{label}</div>}
    </div>
  );
}
