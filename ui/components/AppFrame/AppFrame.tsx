'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';

// 🔩 Components
import AppBar, { AppBarProps } from '@/ui/components/AppBar';
import AppFooter, { AppFooterProps } from '@/ui/components/AppFooter';

// 🎨 Styles
import styles from './AppFrame.module.scss';

export type AppFrameType = React.ReactElement;

export interface AppFrameProps {
  appBar?: AppBarProps;
  appFooter?: AppFooterProps;
  children?: React.ReactNode;
}

const AppFrame = ({
  children,
  appBar,
  appFooter
}: AppFrameProps): AppFrameType => {
  return (
    <Fragment>
      {appBar && <AppBar url="/" {...appBar} />}
      {children}
      {appFooter && <AppFooter {...appFooter} />}
    </Fragment>
  );
};

export default AppFrame;
