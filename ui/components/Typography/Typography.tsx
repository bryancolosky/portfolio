// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Link from '../Link';

// 🎨 Styles
import styles from './Typography.module.scss';

// 🤖 Configs
import { classNames, variationName, Blocks, Inlines } from '@/ui/utils';

type Headlines =
  | 'headline-1'
  | 'headline-2'
  | 'headline-3'
  | 'headline-4'
  | 'headline-5'
  | 'headline-6';

type Editorial = 'lead' | 'body' | 'caption' | 'fine' | 'micro';

type Code = 'code' | 'pre' | 'keyboard';

type Alignment = 'start' | 'center' | 'end' | 'justify';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type Color =
  | 'accent'
  | 'success'
  | 'critical'
  | 'warning'
  | 'subdued'
  | 'text-inverse';

export type Variant = Headlines | Editorial | Code;
export type ElementTypes = Inlines | Blocks;

export interface TypographyProps {
  alignment?: Alignment;
  element: ElementTypes;
  breakWord?: boolean;
  children?: React.ReactNode;
  color?: Color;
  fontWeight?: FontWeight;
  id?: string;
  numeric?: boolean;
  truncate?: boolean;
  variant?: Variant;
  visuallyHidden?: boolean;
}

export const typeSettings = {
  a: ({ children, id }: TypographyProps) => (
    <Link monochrome id={id}>
      {children}
    </Link>
  ),
  h1: ({ children, id }: TypographyProps) => (
    <Text variant="headline-1" element="h1" id={id}>
      {children}
    </Text>
  ),
  h2: ({ children, id }: TypographyProps) => (
    <Text variant="headline-2" element="h2" id={id}>
      {children}
    </Text>
  ),
  h3: ({ children, id }: TypographyProps) => (
    <Text variant="headline-3" element="h3" id={id}>
      {children}
    </Text>
  ),
  h4: ({ children, id }: TypographyProps) => (
    <Text variant="headline-4" element="h4" id={id}>
      {children}
    </Text>
  ),
  h5: ({ children, id }: TypographyProps) => (
    <Text variant="headline-5" element="h5" id={id}>
      {children}
    </Text>
  ),
  h6: ({ children, id }: TypographyProps) => (
    <Text variant="headline-6" element="h6" id={id}>
      {children}
    </Text>
  ),
  pre: ({ children, id }: TypographyProps) => (
    <Text variant="code" element="pre" id={id}>
      {children}
    </Text>
  ),
  p: ({ children, id }: TypographyProps) => (
    <Text variant="body" element="p" id={id}>
      {children}
    </Text>
  ),
  span: ({ children, id }: TypographyProps) => (
    <Text variant="body" element="span" id={id}>
      {children}
    </Text>
  ),
  small: ({ children, id }: TypographyProps) => (
    <Text variant="caption" element="small" id={id}>
      {children}
    </Text>
  )
};

export const Text = ({
  id,
  alignment,
  element,
  breakWord,
  children,
  color,
  fontWeight,
  numeric = false,
  truncate = false,
  variant,
  visuallyHidden = false
}: TypographyProps) => {
  const Component = element || (visuallyHidden ? 'span' : 'p');

  const className = classNames(
    styles.root,
    variant && styles[variationName('variant', variant)],
    fontWeight && styles[variationName('fontWeight', fontWeight)],
    (alignment || truncate) && styles.block,
    alignment && styles.alignment,
    breakWord && styles.break,
    color && styles[color],
    numeric && styles.numeric,
    truncate && styles.truncate,
    visuallyHidden && styles.visuallyHidden
  );

  return (
    <Component className={className} {...(id && { id })}>
      {children}
    </Component>
  );
};

export default Text;
