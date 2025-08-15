// 🔌 Vendors
import React, { forwardRef, memo } from 'react';

// 🔩 Components
import { handleMouseUpByBlurring } from '@/ui/utils';
import { useDisableClick } from '@/ui/hooks/useDisableInteraction';

import type { BaseButton } from '../..';
import Link from '../../../Link';

// 🎨 Styles
import styles from './UnstyledButton.module.scss';

export interface UnstyledButtonProps extends BaseButton {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function UnstyledButton({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}: UnstyledButtonProps) {
  let buttonMarkup;

  const commonProps = {
    id,
    className,
    'aria-label': accessibilityLabel
  };
  const interactiveProps = {
    ...commonProps,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart
  };

  const handleClick = useDisableClick(disabled, onClick);

  if (url) {
    buttonMarkup = disabled ? (
      <a {...commonProps}>{children}</a>
    ) : (
      <Link.Unstyled
        {...interactiveProps}
        url={url}
        external={external}
        target={target}
        download={download}
        {...rest}
      >
        {children}
      </Link.Unstyled>
    );
  } else {
    buttonMarkup = (
      <button
        {...interactiveProps}
        aria-disabled={disabled}
        type={submit ? 'submit' : 'button'}
        aria-busy={loading ? true : undefined}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-describedby={ariaDescribedBy}
        aria-checked={ariaChecked}
        aria-pressed={pressed}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyPress}
        onClick={handleClick}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return buttonMarkup;
}

export default UnstyledButton;
