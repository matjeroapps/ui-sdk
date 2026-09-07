import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, id, className = '', style, disabled, ...props }, ref) => {
    const inputId = id || React.useId();

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'var(--font-body)',
              letterSpacing: '0.04em',
              color: 'var(--color-foreground)',
            }}
          >
            {label}
          </label>
        )}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {leftIcon && (
            <span
              style={{
                position: 'absolute',
                left: '12px',
                display: 'inline-flex',
                color: 'var(--color-muted-foreground)',
                pointerEvents: 'none',
              }}
            >
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            style={{
              width: '100%',
              height: '40px',
              paddingLeft: leftIcon ? '40px' : '12px',
              paddingRight: rightIcon ? '40px' : '12px',
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              fontFeatureSettings: '"tnum"',
              backgroundColor: 'var(--color-input)',
              color: 'var(--color-foreground)',
              border: `1px solid ${error ? 'var(--color-destructive)' : 'var(--color-input-border)'}`,
              borderRadius: 'var(--radius-sm)',
              outline: 'none',
              transition: 'var(--transition-fast)',
              opacity: disabled ? 0.5 : 1,
              cursor: disabled ? 'not-allowed' : 'text',
              boxSizing: 'border-box',
              ...style,
            }}
            className={`matjer-input ${className}`}
            {...props}
          />
          {rightIcon && (
            <span
              style={{
                position: 'absolute',
                right: '12px',
                display: 'inline-flex',
                color: 'var(--color-muted-foreground)',
              }}
            >
              {rightIcon}
            </span>
          )}
        </div>
        {error ? (
          <span id={`${inputId}-error`} style={{ fontSize: '12px', color: 'var(--color-destructive)' }} role="alert">
            {error}
          </span>
        ) : helperText ? (
          <span id={`${inputId}-helper`} style={{ fontSize: '12px', color: 'var(--color-muted-foreground)' }}>
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';