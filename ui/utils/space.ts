import { ResponsiveProp } from './breakpoints';

export type Space =
  | 'none'
  | 'hairline'
  | 'super-tight'
  | 'extra-tight'
  | 'tight'
  | 'bit-tight'
  | 'base'
  | 'loose'
  | 'bit-loose'
  | 'extra-loose'
  | 'super-loose'
  | 'jumbo';

export type BorderRadius =
  | '0'
  | '050'
  | '100'
  | '150'
  | '200'
  | '300'
  | '400'
  | '500'
  | '750';

export type BorderWidth = '0' | '0165' | '025' | '050' | '100';

export type Gap = ResponsiveProp<Space>;
export type Margin = ResponsiveProp<Space>;
export type Padding = ResponsiveProp<Space>;
export type Spacing = ResponsiveProp<Space>;
