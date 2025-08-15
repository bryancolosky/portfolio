// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import Text from '@/ui/components/Typography';
import Link from '@/ui/components/Link';

// 🤖 Configs
import { classNames } from '@/ui/utils';

// 🎨 Styles
import styles from './Title.module.scss';

export type TitleType = React.ReactNode | React.ReactElement;

export interface TitleProps {
  slug?: string;
  title?: string;
  emoji?: string;
  linked?: boolean;
}

const PostTitle = ({ ...props }: TitleProps): TitleType => {
  const className = classNames(styles.postTitle);

  return props.linked ? (
    <div className={className}>
      <Text element="h3" variant="headline-3">
        <Link primary>
          <NextLink as={`/posts/${props.slug}`} href={`/posts/[slug]`}>
            {`${props.title}`}
            {`${props.emoji}`}
          </NextLink>
        </Link>
      </Text>
    </div>
  ) : (
    <div className={className}>
      <Text element="h2" variant="headline-2">
        {`${props.title}`}
        {`${props.emoji}`}
      </Text>
    </div>
  );
};

export default PostTitle;
