'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Cell from './elements';

// 🎨 Styles
import styles from './Grid.module.scss';

// 🤖 Configs
import {
  getResponsiveProps,
  Breakpoints,
  Gap,
  ResponsiveProp,
  Space
} from '@/ui/utils';

export type Areas = {
  [Breakpoint in Breakpoints]?: string[];
};

export type Columns = {
  [Breakpoint in Breakpoints]?: number;
};

export type GridType = React.ReactNode | React.ReactNode;

export interface GridProps {
  areas?: Areas;
  columns?: Columns;
  gap?: Gap;
  children?: React.ReactNode;
}

const Grid = ({
  gap,
  areas,
  children,
  columns
}: GridProps & {
  Cell: typeof Cell;
}): GridType => {
  const style = {
    ...getResponsiveProps('grid', 'gap', 'space', gap),
    '--grid-columns-mobile-s': columns?.mobileSm,
    '--grid-columns-mobile-m': columns?.mobileMd,
    '--grid-columns-mobile-l': columns?.mobileLg,
    '--grid-columns-tablet': columns?.tablet,
    '--grid-columns-laptop': columns?.laptop,
    '--grid-columns-laptop-l': columns?.laptopLg,
    '--grid-columns-desktop': columns?.desktop,
    '--grid-columns-desktop-hd': columns?.desktopHD,
    '--grid-columns-desktop-tv': columns?.desktopTV,
    '--grid-areas-mobile-s': formatAreas(areas?.mobileSm),
    '--grid-areas-mobile-m': formatAreas(areas?.mobileMd),
    '--grid-areas-mobile-l': formatAreas(areas?.mobileLg),
    '--grid-areas-tablet': formatAreas(areas?.tablet),
    '--grid-areas-laptop': formatAreas(areas?.laptop),
    '--grid-areas-laptop-l': formatAreas(areas?.laptopLg),
    '--grid-areas-desktop': formatAreas(areas?.desktop),
    '--grid-areas-desktop-hd': formatAreas(areas?.desktopHD),
    '--grid-areas-desktop-tv': formatAreas(areas?.desktopTV)
  } as React.CSSProperties;

  return (
    <div className={styles.grid} style={style}>
      {children}
    </div>
  );
};

export function formatAreas(areas?: string[]) {
  if (!areas) return;
  return `'${areas?.join(`' '`)}'`;
}

Grid.Cell = Cell;

export default Grid;
