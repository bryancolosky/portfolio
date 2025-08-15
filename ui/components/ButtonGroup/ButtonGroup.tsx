'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components

// 🎨 Styles
import styles from './ButtonGroup.module.scss';

// 🤖 Configs
import { classNames, elementChildren, variationName } from '@/ui/utils';
import { useToggle } from '@/ui/hooks/useToggle';

type Gap = 'extraTight' | 'tight' | 'loose';

type Variant = 'segmented';

export interface ItemProps {
  button: React.ReactElement<{ variant?: string }>;
}

export function Item({ button }: ItemProps) {
  const {
    value: focused,
    setTrue: forceTrueFocused,
    setFalse: forceFalseFocused
  } = useToggle(false);

  const className = classNames(
    styles.item,
    focused && styles['item-focused'],
    button && button.props?.variant === 'plain' && styles['item-plain']
  );

  return (
    <div
      className={className}
      onFocus={forceTrueFocused}
      onBlur={forceFalseFocused}
    >
      {button}
    </div>
  );
}

export interface ButtonGroupProps {
  gap?: Gap;
  variant?: Variant;
  fullWidth?: boolean;
  connectedTop?: boolean;
  noWrap?: boolean;
  children?: React.ReactNode;
}

export function ButtonGroup({
  children,
  gap,
  variant,
  fullWidth,
  connectedTop,
  noWrap
}: ButtonGroupProps) {
  const className = classNames(
    styles.buttonGroup,
    gap && styles[gap],
    variant && styles[variationName('variant', variant)],
    fullWidth && styles.fullWidth,
    noWrap && styles.noWrap
  );

  const contents = elementChildren(children).map((child, index) => (
    <Item
      button={child as React.ReactElement<{ variant?: string }>}
      key={index}
    />
  ));

  return (
    <div
      className={className}
      data-buttongroup-variant={variant}
      data-buttongroup-connected-top={connectedTop}
      data-buttongroup-full-width={fullWidth}
      data-buttongroup-no-wrap={noWrap}
    >
      {contents}
    </div>
  );
}

export default ButtonGroup;
