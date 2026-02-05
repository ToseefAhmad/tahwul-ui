import type { CriteriaStatus } from '../../types';

interface CriteriaIndicatorProps {
  number: number;
  status: CriteriaStatus;
  onClick?: () => void;
}

export function CriteriaIndicator({ number, status, onClick }: CriteriaIndicatorProps) {
  const getStatusClass = () => {
    switch (status) {
      case 'completed':
        return 'indicator-green';
      case 'in-progress':
        return 'indicator-orange';
      case 'not-started':
        return 'indicator-gray';
      case 'partially-uploaded':
        return 'indicator-blue-outline';
      case 'fully-uploaded':
        return 'indicator-blue';
      case 'delayed':
        return 'indicator-red';
      default:
        return 'indicator-gray';
    }
  };

  return (
    <button
      className={`criteria-indicator ${getStatusClass()}`}
      onClick={onClick}
      type="button"
    >
      {number}
    </button>
  );
}
