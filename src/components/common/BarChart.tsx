interface BarChartData {
  label: string;
  value: number;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
  barColor?: string;
  showYAxis?: boolean;
  maxValue?: number;
}

export function BarChart({
  data,
  height = 200,
  barColor = '#3b82f6',
  showYAxis = true,
  maxValue: propMaxValue,
}: BarChartProps) {
  const maxValue = propMaxValue || Math.max(...data.map((d) => d.value), 100);
  const yAxisSteps = [0, 20, 40, 60, 80, 100];

  return (
    <div className="bar-chart">
      <div className="bar-chart-container" style={{ height }}>
        {showYAxis && (
          <div className="bar-chart-y-axis">
            {yAxisSteps.reverse().map((step) => (
              <span key={step} className="y-axis-label">{step}</span>
            ))}
          </div>
        )}
        
        <div className="bar-chart-bars">
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * 100;
            return (
              <div key={index} className="bar-item">
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{
                      height: `${barHeight}%`,
                      backgroundColor: barColor,
                    }}
                  />
                </div>
                <span className="bar-label">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
