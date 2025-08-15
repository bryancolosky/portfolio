'use client';

// 🔌 Vendors
import React, { forwardRef } from 'react';

// 🎨 Styles
import styles from './Box.module.scss';

// 🤖 Configs
import {
  classNames,
  getResponsiveProps,
  sanitizeCustomProperties,
  Blocks,
  Colors,
  LineStyles,
  Overflow,
  Position,
  BorderRadius,
  BorderWidth,
  Spacing
} from '@/ui/utils';

export type Shadow = '0' | '100' | '200' | '300' | '400' | '500' | '600';

export interface BoxProps extends React.AriaAttributes {
  children?: React.ReactNode;
  as?: Blocks;
  background?: Colors;
  borderColor?: Colors | 'transparent';
  borderStyle?: LineStyles;
  borderRadius?: BorderRadius;
  borderEndStartRadius?: BorderRadius;
  borderEndEndRadius?: BorderRadius;
  borderStartStartRadius?: BorderRadius;
  borderStartEndRadius?: BorderRadius;
  borderWidth?: BorderWidth;
  borderBlockStartWidth?: BorderWidth;
  borderBlockEndWidth?: BorderWidth;
  borderInlineStartWidth?: BorderWidth;
  borderInlineEndWidth?: BorderWidth;
  color?: Colors;
  id?: string;
  minHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  overflowX?: Overflow;
  overflowY?: Overflow;
  padding?: Spacing;
  paddingBlock?: Spacing;
  paddingBlockStart?: Spacing;
  paddingBlockEnd?: Spacing;
  paddingInline?: Spacing;
  paddingInlineStart?: Spacing;
  paddingInlineEnd?: Spacing;
  role?: Extract<
    React.AriaRole,
    'status' | 'presentation' | 'menu' | 'listbox' | 'combobox' | 'group'
  >;
  shadow?: Shadow;
  tabIndex?: Extract<React.AllHTMLAttributes<HTMLElement>['tabIndex'], number>;
  width?: string;
  position?: Position;
  insetBlockStart?: Spacing;
  insetBlockEnd?: Spacing;
  insetInlineStart?: Spacing;
  insetInlineEnd?: Spacing;
  opacity?: string;
  outlineColor?: Colors;
  outlineStyle?: LineStyles;
  outlineWidth?: BorderWidth;
  printHidden?: boolean;
  visuallyHidden?: boolean;
  zIndex?: string;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as = 'div',
      background,
      borderColor,
      borderStyle,
      borderWidth,
      borderBlockStartWidth,
      borderBlockEndWidth,
      borderInlineStartWidth,
      borderInlineEndWidth,
      borderRadius,
      borderEndStartRadius,
      borderEndEndRadius,
      borderStartStartRadius,
      borderStartEndRadius,
      children,
      color,
      id,
      minHeight,
      minWidth,
      maxWidth,
      overflowX,
      overflowY,
      outlineColor,
      outlineStyle,
      outlineWidth,
      padding,
      paddingBlock,
      paddingBlockStart,
      paddingBlockEnd,
      paddingInline,
      paddingInlineStart,
      paddingInlineEnd,
      role,
      shadow,
      tabIndex,
      width,
      printHidden,
      visuallyHidden,
      position,
      insetBlockStart,
      insetBlockEnd,
      insetInlineStart,
      insetInlineEnd,
      zIndex,
      opacity,
      ...restProps
    },
    ref
  ) => {
    const borderStyleValue = borderStyle
      ? borderStyle
      : borderColor ||
          borderWidth ||
          borderBlockStartWidth ||
          borderBlockEndWidth ||
          borderInlineStartWidth ||
          borderInlineEndWidth
        ? 'solid'
        : undefined;

    const outlineStyleValue = outlineStyle
      ? outlineStyle
      : outlineColor || outlineWidth
        ? 'solid'
        : undefined;

    const style = {
      '--box-color': color ? `var(--color-${color})` : undefined,
      '--box-background': background ? `var(--color-${background})` : undefined,
      '--box-border-color': borderColor
        ? borderColor === 'transparent'
          ? 'transparent'
          : `var(--color-${borderColor})`
        : undefined,
      '--box-border-style': borderStyleValue,
      '--box-border-radius': borderRadius
        ? `var(--border-radius-${borderRadius})`
        : undefined,
      '--box-border-end-start-radius': borderEndStartRadius
        ? `var(--border-radius-${borderEndStartRadius})`
        : undefined,
      '--box-border-end-end-radius': borderEndEndRadius
        ? `var(--border-radius-${borderEndEndRadius})`
        : undefined,
      '--box-border-start-start-radius': borderStartStartRadius
        ? `var(--border-radius-${borderStartStartRadius})`
        : undefined,
      '--box-border-start-end-radius': borderStartEndRadius
        ? `var(--border-radius-${borderStartEndRadius})`
        : undefined,
      '--box-border-width': borderWidth
        ? `var(--border-width-${borderWidth})`
        : undefined,
      '--box-border-block-start-width': borderBlockStartWidth
        ? `var(--border-width-${borderBlockStartWidth})`
        : undefined,
      '--box-border-block-end-width': borderBlockEndWidth
        ? `var(--border-width-${borderBlockEndWidth})`
        : undefined,
      '--box-border-inline-start-width': borderInlineStartWidth
        ? `var(--border-width-${borderInlineStartWidth})`
        : undefined,
      '--box-border-inline-end-width': borderInlineEndWidth
        ? `var(--border-width-${borderInlineEndWidth})`
        : undefined,
      '--box-min-height': minHeight,
      '--box-min-width': minWidth,
      '--box-max-width': maxWidth,
      '--box-outline-color': outlineColor
        ? `var(--color-${outlineColor})`
        : undefined,
      '--box-outline-style': outlineStyleValue,
      '--box-outline-width': outlineWidth
        ? `var(--border-width-${outlineWidth})`
        : undefined,
      '--box-overflow-x': overflowX,
      '--box-overflow-y': overflowY,
      ...getResponsiveProps(
        'box',
        'padding-block-start',
        'space',
        paddingBlockStart || paddingBlock || padding
      ),
      ...getResponsiveProps(
        'box',
        'padding-block-end',
        'space',
        paddingBlockEnd || paddingBlock || padding
      ),
      ...getResponsiveProps(
        'box',
        'padding-inline-start',
        'space',
        paddingInlineStart || paddingInline || padding
      ),
      ...getResponsiveProps(
        'box',
        'padding-inline-end',
        'space',
        paddingInlineEnd || paddingInline || padding
      ),
      '--box-shadow': shadow ? `var(--shadow-${shadow})` : undefined,
      '--box-width': width,
      position,
      '--box-inset-block-start': insetBlockStart
        ? `var(--space-${insetBlockStart})`
        : undefined,
      '--box-inset-block-end': insetBlockEnd
        ? `var(--space-${insetBlockEnd})`
        : undefined,
      '--box-inset-inline-start': insetInlineStart
        ? `var(--space-${insetInlineStart})`
        : undefined,
      '--box-inset-inline-end': insetInlineEnd
        ? `var(--space-${insetInlineEnd})`
        : undefined,
      zIndex,
      opacity
    } as React.CSSProperties;

    const className = classNames(
      styles.box,
      visuallyHidden && styles.visuallyHidden,
      printHidden && styles.printHidden,
      as === 'ul' && styles.listReset
    );

    return React.createElement(
      as,
      {
        className,
        id,
        ref,
        style: sanitizeCustomProperties(style),
        role,
        tabIndex,
        ...restProps
      },
      children
    );
  }
);

Box.displayName = 'Box';

export default Box;
