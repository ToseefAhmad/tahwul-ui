import type { CriteriaStatus } from '../../types';

interface StatusBadgeProps {
  status: CriteriaStatus | 'approved' | 'pending-review' | 'in-progress' | 'rejected';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
      case 'approved':
        return { label: status === 'approved' ? 'Approved' : 'Completed', color: 'green' };
      case 'in-progress':
        return { label: 'In Progress', color: 'orange' };
      case 'pending-review':
        return { label: 'Pending Review', color: 'red' };
      case 'not-started':
        return { label: 'Not Started', color: 'gray' };
      case 'partially-uploaded':
        return { label: 'Partially Uploaded', color: 'blue' };
      case 'fully-uploaded':
        return { label: 'Fully Uploaded', color: 'blue' };
      case 'delayed':
        return { label: 'Delayed', color: 'red' };
      case 'rejected':
        return { label: 'Rejected', color: 'red' };
      default:
        return { label: status, color: 'gray' };
    }
  };

  const config = getStatusConfig();

  return (
    <span className={`status-badge status-badge-${config.color} status-badge-${size}`}>
      {config.label}
    </span>
  );
}
