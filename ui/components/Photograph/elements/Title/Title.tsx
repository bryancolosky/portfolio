'use-client';

// 🔌 Vendors
import React from 'react';
import NextLink from 'next/link';

// 🔩 Components
import Text from '@/ui/components/Typography';
import Link from '@/ui/components/Link';

// 🎨 Styles
import styles from './Title.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type TitleType = React.ReactNode | React.ReactElement;

export interface TitleProps {
  slug?: string;
  title?: string;
  emoji?: string;
  linked?: boolean;
}

const Title = ({ ...props }: TitleProps): TitleType => {
  const className = classNames(styles.title);

  return props.linked ? (
    <div className={className}>
      <Text element="h3" variant="headline-3">
        <Link primary>
          <NextLink as={`/photos/${props.slug}`} href={`/photos/[slug]`}>
            {`${props.title}`}
            {props.emoji && `${props.emoji}`}
          </NextLink>
        </Link>
      </Text>
    </div>
  ) : (
    <div className={className}>
      <Text element="h1" variant="headline-1">
        {`${props.title}`}
        {props.emoji && `${props.emoji}`}
      </Text>
    </div>
  );
};

export default Title;
