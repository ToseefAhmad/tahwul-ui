import { Avatar } from './Avatar';

interface LeaderItemProps {
  name: string;
  perspective: string;
  score: number;
  avatarUrl?: string;
}

export function LeaderItem({ name, perspective, score, avatarUrl }: LeaderItemProps) {
  return (
    <div className="leader-item-row">
      <Avatar src={avatarUrl} name={name} size="lg" />
      <div className="leader-info">
        <span className="leader-name">{name}</span>
        <span className="leader-perspective">{perspective}</span>
      </div>
      <span className="leader-score">{score}%</span>
    </div>
  );
}
