'use client';

// 🔌 Vendors
import React from 'react';
import NextLink from 'next/link';

// 🔩 Components
import Media, { MediaProps } from '@/ui/components/Media';
import Box from '@/ui/components/Box';
import Text from '@/ui/components/Typography';
import { CoverHeader } from '@/ui/components/Cover/elements';
import Link, { LinkComponentProps } from '@/ui/components/Link';

// 🎨 Styles
import styles from './Cover.module.scss';
import { Content } from 'interfaces/index';

// 🤖 Configs
import { classNames, variationName } from '@/ui/utils';
import type Author from 'interfaces/author';
import FullFrame from '../FullFrame';
import Grid from '../Grid';

export type Variant = 'filled' | 'none';
export interface CoverProps extends Content {
  variant?: Variant;
  coverImage?: string;
  author?: Author;
  fill?: string;
  title?: string;
  slug?: string;
  caption?: string;
  overview?: string;
  date?: string;
  decoration?: number;
  clipShape?: string;
}

export const CoverMedia = (
  props: React.JSX.IntrinsicAttributes & MediaProps
) => {
  return <Media {...props} />;
};

export const CoverAnchorlink = ({ ...props }: LinkComponentProps) => {
  const className = classNames(styles.coverFooter);
  return (
    <footer className={`${className}`}>
      <Link monochrome>
        <NextLink href={`#content`}>Read more ↴</NextLink>
      </Link>
    </footer>
  );
};

export const CoverContent = ({ ...props }: CoverProps) => {
  const className = classNames(styles.coverContent);
  return (
    <div className={className}>
      <CoverHeader
        title={props.title}
        date={props.date}
        slug={props.slug}
        emoji={props.emoji}
      />
      <Text element="p" variant="body">
        {props.overview}
      </Text>
      <CoverAnchorlink slug={props.slug} />
    </div>
  );
};

export const Cover = ({
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
}: CoverProps) => {
  const className = classNames(
    variant && styles[variant],
    variant && styles[variationName('cover', variant)],
    variant === 'filled' && fill && styles[variationName('theme', `${fill}`)]
  );

  return (
    <FullFrame>
      <header className={`${styles.cover} ${className}`}>
        <Grid Cell={() => <Grid.Cell />}>
          <Grid.Cell>
            <CoverMedia
              id={slug}
              fill={fill}
              source={coverImage}
              caption={caption}
              decoration={decoration}
              clipShape={props.clipShape}
            />
          </Grid.Cell>
          <Grid.Cell>
            <CoverContent
              id={props.id}
              title={title}
              slug={slug}
              date={date}
              overview={overview}
            />
          </Grid.Cell>
        </Grid>
      </header>
    </FullFrame>
  );
};
export default Cover;
