import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'column' | 'row';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: boolean;
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

export function Stack({
  children,
  direction = 'column',
  gap = 'md',
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  className = '',
  style,
  ...props
}: StackProps) {
  const stackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap: gapMap[gap],
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...style,
  };

  return (
    <div className={`mh-stack mh-stack-${direction} ${className}`} style={stackStyle} {...props}>
      {children}
    </div>
  );
}
