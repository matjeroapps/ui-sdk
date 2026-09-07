import React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  minColWidth?: string;
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;
}

const gapMap = {
  none: '0px',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export function Grid({
  children,
  cols,
  minColWidth = '280px',
  gap = 'md',
  className = '',
  style,
  ...props
}: GridProps) {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: cols
      ? `repeat(${cols}, minmax(0, 1fr))`
      : `repeat(auto-fit, minmax(${minColWidth}, 1fr))`,
    gap: gapMap[gap],
    width: '100%',
    ...style,
  };

  return (
    <div className={`mh-grid ${className}`} style={gridStyle} {...props}>
      {children}
    </div>
  );
}
