// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import Media, { MediaProps } from '@/ui/components/Media';
import PostHeader from '../Header';
import Link from '@/ui/components/Link';
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './Preview.module.scss';
import { Content } from 'interfaces/index';

// 🤖 Configs
import { classNames, variationName } from '@/ui/utils';
import type Author from 'interfaces/author';
import Box from '@/ui/components/Box';
import Grid from '@/ui/components/Grid';

export type Variants = 'hero' | 'slide' | 'snippet';
export type PreviewType = React.ReactNode | React.ReactElement;

export interface PreviewProps extends Content {
  id: string;
  variant?: Variants;
  coverImage?: string;
  author?: Author;
  fill?: string;
  title?: string;
  slug?: string;
  date?: string;
  overview?: string;
  emoji?: string;
  decoration?: number;
}

interface PreviewMediaProps {
  id?: string;
  fill?: string;
  source?: string;
  caption?: string;
  clipShape?: string;
  decoration?: number;
}

export const PreviewMedia = ({ ...props }: MediaProps) => {
  return <Media {...props} />;
};

interface PreviewFooterProps {
  slug?: string;
}

export const PreviewFooter = (props: PreviewFooterProps) => {
  const className = classNames(styles.footer);
  return (
    <footer className={`${className}`}>
      <Link monochrome as={`/posts/${props.slug}`} url={`/posts/[slug]`}>
        View case study ➡️
      </Link>
    </footer>
  );
};

interface PreviewBodyProps {
  title?: string;
  date?: string;
  slug?: string;
  emoji?: string;
  overview?: string;
}

export const PreviewBody = (props: PreviewBodyProps) => {
  const className = classNames(styles.body);
  return (
    <div className={className}>
      <PostHeader
        title={props.title}
        date={props.date}
        slug={props.slug}
        emoji={props.emoji}
        linked={true}
      />
      <Text element="p" variant="caption">
        {props.overview}
      </Text>
      <PreviewFooter slug={props.slug} />
    </div>
  );
};

export const Preview = ({
  variant = 'hero',
  title,
  coverImage,
  date,
  overview,
  emoji,
  fill,
  decoration,
  author,
  slug
}: PreviewProps): PreviewType => {
  const className = classNames(
    variant && styles[variant],
    variant && styles[variationName('preview', variant)],
    variant === 'hero' && fill && styles[variationName('theme', `${fill}`)]
  );

  const clipShape = `circle`;

  return (
    <article className={`${styles.preview} ${className}`}>
      <Box width="100%">
        <Grid
          Cell={Grid.Cell}
          columns={{
            mobileSm: 1,
            mobileMd: 1,
            mobileLg: 1,
            tablet: 2,
            laptop: 4,
            laptopLg: 6
          }}
          areas={{
            mobileSm: ['media', 'body'],
            mobileMd: ['media ', 'body'],
            mobileLg: ['body ', 'media'],
            tablet: ['media body'],
            laptop: ['media media body body'],
            laptopLg: ['media media media body body body']
          }}
        >
          <Grid.Cell area="media">
            <PreviewMedia
              id={slug}
              fill={fill}
              source={coverImage}
              caption={title}
              clipShape={clipShape}
              decoration={decoration}
            />
          </Grid.Cell>
          <Grid.Cell area="body">
            <PreviewBody
              title={title}
              slug={slug}
              date={date}
              emoji={emoji}
              overview={overview}
            />
          </Grid.Cell>
        </Grid>
      </Box>
    </article>
  );
};
export default Preview;
