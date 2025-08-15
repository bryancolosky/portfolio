'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';

// 🔩 Components
import Decoration from '@/ui/components/Decoration';
import getTheme from '@/ui/theme';

// 🎨 Styles
import styles from './MediaFigure.module.scss';
import { shapes } from '@/lib/shapes';

// 🤖 Configs
import { classNames, variationName, getRandomShape } from '@/ui/utils/utils';
import Mask from '@/ui/components/Mask';
import DeviceBevel from '@/ui/components/DeviceBevel';

export type MediaFigureType = React.ReactNode | React.ReactElement;

export type MediaAspectRatio = 'circle' | 'square' | 'landscape' | 'portrait';

export interface MediaFigureProps {
  aspectRatio?: MediaAspectRatio;
}

export const MediaFigure = ({ ...props }): MediaFigureType => {
  const className = classNames(
    styles[variationName('theme', getTheme(`${props.fill}`))]
  );

  const decoration =
    props.decoration === undefined
      ? `${getRandomShape(1, shapes.length)}`
      : props.decoration;

  return (
    <svg
      className={`${styles.mediaFigure}`}
      width={'100%'}
      height={'100%'}
      viewBox={
        props.viewBox
          ? props.viewBox
          : props.clipShape === 'landscape'
            ? `0 0 1000 500`
            : props.device!
              ? `0 0 1760 990`
              : `0 0 500 500`
      }
    >
      {decoration && (
        <Fragment>
          <Decoration shape={decoration} />
          <g className={`${styles.figureDeco} ${className}`}>
            <use xlinkHref={`#deco${decoration}`} />
          </g>
        </Fragment>
      )}

      {props.clipShape && (
        <Fragment>
          <Mask id={`${props.clipShape}`} />
          <clipPath
            id={`clipShape${props.id}`}
            className={`${styles.figureClippath}`}
          >
            <use xlinkHref={`#${props.clipShape}`} />
          </clipPath>
        </Fragment>
      )}

      {props.source && (
        <g clipPath={`url(#clipShape${props.id})`}>
          <filter id={`fit-${props.id}`}>
            <feImage
              xlinkHref={props.source}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              result="IMAGE"
            />
            <feComposite operator="in" in="IMAGE" in2="SourceGraphic" />
          </filter>
          <image
            className={`${styles.figureImage}`}
            xlinkHref={props.source}
            x={props.clipShape === 'landscape' ? 0 : 0}
            y={props.clipShape === 'landscape' ? 0 : 0}
            key={props.id}
            filter={`url(#fit-${props.id})`}
          />
        </g>
      )}

      {props.device && (
        <Fragment>
          <Mask id={`${props.clipShape}-2`} />
          <clipPath
            id={`clipShape${props.id}-2`}
            className={`${styles.figureClippath}`}
          >
            <use xlinkHref={`#${props.clipShape}-2`} />
          </clipPath>

          <g clipPath={`url(#clipShape${props.id}-2)`}>
            <filter id={`fit-${props.id}-2`}>
              <feImage
                xlinkHref={props.source}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                result="IMAGE"
              />
              <feComposite operator="in" in="IMAGE" in2="SourceGraphic" />
            </filter>
            <image
              className={`${styles.figureImage}`}
              xlinkHref={props.source}
              x={props.clipShape === 'landscape' ? 0 : 0}
              y={props.clipShape === 'landscape' ? 0 : 0}
              key={props.id}
              filter={`url(#fit-${props.id}-2)`}
            />
          </g>
          <DeviceBevel type={props.device.type} />
          <g className={`${className}`}>
            <use xlinkHref={`#bevel-${props.device.type}`} />
          </g>
        </Fragment>
      )}
    </svg>
  );
};

export default MediaFigure;
