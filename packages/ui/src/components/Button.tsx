import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'supplier' | 'seller';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className = '',
      style,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      fontFeatureSettings: '"tnum"',
      borderRadius: 'var(--radius-md)',
      border: '1px solid transparent',
      cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
      opacity: disabled || isLoading ? 0.6 : 1,
      transition: 'var(--transition-fast)',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      width: fullWidth ? '100%' : 'auto',
      // Inset highlight for primary buttons (Stitch spec)
      boxShadow: variant === 'primary' ? 'inset 0 1px 0 0 rgba(255, 255, 255, 0.15)' : 'none',
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: { padding: '6px 12px', fontSize: '12px', height: '36px', gap: '6px' },
      md: { padding: '10px 20px', fontSize: '14px', height: '44px', gap: '8px' },
      lg: { padding: '14px 28px', fontSize: '16px', height: '52px', gap: '10px' },
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
        borderColor: 'var(--color-primary)',
      },
      secondary: {
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-on-secondary)',
        borderColor: 'var(--color-secondary)',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        borderColor: 'var(--color-primary)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-foreground)',
        borderColor: 'transparent',
      },
      destructive: {
        backgroundColor: 'var(--color-destructive)',
        color: 'var(--color-on-destructive)',
        borderColor: 'var(--color-destructive)',
      },
      // Functional semantic variants per Stitch spec
      supplier: {
        backgroundColor: 'var(--color-supplier-backed-bg)',
        color: 'var(--color-supplier-backed-text)',
        borderColor: 'var(--color-supplier-backed-border)',
      },
      seller: {
        backgroundColor: 'var(--color-seller-owned-bg)',
        color: 'var(--color-seller-owned-text)',
        borderColor: 'var(--color-seller-owned-border)',
      },
    };

    // Hover/active states handled via CSS
    const hoverActiveStyles: React.CSSProperties = {
      ...(variant === 'primary' && {
        // Hover and active handled in CSS
      }),
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        style={{
          ...baseStyle,
          ...sizeStyles[size],
          ...variantStyles[variant],
          ...hoverActiveStyles,
          ...style,
        }}
        className={`matjer-button ${className}`}
        {...props}
      >
        {isLoading ? (
          <span
            aria-hidden="true"
            style={{
              display: 'inline-block',
              width: '16px',
              height: '16px',
              border: '2px solid currentColor',
              borderRightColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.7s linear infinite',
            }}
          />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Add CSS for hover/active states
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .matjer-button:not(:disabled):hover {
      filter: brightness(0.95);
    }
    .matjer-button:not(:disabled):active {
      filter: brightness(0.9);
      transform: scale(0.98);
    }
    .matjer-button[variant="primary"]:not(:disabled):hover {
      background-color: var(--color-primary-hover);
      border-color: var(--color-primary-hover);
    }
    .matjer-button[variant="primary"]:not(:disabled):active {
      background-color: var(--color-primary-active);
      border-color: var(--color-primary-active);
    }
    .matjer-button[variant="secondary"]:not(:disabled):hover {
      background-color: var(--color-secondary-hover);
      border-color: var(--color-secondary-hover);
    }
    .matjer-button[variant="outline"]:not(:disabled):hover {
      background-color: var(--color-primary);
      color: var(--color-on-primary);
    }
    .matjer-button[variant="ghost"]:not(:disabled):hover {
      background-color: var(--color-muted);
    }
    .matjer-button[variant="destructive"]:not(:disabled):hover {
      background-color: #a01818;
      border-color: #a01818;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}