'use client';

// 🔌 Vendors
import React, { Fragment, useId } from 'react';

// 🔩 Components
import Decoration from '@/ui/components/Decoration';
import Mask from '@/ui/components/Mask';

import getTheme from '@/ui/theme';

// 🎨 Styles
import styles from './Gravatar.module.scss';
import { APP_NAME } from '@/lib/constants';

// 🤖 Configs
import { classNames, getRandomShape, shapes, variationName } from '@/ui/utils';

export type GravatarType = React.ReactElement;
export interface GravatarProps {
  id?: string;
  source?: string;
  alt?: boolean;
  fill?: string;
  clipShape?: string;
  size?: { width: number; height: number };
  viewBox?: string | null;
  decoration?: number;
}
export const Gravatar = ({
  id = `${useId() + APP_NAME.replaceAll(' ', '_').toLowerCase()}`,
  fill,
  size,
  alt,
  clipShape = `circle`,
  ...props
}: GravatarProps): GravatarType => {
  const className = classNames(
    styles[variationName('theme', getTheme(`${fill}`))]
  );
  const decoration =
    props.decoration === undefined
      ? getRandomShape(1, shapes.length)
      : props.decoration;

  const source = alt!
    ? 'https://2.gravatar.com/userimage/91447980/14256f8860bf116c25cdf0b3fd5d1780'
    : 'https://www.gravatar.com/avatar/823811c7dedcd8bf752cfe686563f439';
  return (
    <svg
      className={`${styles.gravatarSvg}`}
      width={size ? size.width : '64'}
      height={size ? size.height : '64'}
      viewBox={props.viewBox ? props.viewBox : `0 0 500 500`}
    >
      {decoration && (
        <Fragment>
          <Decoration shape={decoration} />
          <g
            className={`${styles.gravatarDeco} ${styles.decorationSvg} ${className}`}
          >
            <use xlinkHref={`#deco${decoration}`} />
          </g>
        </Fragment>
      )}
      {clipShape && (
        <Fragment>
          <Mask id={`${clipShape}`} />
          <clipPath
            id={`clipShape${id}`}
            className={`${styles.gravatarClippath}`}
          >
            <use xlinkHref={`#${clipShape}`} />
          </clipPath>
        </Fragment>
      )}
      {source && (
        <g clipPath={`url(#clipShape${id})`}>
          <filter id={`fit-${id}`}>
            <feImage
              xlinkHref={source}
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
            className={`${styles.gravatarImage}`}
            xlinkHref={source}
            x={clipShape === 'landscape' ? 0 : 0}
            y={clipShape === 'landscape' ? 0 : 0}
            key={id}
            filter={`url(#fit-${id})`}
          />
        </g>
      )}
    </svg>
  );
};

export default Gravatar;
