'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Main from '@/ui/components/Main';
import Loader from '@/ui/components/Loader';
import FullFrame from '@/ui/components/FullFrame';
import Cover from './elements';

// 🎨 Styles
import styles from './Page.module.scss';

export type PageType = React.ReactElement;

export interface PageProps {
  loading?: boolean;
  animation?: boolean;
  children?: React.ReactNode | React.ReactElement;
}

export const Page = ({ loading, children, animation }: PageProps): PageType => {
  if (loading)
    return (
      <FullFrame>
        <Loader />
      </FullFrame>
    );

  return (
    <Main animation={animation === undefined ? true : animation}>
      {children}
    </Main>
  );
};

Page.Cover = Cover;

export default Page;
