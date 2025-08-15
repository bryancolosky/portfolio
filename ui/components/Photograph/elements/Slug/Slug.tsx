'use-client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './Slug.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type SlugType = React.ReactNode | React.ReactElement;

export interface SlugProps {
  slug?: string;
}

const Slug = ({ ...props }: SlugProps): SlugType => {
  const className = classNames(props.slug && styles.slug);

  return (
    <span className={`${className}`}>
      <Text element="small" variant="micro" color="subdued">
        {`${props.slug}`}
      </Text>
    </span>
  );
};

export default Slug;
