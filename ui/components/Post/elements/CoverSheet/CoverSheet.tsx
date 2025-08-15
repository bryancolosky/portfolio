// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Cover, { Variant } from '@/ui/components/Cover';

// 🎨 Styles
import styles from './CoverSheet.module.scss';

// 🔩 Config
import { classNames, variationName } from '@/ui/utils';
import type Author from 'interfaces/author';

export interface CoverSheetProps {
  id: string;
  variant?: Variant;
  coverImage?: string;
  author?: Author;
  fill?: string;
  title?: string;
  slug?: string;
  date?: string;
  caption?: string;
  overview?: string;
  emoji?: string;
  decoration?: number;
  clipShape?: string;
}

export const CoverSheet = ({
  id,
  variant = 'filled',
  title,
  coverImage,
  date,
  caption,
  overview,
  emoji,
  fill,
  decoration,
  author,
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
      id={id}
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
