'use-client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import Header from '../Header';
import Grid from '@/ui/components/Grid';
import Media, { MediaProps } from '@/ui/components/Media';
import Link from '@/ui/components/Link';
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './Preview.module.scss';

// 🤖 Configs
import { classNames, variationName } from '@/ui/utils';
import type Author from 'interfaces/author';

export type Variants = 'hero' | 'slide' | 'snippet';
export type PreviewType = React.ReactNode | React.ReactElement;

export interface PreviewProps {
  id?: string;
  variant?: Variants;
  exif?: boolean;
  coverImage?: string;
  author?: Author;
  fill?: string;
  title?: string;
  slug?: string;
  caption?: string;
  date?: string;
  overview?: string;
  emoji?: string;
  decoration?: number;
  orientation?: string;
}

export const PreviewMedia = (props: MediaProps) => {
  return <Media {...props} />;
};

interface FooterProps {
  slug?: string;
}

export const Footer = (props: FooterProps) => {
  const className = classNames(styles.footer);
  return (
    <footer className={`${className}`}>
      <Link monochrome>
        <NextLink
          as={`/photos/${props.slug}`}
          href={`/photos/[slug]`}
          className={`${styles.Url}`}
        >
          View details 🌄
        </NextLink>
      </Link>
    </footer>
  );
};

interface EXIFProps {
  id?: string;
  slug?: string;
  title?: string;
  author?: Author;
  date?: string;
  emoji?: string;
  overview?: string;
}

export const EXIF = (props: EXIFProps) => {
  const className = classNames(styles.exif);

  return (
    <div className={className}>
      <Header
        title={props.title}
        date={props.date}
        slug={props.slug}
        emoji={props.emoji}
        linked={true}
      />
      <Text element="p" variant="caption">
        {props.overview}
      </Text>
      <Footer slug={props.slug} />
    </div>
  );
};

export const Preview = ({
  variant = 'hero',
  exif = true,
  ...props
}: PreviewProps): PreviewType => {
  const className = classNames(
    variant && styles[variant],
    variant && styles[variationName('preview', variant)],
    variant === 'hero' &&
      props.fill &&
      styles[variationName('theme', `${props.fill}`)]
  );

  return (
    <Fragment>
      <article className={`${styles.preview} ${className}`}>
        <Grid
          Cell={Grid.Cell}
          columns={{
            mobileSm: 1,
            mobileMd: 1,
            mobileLg: 1,
            tablet: exif ? 2 : 1,
            laptop: exif ? 2 : 1
          }}
          gap={{
            mobileSm: 'base',
            mobileMd: 'base',
            mobileLg: 'bit-loose',
            tablet: 'loose',
            laptop: 'super-loose'
          }}
        >
          <Grid.Cell
            columnSpan={{
              mobileSm: 1,
              mobileMd: 1,
              mobileLg: 1,
              tablet: 1,
              laptop: 1
            }}
          >
            <PreviewMedia
              id={props.id}
              slug={props.slug}
              fill={props.fill}
              source={props.coverImage}
              caption={props.caption}
              decoration={props.decoration}
              clipShape={props.orientation ? props.orientation : 'portrait'}
            />
          </Grid.Cell>
          {exif && (
            <Grid.Cell
              columnSpan={{
                mobileSm: 1,
                mobileMd: 1,
                mobileLg: 1,
                tablet: 1,
                laptop: 1
              }}
            >
              <EXIF
                id={props.id}
                slug={props.slug}
                title={props.title}
                author={props.author}
                date={props.date}
                emoji={props.emoji}
                overview={props.overview}
              />
            </Grid.Cell>
          )}
        </Grid>
      </article>
    </Fragment>
  );
};

export default Preview;
