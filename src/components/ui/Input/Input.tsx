import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../../utils';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`;

    return (
      <div className={cn('input-wrapper', fullWidth && 'input-full-width', className)}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div className={cn('input-container', error && 'input-error')}>
          {leftIcon && <span className="input-icon input-icon-left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={cn('input-field', leftIcon ? 'has-left-icon' : '', rightIcon ? 'has-right-icon' : '')}
            {...props}
          />
          {rightIcon && <span className="input-icon input-icon-right">{rightIcon}</span>}
        </div>
        {(error || helperText) && (
          <span className={cn('input-helper', error && 'input-helper-error')}>
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
