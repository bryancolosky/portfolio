'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import { CoverSlug } from '@/ui/components/Cover/elements';
import Date from '@/ui/components/Date';

// 🤖 Configs
import { classNames } from '@/ui/utils';

// 🎨 Styles
import styles from './CoverMeta.module.scss';

export type CoverMetaType = React.ReactNode;

export interface CoverMetaProps {
  slug?: string;
  date?: string;
}

const CoverMeta = ({ ...props }: CoverMetaProps): CoverMetaType => {
  const className = classNames(styles.coverMeta);

  return (
    <div className={`${className}`}>
      <CoverSlug slug={props.slug} />
      <Date dateString={props.date} />
    </div>
  );
};

export default CoverMeta;
