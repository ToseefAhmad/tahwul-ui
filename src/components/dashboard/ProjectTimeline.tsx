import { timelineMilestones } from '../../data/mockData';
import { ChevronDown } from 'lucide-react';

export function ProjectTimeline() {
  const totalCount = timelineMilestones.length;
  
  let lastCompletedIndex = -1;
  let hasInProgress = false;
  
  timelineMilestones.forEach((m, index) => {
    if (m.status === 'completed') {
      lastCompletedIndex = index;
    }
    if (m.status === 'in-progress') {
      hasInProgress = true;
    }
  });
  
  const stepSize = 100 / (totalCount - 1);
  let progressPercentage = lastCompletedIndex >= 0 
    ? (lastCompletedIndex / (totalCount - 1)) * 100 
    : 0;
  
  if (hasInProgress && lastCompletedIndex < totalCount - 1) {
    progressPercentage += stepSize * 0.3;
  }

  return (
    <div className="timeline-card">
      <div className="timeline-header">
        <h2 className="timeline-title">Project Timeline</h2>
        <button className="year-selector">
          <span>2026</span>
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="timeline-container">
        <div className="timeline-track">
          <div
            className="timeline-track-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="timeline-milestones">
          {timelineMilestones.map((milestone) => {
            const isCompleted = milestone.status === 'completed';
            return (
              <div key={milestone.id} className="timeline-milestone">
                <div className={`timeline-dot ${isCompleted ? 'timeline-dot-completed' : 'timeline-dot-upcoming'}`} />
                <span className="timeline-date">{milestone.date}</span>
                <span className="timeline-name">{milestone.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
