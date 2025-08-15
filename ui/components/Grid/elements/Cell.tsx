'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import { classNames } from '@/ui/utils/utils';

// 🎨 Styles
import styles from './Cell.module.scss';

// 🤖 Config
import { Breakpoints } from '@/ui/utils';

export type CellType = React.ReactNode | React.ReactNode;

export type Cell = {
  [Breakpoint in Breakpoints]?: string;
};

export interface CellProps {
  area?: string;
  column?: Cell;
  columnSpan?: Columns;
  row?: Cell;
  children?: React.ReactNode;
}

interface Columns {
  mobileSm?: 1 | 2 | 3 | 4 | 5 | 6;
  mobileMd?: 1 | 2 | 3 | 4 | 5 | 6;
  mobileLg?: 1 | 2 | 3 | 4 | 5 | 6;
  tablet?: 1 | 2 | 3 | 4 | 5 | 6;
  laptop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  laptopLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  desktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  desktopHD?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  desktopTV?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Cell = ({
  area: gridArea,
  column,
  columnSpan,
  row,
  children
}: CellProps): CellType => {
  const className = classNames(
    styles.cell,
    columnSpan?.mobileSm &&
      styles[`cell-${columnSpan.mobileSm}-column-mobile-s`],
    columnSpan?.mobileMd &&
      styles[`cell-${columnSpan.mobileMd}-column-mobile-m`],
    columnSpan?.mobileLg &&
      styles[`cell-${columnSpan.mobileLg}-column-mobile-l`],
    columnSpan?.tablet && styles[`cell-${columnSpan.tablet}-column-tablet`],
    columnSpan?.laptop && styles[`cell-${columnSpan.laptop}-column-laptop`],
    columnSpan?.laptopLg &&
      styles[`cell-${columnSpan.laptopLg}-column-laptop-l`],
    columnSpan?.desktop && styles[`cell-${columnSpan.desktop}-column-desktop`],
    columnSpan?.desktopHD &&
      styles[`cell-${columnSpan.desktopHD}-column-desktop-hd`],
    columnSpan?.desktopTV &&
      styles[`cell-${columnSpan.desktopTV}-column-desktop-tv`]
  );

  const style = {
    gridArea,
    '--column-mobile-s': column?.mobileSm,
    '--column-mobile-m': column?.mobileMd,
    '--column-mobile-l': column?.mobileLg,
    '--column-tablet': column?.tablet,
    '--column-laptop': column?.laptop,
    '--column-laptop-l': column?.laptopLg,
    '--column-desktop': column?.desktop,
    '--column-desktop-hd': column?.desktopHD,
    '--column-desktop-tv': column?.desktopTV,
    '--row-mobile-s': row?.mobileSm,
    '--row-mobile-m': row?.mobileMd,
    '--row-mobile-l': row?.mobileLg,
    '--row-tablet': row?.tablet,
    '--row-laptop': row?.laptop,
    '--row-laptop-l': row?.laptopLg,
    '--row-desktop': row?.desktop,
    '--row-desktop-hd': row?.desktopHD,
    '--row-desktop-tv': row?.desktopTV
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Cell;
