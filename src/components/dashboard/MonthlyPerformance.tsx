import { monthlyPerformance } from '../../data/mockData';

export function MonthlyPerformance() {
  const maxValue = 100;

  return (
    <div className="monthly-performance-card">
      <h3 className="card-title">12-Month Performance</h3>
      <div className="performance-chart">
        <div className="chart-y-axis">
          <span>100</span>
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>
        <div className="chart-content">
          <div className="chart-bars">
            {monthlyPerformance.map((item, index) => {
              const height = (item.value / maxValue) * 100;
              return (
                <div key={index} className="chart-bar-item">
                  <div className="chart-bar-wrapper">
                    <div 
                      className="chart-bar" 
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="chart-bar-label">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
