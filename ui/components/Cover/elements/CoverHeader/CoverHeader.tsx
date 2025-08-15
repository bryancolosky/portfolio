'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import { CoverMeta } from '@/ui/components/Cover/elements';
import { CoverTitle } from '@/ui/components/Cover/elements';

// 🤖 Configs
import { classNames } from '@/ui/utils';

// 🎨 Styles
import styles from './CoverHeader.module.scss';

export type CoverHeaderType = React.ReactNode;

export interface CoverHeaderProps {
  slug?: string;
  title?: string;
  date?: string;
  emoji?: string;
  link?: { url: React.ReactNode };
}

const CoverHeader = ({ ...props }: CoverHeaderProps): CoverHeaderType => {
  const className = classNames(props.title && styles.photographHeader);

  return (
    <header className={className}>
      <CoverMeta date={props.date} slug={props.slug} />
      <CoverTitle title={props.title} emoji={props.emoji} slug={props.slug} />
    </header>
  );
};

export default CoverHeader;
