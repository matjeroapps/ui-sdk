import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  style?: React.CSSProperties;
}

const sizeMap = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

export function Container({ children, size = 'xl', className = '', style, ...props }: ContainerProps) {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: sizeMap[size],
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 'var(--spacing-4, 16px)',
    paddingRight: 'var(--spacing-4, 16px)',
    boxSizing: 'border-box',
    ...style,
  };

  return (
    <div className={`mh-container ${className}`} style={containerStyle} {...props}>
      {children}
    </div>
  );
}
