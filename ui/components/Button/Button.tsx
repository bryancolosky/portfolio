'use client';

// 🔌 Vendors
import React from 'react';

// 🤖 Configs
import {
  handleMouseUpByBlurring,
  classNames,
  MouseUpBlurHandler,
  variationName
} from '@/ui/utils';

// 🔩 Components
import Icon, { IconSource } from '@/ui/components/Icon';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SelectIcon
} from '@/ui/components/Icon/Icons';
import Loader from '@/ui/components/Loader';
import UnstyledButton, {
  UnstyledButtonProps
} from '@/ui/components/Button/elements/UnstyledButton';

// 🎨 Styles
import styles from './Button.module.scss';

// 🤖 Configs
import { Target } from '@/ui/utils';

export interface BaseButton {
  id?: string;
  url?: string;
  external?: boolean;
  target?: Target;
  download?: string | boolean;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  pressed?: boolean;
  accessibilityLabel?: string;
  role?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaDescribedBy?: string;
  ariaChecked?: 'false' | 'true';
  onClick?(): unknown;
  onFocus?(): void;
  onBlur?(): void;
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onMouseEnter?(): void;
  onTouchStart?(): void;
  onPointerDown?(event: React.PointerEvent<HTMLButtonElement>): void;
}

export interface ButtonProps extends BaseButton {
  children?: string | string[];
  size?: 'micro' | 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'right' | 'center' | 'start' | 'end';
  fullWidth?: boolean;
  disclosure?: 'down' | 'up' | 'select' | boolean;
  removeUnderline?: boolean;
  icon?: React.ReactElement;
  dataPrimaryLink?: boolean;
  tone?: 'critical' | 'success';
  variant?: 'plain' | 'primary' | 'secondary' | 'tertiary' | 'monochromePlain';
}

interface CommonButtonProps
  extends Pick<
    ButtonProps,
    | 'id'
    | 'accessibilityLabel'
    | 'ariaDescribedBy'
    | 'role'
    | 'onClick'
    | 'onFocus'
    | 'onBlur'
    | 'onMouseEnter'
    | 'onTouchStart'
  > {
  className: UnstyledButtonProps['className'];
  onMouseUp: MouseUpBlurHandler;
  'data-primary-link'?: boolean;
}

type LinkButtonProps = Pick<
  ButtonProps,
  'url' | 'external' | 'download' | 'target'
>;

type ActionButtonProps = Pick<
  ButtonProps,
  | 'submit'
  | 'disabled'
  | 'loading'
  | 'ariaControls'
  | 'ariaExpanded'
  | 'ariaChecked'
  | 'pressed'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'onKeyPress'
  | 'onPointerDown'
>;

export const Button = ({
  id,
  children,
  url,
  disabled,
  external,
  download,
  target,
  submit,
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
  onPointerDown,
  icon,
  disclosure,
  removeUnderline,
  size = 'medium',
  textAlign = 'center',
  fullWidth,
  dataPrimaryLink,
  tone,
  variant = 'secondary'
}: ButtonProps & { UnstyledButton?: typeof UnstyledButton }) => {
  const isDisabled = disabled || loading;

  const className = classNames(
    styles.button,
    styles.pressable,
    styles[variationName('variant', variant)],
    styles[variationName('size', size)],
    styles[variationName('textAlign', textAlign)],
    fullWidth && styles.fullWidth,
    disclosure && styles.disclosure,
    icon && children && styles.iconWithText,
    icon && children == null && styles.iconOnly,
    isDisabled && styles.disabled,
    loading && styles.loading,
    pressed && !disabled && !url && styles.pressed,
    removeUnderline && styles.removeUnderline,
    tone && styles[variationName('tone', tone)]
  );

  const disclosureMarkup = disclosure ? (
    <span className={loading ? styles.hidden : styles.icon}>
      <Icon
        source={
          loading
            ? 'placeholder'
            : getDisclosureIconSource(
                disclosure,
                ChevronUpIcon,
                ChevronDownIcon
              )
        }
      />
    </span>
  ) : null;

  const iconSource = isIconSource(icon) ? (
    <Icon source={loading ? 'placeholder' : icon} />
  ) : (
    icon
  );
  const iconMarkup = iconSource ? (
    <span className={loading ? styles.hidden : styles.icon}>{iconSource}</span>
  ) : null;

  const childMarkup = children ? (
    <span
      className={removeUnderline ? styles.removeUnderline : ''}
      key={disabled ? 'text-disabled' : 'text'}
    >
      {children}
    </span>
  ) : null;

  const spinnerSVGMarkup = loading ? (
    <span className={styles.Spinner}>
      <Loader />
    </span>
  ) : null;

  const commonProps: CommonButtonProps = {
    id,
    className,
    accessibilityLabel,
    ariaDescribedBy,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: handleMouseUpByBlurring,
    onMouseEnter,
    onTouchStart,
    'data-primary-link': dataPrimaryLink
  };
  const linkProps: LinkButtonProps = {
    url,
    external,
    download,
    target
  };
  const actionProps: ActionButtonProps = {
    submit,
    disabled: isDisabled,
    loading,
    ariaControls,
    ariaExpanded,
    ariaChecked,
    pressed,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    onPointerDown
  };

  const buttonMarkup = (
    <UnstyledButton {...commonProps} {...linkProps} {...actionProps}>
      {spinnerSVGMarkup}
      {iconMarkup}
      {childMarkup}
      {disclosureMarkup}
    </UnstyledButton>
  );

  return buttonMarkup;
};

function isIconSource(x: any): x is IconSource {
  return (
    typeof x === 'string' ||
    (typeof x === 'object' && x.body) ||
    typeof x === 'function'
  );
}

function getDisclosureIconSource(
  disclosure: NonNullable<ButtonProps['disclosure']>,
  upIcon: IconSource,
  downIcon: IconSource
) {
  if (disclosure === 'select') {
    return SelectIcon;
  }
  return disclosure === 'up' ? upIcon : downIcon;
}

Button.Unstyled = UnstyledButton;

export default Button;
