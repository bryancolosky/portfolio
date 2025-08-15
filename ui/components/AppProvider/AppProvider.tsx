'use client';

// 🔌 Vendors
import React, { useState, useEffect, Fragment } from 'react';
import 'animate.css';

// 🔩 Components
import type { LinkComponent } from '../Link';

import { LinkContext } from '../Link';
import AppSplash from '../AppSplash';

// 🤖 Configs

// 🎨 Styles
import styles from './AppProvider.module.scss';

export type AppProviderType = React.ReactElement;

export interface AppProviderProps {
  children: React.ReactNode;
  curtain?: boolean;
  linkComponent?: LinkComponent;
}

export const AppProvider = ({
  linkComponent,
  children,
  curtain = true
}: AppProviderProps): AppProviderType => {
  const [splash, setSplash] = useState(curtain);
  const [link, setLink] = useState<LinkComponent | undefined>(linkComponent);

  async function Splash() {
    return new Promise(() =>
      setTimeout(() => {
        setSplash(false);
      }, 1200)
    );
  }

  useEffect(() => {
    const root = splash === true ? Splash() : null;

    if (root !== null) {
      const loader = document.getElementsByClassName('splash');
      loader[0].classList.add('animate__animated', 'animate__delay-1s');
      loader[0].classList.add('animate__slideOutRight');

      // Android check
      const ua = navigator.userAgent.toLowerCase();
      const isAndroid = ua.indexOf('android') > -1;

      if (isAndroid) {
        loader[0].remove;
      }
    }
  }, []);

  useEffect(() => {
    setLink(linkComponent);
  }, [linkComponent]);

  if (splash === true) return <AppSplash label="Hold up ..." />;

  return (
    <Fragment>
      <LinkContext.Provider value={link}>{children}</LinkContext.Provider>
    </Fragment>
  );
};

export default AppProvider;
