import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outline' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'default', 
  children, 
  style, 
  className = '', 
  padding = 'md',
  hover = false,
  ...props 
}) => {
  const paddingStyles: Record<string, React.CSSProperties> = {
    none: { padding: 0 },
    sm: { padding: '12px' },
    md: { padding: '20px' },
    lg: { padding: '24px' },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-card)',
      color: 'var(--color-card-foreground)',
      border: '1px solid var(--color-card-border)',
      boxShadow: 'var(--shadow-sm)',
    },
    glass: {
      backgroundColor: 'var(--glass-bg)',
      color: 'var(--color-card-foreground)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'var(--glass-blur)',
      boxShadow: 'var(--shadow-md)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--color-foreground)',
      border: '1px solid var(--color-border)',
    },
    elevated: {
      backgroundColor: 'var(--color-card)',
      color: 'var(--color-card-foreground)',
      border: '1px solid var(--color-card-border)',
      boxShadow: 'var(--shadow-md)',
    },
  };

  const hoverStyle: React.CSSProperties = hover ? {
    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
  } : {};

  return (
    <div
      style={{
        borderRadius: 'var(--radius-lg)',
        ...paddingStyles[padding],
        ...variantStyles[variant],
        ...hoverStyle,
        ...style,
      }}
      className={`matjer-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div style={{ marginBottom: '16px', ...style }} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, style, ...props }) => (
  <h3 style={{ 
    margin: 0, 
    fontSize: '18px', 
    fontWeight: 600, 
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-foreground)', 
    ...style 
  }} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, style, ...props }) => (
  <p style={{ 
    margin: '4px 0 0 0', 
    fontSize: '13px', 
    color: 'var(--color-muted-foreground)', 
    fontFamily: 'var(--font-body)',
    ...style 
  }} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div style={{ ...style }} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...props }) => (
  <div style={{ 
    marginTop: '16px', 
    paddingTop: '16px', 
    borderTop: '1px solid var(--color-border)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: '8px', 
    ...style 
  }} {...props}>
    {children}
  </div>
);