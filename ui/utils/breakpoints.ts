import { isObject } from './utils';

export type Breakpoints =
  | 'mobileSm'
  | 'mobileMd'
  | 'mobileLg'
  | 'tablet'
  | 'laptop'
  | 'laptopLg'
  | 'desktop'
  | 'desktopHD'
  | 'desktopTV';

export type BreakpointsAlias = (typeof breakpointsAliases)[number];

export type ResponsivePropConfig<T = string> = {
  [Breakpoint in BreakpointsAlias]?: T;
};

export type ResponsiveProp<T> = T | ResponsivePropConfig<T>;

export type ResponsiveValue<T = string> = undefined | ResponsiveProp<T>;

export type ResponsiveVariables<T> = {
  [Breakpoint in `${string}-${BreakpointsAlias}`]?: T;
};

export const breakpointsAliases = [
  'mobileSm',
  'mobileMd',
  'mobileLg',
  'tablet',
  'laptop',
  'laptopLg',
  'desktop',
  'desktopHD',
  'desktopTV'
] as const;

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
