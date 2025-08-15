'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';

// 🔩 Components

// 🎨 Styles

const MASKS = [
  {
    viewBox: '0 0 500 500',
    id: 'circle',
    circle: { x: '250', y: '250', r: '180' }
  },
  {
    viewBox: '0 0 500 500',
    id: 'rect',
    rect: { x: '70', y: '10', width: '360', height: '480', rx: '16' }
  },
  {
    viewBox: '0 0 500 500',
    id: 'portrait',
    portrait: { x: '70', y: '10', width: '360', height: '480', rx: '16' }
  },
  {
    viewBox: '0 0 1000 500',
    id: 'landscape',
    landscape: { x: '20', y: '70', width: '960', height: '360', rx: '16' }
  },
  {
    viewBox: '0 0 1760 990',
    id: 'macbook',
    macbook: { x: '360', y: '119', width: '1040', height: '720', rx: '12' }
  },
  {
    viewBox: '0 0 1760 990',
    id: 'phone',
    android: { x: '1040', y: '101', width: '412', height: '789' },
    apple: { x: '307', y: '125', width: '393', height: '740' }
  }
];

export type MaskType = React.ReactElement;

export interface MaskProps {
  id?: string;
  includeSvg?: true;
  viewbox?: string;
  name?: string;
  width?: string;
  height?: string;
}

export const Mask = ({
  viewbox,
  width,
  height,
  ...props
}: MaskProps): MaskType => {
  const symbols = MASKS.map((mask, i) => (
    <symbol key={i} viewBox={viewbox ? viewbox : mask.viewBox}>
      <title>{mask.id}</title>
      {mask.circle ? (
        <circle
          id={mask.id}
          cx={mask.circle.x}
          cy={mask.circle.y}
          r={mask.circle.r}
        />
      ) : null}
      {mask.rect ? (
        <rect
          id={mask.id}
          x={mask.rect.x}
          y={mask.rect.y}
          width={width ? `${width}` : mask.rect.width}
          height={height ? `${height}` : mask.rect.height}
          rx={mask.rect.rx}
        />
      ) : null}
      {mask.macbook ? (
        <rect
          id={mask.id}
          x={mask.macbook.x}
          y={mask.macbook.y}
          width={width ? `${width}` : mask.macbook.width}
          height={height ? `${height}` : mask.macbook.height}
          fill="none"
          strokeWidth="2"
          rx={mask.macbook.rx}
        />
      ) : null}
      {mask.android ? (
        <rect
          id={mask.id}
          x={mask.android.x}
          y={mask.android.y}
          width={width ? `${width}` : mask.android.width}
          height={height ? `${height}` : mask.android.height}
          fill="none"
          strokeWidth="2"
        />
      ) : null}
      {mask.apple ? (
        <rect
          id={`${mask.id}-2`}
          x={mask.apple.x}
          y={mask.apple.y}
          width={width ? `${width}` : mask.apple.width}
          height={height ? `${height}` : mask.apple.height}
          fill="none"
          strokeWidth="2"
        />
      ) : null}
      {mask.portrait ? (
        <rect
          id={mask.id}
          x={mask.portrait.x}
          y={mask.portrait.y}
          width={width ? `${width}` : mask.portrait.width}
          height={height ? `${height}` : mask.portrait.height}
          fill="none"
          strokeWidth="2"
          rx={mask.portrait.rx}
        />
      ) : null}
      {mask.landscape ? (
        <rect
          id={mask.id}
          x={mask.landscape.x}
          y={mask.landscape.y}
          width={width ? `${width}` : mask.landscape.width}
          height={height ? `${height}` : mask.landscape.height}
          rx={mask.landscape.rx}
        />
      ) : null}
    </symbol>
  ));

  return <Fragment>{symbols}</Fragment>;
};

export default Mask;
