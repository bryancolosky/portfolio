// 🔌 Vendors
import React, { Children, isValidElement } from 'react';

export type Falsy = boolean | undefined | null | 0;

export function classNames(...classes: (string | Falsy)[]) {
  return classes.filter(Boolean).join(' ');
}

export function variationName(name: string, value: string) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

export type MouseUpBlurHandler = (
  event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
) => void;

export const handleMouseUpByBlurring: MouseUpBlurHandler = ({
  currentTarget
}) => currentTarget.blur();

export const getRandomShape = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function hexToRGB(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace('#', '');

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
}

export function nearestColor(
  targetColor: string,
  colorArray: string[]
): string {
  let closestDistance: number | null = null;
  let closestColor: string | null = null;

  const { r: r1, g: g1, b: b1 } = hexToRGB(targetColor);

  colorArray.forEach((color) => {
    const { r: r2, g: g2, b: b2 } = hexToRGB(color);

    const distance = Math.sqrt(
      (r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2
    );

    if (closestDistance === null || distance < closestDistance) {
      closestDistance = distance;
      closestColor = color;
    }
  });

  return closestColor!;
}

export function isObject(value: any) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function elementChildren<T extends React.ReactElement>(
  children: React.ReactNode,
  predicate: (element: T) => boolean = () => true
): T[] {
  return Children.toArray(children).filter(
    (child) => isValidElement(child) && predicate(child as T)
  ) as T[];
}

export const breakpointsAliases = [
  'mobile-s',
  'mobile-m',
  'mobile-l',
  'tablet',
  'laptop',
  'laptop-l',
  'desktop',
  'desktop-hd',
  'desktop-tv'
] as const;

export type BreakpointsAlias = (typeof breakpointsAliases)[number];

type ResponsivePropConfig<T = string> = {
  [Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveProp<T> = T | ResponsivePropConfig<T>;

export type ResponsiveValue<T = string> = undefined | ResponsiveProp<T>;

type ResponsiveVariables<T> = {
  [Breakpoint in `${string}-${BreakpointsAlias}`]?: T;
};

export function getResponsiveProps<T = string>(
  componentName: string,
  componentProp: string,
  tokenSubgroup: string,
  responsiveProp?: ResponsiveProp<T>
): ResponsiveVariables<T> {
  if (!responsiveProp) return {};

  let result: ResponsivePropConfig;

  if (!isObject(responsiveProp)) {
    result = {
      [breakpointsAliases[0]]: `var(--${tokenSubgroup}-${responsiveProp})`
    };
  } else {
    result = Object.fromEntries(
      Object.entries(responsiveProp).map(([breakpointAlias, aliasOrScale]) => [
        breakpointAlias,
        `var(--${tokenSubgroup}-${aliasOrScale})`
      ])
    );
  }

  return Object.fromEntries(
    Object.entries(result).map(([breakpointAlias, value]) => [
      `--${componentName}-${componentProp}-${breakpointAlias}`,
      value
    ])
  ) as unknown as ResponsiveVariables<T>;
}

export function sanitizeCustomProperties(
  styles: React.CSSProperties
): React.CSSProperties | undefined {
  const nonNullValues = Object.entries(styles).filter(
    ([_, value]) => value != null
  );

  return nonNullValues.length ? Object.fromEntries(nonNullValues) : undefined;
}
