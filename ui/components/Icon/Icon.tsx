'use client';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { fab } from '@fortawesome/free-brands-svg-icons';

import Text from '../Typography';

import { classNames, variationName } from '@/ui/utils';

import styles from './Icon.module.scss';

type Tone =
  | 'base'
  | 'inherit'
  | 'subdued'
  | 'caution'
  | 'warning'
  | 'critical'
  | 'interactive'
  | 'info'
  | 'success'
  | 'primary'
  | 'emphasis'
  | 'magic';

export type IconSource =
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  | 'placeholder'
  | string;

export interface IconProps {
  source: IconSource;
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  tone?: Tone;
  accessibilityLabel?: string;
}

export function Icon({
  source,
  tone,
  accessibilityLabel,
  size = 'medium'
}: IconProps) {
  library.add(fab);

  let sourceType: 'function' | 'placeholder' | 'external';
  if (typeof source === 'function') {
    sourceType = 'function';
  } else if (source === 'placeholder') {
    sourceType = 'placeholder';
  } else {
    sourceType = 'external';
  }

  if (
    tone &&
    sourceType === 'external' &&
    process.env.NODE_ENV === 'development'
  ) {
    console.warn(
      'Recoloring external SVGs is not supported. Set the intended color on your SVG instead.'
    );
  }

  const className = classNames(
    styles.icon,
    styles[variationName('size', size)],
    tone && styles[variationName('tone', tone)]
  );

  const SourceComponent = source;
  const contentMarkup = {
    function: (
      <SourceComponent
        className={styles.svg}
        focusable="false"
        aria-hidden="true"
      />
    ),
    placeholder: <div className={styles.placeholder} />,
    external: (
      <img
        className={styles.img}
        src={`data:image/svg+xml;utf8,${source}`}
        alt=""
        aria-hidden="true"
      />
    )
  };

  return (
    <span className={className}>
      {accessibilityLabel && (
        <Text element="span" visuallyHidden>
          {accessibilityLabel}
        </Text>
      )}
      {contentMarkup[sourceType]}
    </span>
  );
}

export default Icon;
