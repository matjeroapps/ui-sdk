import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 
    | 'default' 
    | 'secondary' 
    | 'success' 
    | 'warning' 
    | 'destructive' 
    | 'outline'
    | 'supplier-backed'
    | 'seller-owned'
    | 'pending-review'
    | 'ready-to-ship';
  size?: 'sm' | 'md';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  children,
  style,
  className = '',
  dot = true,
  ...props
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: { 
      backgroundColor: 'var(--color-primary)', 
      color: 'var(--color-on-primary)',
      border: 'none',
    },
    secondary: { 
      backgroundColor: 'var(--color-secondary)', 
      color: 'var(--color-on-secondary)',
      border: 'none',
    },
    success: { 
      backgroundColor: 'var(--color-success)', 
      color: 'var(--color-on-success)',
      border: 'none',
    },
    warning: { 
      backgroundColor: 'var(--color-warning)', 
      color: 'var(--color-on-warning)',
      border: 'none',
    },
    destructive: { 
      backgroundColor: 'var(--color-destructive)', 
      color: 'var(--color-on-destructive)',
      border: 'none',
    },
    outline: { 
      backgroundColor: 'transparent', 
      color: 'var(--color-foreground)', 
      border: '1px solid var(--color-border)',
    },
    // Stitch Operational Status Badges (Pills)
    'supplier-backed': {
      backgroundColor: 'var(--color-supplier-backed-bg)',
      color: 'var(--color-supplier-backed-text)',
      border: '1px solid var(--color-supplier-backed-border)',
    },
    'seller-owned': {
      backgroundColor: 'var(--color-seller-owned-bg)',
      color: 'var(--color-seller-owned-text)',
      border: '1px solid var(--color-seller-owned-border)',
    },
    'pending-review': {
      backgroundColor: 'var(--color-pending-bg)',
      color: 'var(--color-pending-text)',
      border: '1px solid var(--color-pending-border)',
    },
    'ready-to-ship': {
      backgroundColor: 'var(--color-ready-ship-bg)',
      color: 'var(--color-ready-ship-text)',
      border: '1px solid var(--color-ready-ship-border)',
    },
  };

  const dotColors: Record<string, string> = {
    'supplier-backed': 'var(--color-supplier-backed-dot)',
    'seller-owned': 'var(--color-seller-owned-dot)',
    'pending-review': 'var(--color-pending-dot)',
    'ready-to-ship': 'var(--color-ready-ship-dot)',
    'success': 'var(--color-success)',
    'warning': 'var(--color-warning)',
    'destructive': 'var(--color-destructive)',
    'default': 'var(--color-primary)',
    'secondary': 'var(--color-secondary)',
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: { 
      height: '20px', 
      padding: '0 8px', 
      fontSize: '10px', 
      gap: '4px',
      borderRadius: 'var(--radius-full)',
    },
    md: { 
      height: '24px', 
      padding: '0 10px', 
      fontSize: '11px', 
      gap: '6px',
      borderRadius: 'var(--radius-full)',
    },
  };

  const showDot = dot && (variant in dotColors);

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      className={`matjer-badge ${className}`}
      {...props}
    >
      {showDot && (
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: dotColors[variant],
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};