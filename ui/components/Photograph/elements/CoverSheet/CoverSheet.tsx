'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Cover, { Variant } from '@/ui/components/Cover';
import { classNames, variationName } from '@/ui/utils/utils';

import type Author from 'interfaces/author';

// 🎨 Styles
import styles from './CoverSheet.module.scss';

// 🤖 Configs
import { Content } from 'interfaces/index';

export interface CoverSheetProps extends Content {
  variant?: Variant;
  coverImage: string;
  author?: Author;
  fill?: string;
  title?: string;
  slug: string;
  caption?: string;
  overview?: string;
  date?: string;
  decoration?: number;
  clipShape?: string;
}

export const CoverSheet = ({
  variant = 'filled',
  fill,
  coverImage,
  date,
  decoration,
  overview,
  caption,
  title,
  slug,
  ...props
}: CoverSheetProps) => {
  const className = classNames(
    variant && styles[variant],
    variant && styles[variationName('coverSheet', variant)],
    variant === 'filled' && fill && styles[variationName('theme', `${fill}`)]
  );

  const clipShape = `circle`;

  return (
    <Cover
      id={props.id}
      variant={variant}
      decoration={decoration}
      coverImage={coverImage}
      slug={slug}
      date={date}
      fill={fill}
      title={title}
      caption={caption}
      overview={overview}
      clipShape={clipShape}
    />
  );
};
export default CoverSheet;
