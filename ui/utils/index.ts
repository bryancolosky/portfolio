import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import {
  Breakpoints,
  ResponsiveProp,
  ResponsivePropConfig,
  ResponsiveVariables,
  getResponsiveProps
} from './breakpoints';
import { classNames, sanitizeCustomProperties, variationName } from './css';
import { hexToRGB, nearestColor, Colors } from './colors';
import {
  Blocks,
  Inlines,
  LineStyles,
  Overflow,
  Position,
  Target
} from './html';
import { handleMouseUpByBlurring, MouseUpBlurHandler } from './mouse';
import {
  BorderRadius,
  BorderWidth,
  Gap,
  Margin,
  Padding,
  Space,
  Spacing
} from './space';
import { getRandomShape, shapes } from './shapes';
import { isObject, elementChildren } from './utils';

export type {
  Breakpoints,
  Blocks,
  BorderRadius,
  BorderWidth,
  Colors,
  Inlines,
  Gap,
  LineStyles,
  Margin,
  MouseUpBlurHandler,
  Overflow,
  Padding,
  Position,
  ResponsiveProp,
  ResponsivePropConfig,
  ResponsiveVariables,
  Space,
  Spacing,
  Target
};

export {
  classNames,
  variationName,
  hexToRGB,
  nearestColor,
  getResponsiveProps,
  getRandomShape,
  shapes,
  handleMouseUpByBlurring,
  sanitizeCustomProperties,
  elementChildren,
  isObject
};
