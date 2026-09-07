import React from 'react';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function PageHeader({
  title,
  subtitle,
  actions,
  breadcrumbs,
  badge,
  className = '',
  style,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={`mh-page-header ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '20px',
        ...style,
      }}
      {...props}
    >
      {breadcrumbs ? <div>{breadcrumbs}</div> : null}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 700,
              color: 'var(--color-foreground, #f8fafc)',
            }}
          >
            {title}
          </h1>
          {badge ? <div>{badge}</div> : null}
        </div>
        {actions ? <div style={{ display: 'flex', gap: '8px' }}>{actions}</div> : null}
      </div>
      {subtitle ? (
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            color: 'var(--color-muted-foreground, #94a3b8)',
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
