'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './CoverSlug.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type CoverSlugType = React.ReactNode;

export interface CoverSlugProps {
  slug?: string;
}

const CoverSlug = ({ ...props }: CoverSlugProps): CoverSlugType => {
  const className = classNames(props.slug && styles.coverSlug);

  return (
    <span className={`${className}`}>
      <Text element="small" variant="micro" color="subdued">
        {`${props.slug}`}
      </Text>
    </span>
  );
};

export default CoverSlug;
