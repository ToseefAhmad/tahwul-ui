interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ src, name, size = 'md', className = '' }: AvatarProps) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const dimension = sizes[size];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getBackgroundColor = (name: string) => {
    const colors = [
      '#3b82f6', '#22c55e', '#f59e0b', '#ef4444', 
      '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`avatar avatar-${size} ${className}`}
        style={{ width: dimension, height: dimension }}
      />
    );
  }

  return (
    <div
      className={`avatar avatar-${size} avatar-initials ${className}`}
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: getBackgroundColor(name),
      }}
    >
      {getInitials(name)}
    </div>
  );
}
