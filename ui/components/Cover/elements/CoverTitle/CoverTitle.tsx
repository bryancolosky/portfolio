'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './CoverTitle.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type CoverTitleType = React.ReactNode;

export interface CoverTitleProps {
  slug?: string;
  title?: string;
  emoji?: string;
}

const CoverTitle = ({ ...props }: CoverTitleProps): CoverTitleType => {
  const className = classNames(styles.coverTitle);

  return (
    <div className={className}>
      <Text element="h1" variant="headline-1">
        {`${props.title}`}
        {props.emoji && `${props.emoji}`}
      </Text>
    </div>
  );
};

export default CoverTitle;
