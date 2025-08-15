'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';

const DEVICES = [
  {
    viewBox: '0 0 1760 990',
    id: 'macbook',
    path: {
      d: [
        'M1580 924V68C1580 32.6538 1551.35 4 1516 4H244C208.654 4 180 32.6538 180 68V924',
        'M21 925H1739V932C1739 962.376 1714.38 987 1684 987H76C45.6243 987 21 962.376 21 932V925Z',
        'M760 924V924C760 937.255 770.745 948 784 948H976C989.255 948 1000 937.255 1000 924V924'
      ]
    },
    rect: { x: '240', y: '47', width: '1280', height: '832', rx: '32' }
  },
  {
    viewBox: '0 0 1760 990',
    id: 'phone',
    path: {
      d: [
        'M720 255H719V256V320V321H720H721C723.209 321 725 319.209 725 317V259C725 256.791 723.209 255 721 255H720Z',
        'M288 308V307H287H286C283.791 307 282 308.791 282 311V349C282 351.209 283.791 353 286 353H287H288V352V308Z',
        'M288 256V255H287H286C283.791 255 282 256.791 282 259V297C282 299.209 283.791 301 286 301H287H288V300V256Z',
        'M1019 245V244H1018H1017C1014.79 244 1013 245.791 1013 248V306C1013 308.209 1014.79 310 1017 310H1018H1019V309V245Z',
        'M1019 157V156H1018H1017C1014.79 156 1013 157.791 1013 160V218C1013 220.209 1014.79 222 1017 222H1018H1019V221V157Z'
      ]
    },
    rect: { x: '240', y: '47', width: '1280', height: '832', rx: '32' }
  }
];

export type DeviceBevelType = React.ReactElement;

export interface DeviceBevelProps {
  includeSvg?: true;
  viewbox?: string;
  name?: string;
  width?: string;
  height?: string;
  type?: 'macbook' | 'phone';
}

export const DeviceBevel = ({
  viewbox,
  width,
  height,
  ...props
}: DeviceBevelProps): DeviceBevelType => {
  const symbols = DEVICES.map((bevel, i) =>
    props.type === 'macbook' && bevel.id === 'macbook' ? (
      <symbol key={i} viewBox={viewbox ? viewbox : bevel.viewBox}>
        <title>{bevel.id}</title>
        <g id={`bevel-${bevel.id}`}>
          <rect
            x={bevel.rect.x}
            y={bevel.rect.y}
            width={width ? `${width}` : bevel.rect.width}
            height={height ? `${height}` : bevel.rect.height}
            rx={bevel.rect.rx}
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="360"
            y="119"
            width="1040"
            height="720"
            rx="12"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M360 131C360 124.373 365.373 119 372 119H1388C1394.63 119 1400 124.373 1400 131V163H360V131Z"
            transform="translate(0 0)"
            strokeWidth="2"
            fill="#F5F5F5"
          />
          <rect
            x="600"
            y="132"
            width="600"
            height="18"
            rx="9"
            stroke="none"
            fill="#DDDDDD"
          />

          <circle cx="390" cy="142" r="6" fill="#FF4136" stroke="none" />
          <circle cx="406" cy="142" r="6" fill="#FF851B" stroke="none" />
          <circle cx="422" cy="142" r="6" fill="#2ECC40" stroke="none" />
          <circle cx="880" cy="25" r="7" strokeWidth="2" fill="none" />
          {bevel.path.d.map((d, i) => (
            <path
              key={i}
              d={d}
              transform="translate(0 0)"
              strokeWidth="2"
              fill="none"
            />
          ))}
        </g>
      </symbol>
    ) : props.type === 'phone' && bevel.id === 'phone' ? (
      <symbol key={i} viewBox={viewbox ? viewbox : bevel.viewBox}>
        <title>{bevel.id}</title>
        <g id={`bevel-${bevel.id}`}>
          <circle cx="1246" cy="69" r="9" strokeWidth="2" fill="none" />
          <circle cx="1223" cy="69" r="7" stroke="none" fill="#39CCCC" />
          <circle cx="426" cy="97" r="5" stroke="none" fill="#FF851B" />
          <rect
            x="436"
            y="903"
            width="135"
            height="6"
            rx="3"
            stroke="none"
            fill="#CCCCCC"
          />
          <rect
            x="443"
            y="85"
            width="120"
            height="24"
            rx="12"
            stroke="none"
            fill="#CCCCCC"
          />
          {bevel.path.d.map((d, i) => (
            <path
              key={i}
              d={d}
              transform="translate(0 0)"
              strokeWidth="2"
              fill="none"
            />
          ))}
          <rect
            id={bevel.id}
            x="288"
            y="50"
            width="431"
            height="890"
            rx="71"
            fill="none"
            strokeWidth="2"
          />
          <rect
            id={bevel.id}
            x="1039"
            y="36"
            width="414"
            height="919"
            rx="33"
            fill="none"
            strokeWidth="2"
          />
          <rect
            x="1039"
            y="100"
            width="414"
            height="791"
            fill="none"
            strokeWidth="2"
          />
          <rect
            id={bevel.id}
            x="306"
            y="68"
            width="395"
            height="854"
            rx="57"
            fill="none"
            strokeWidth="2"
          />
          <rect
            id={bevel.id}
            x="1206"
            y="910"
            width="80"
            height="24"
            rx="12"
            stroke="none"
            fill="#CCCCCC"
          />
          <rect
            x="306"
            y="124"
            width="395"
            height="742"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="1019"
            y="16"
            width="454"
            height="959"
            rx="45"
            fill="none"
            strokeWidth="2"
          />
        </g>
      </symbol>
    ) : null
  );

  return <Fragment>{symbols}</Fragment>;
};

export default DeviceBevel;
