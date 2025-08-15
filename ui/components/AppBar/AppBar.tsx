'use client';

// 🔌 Vendors
import React, { useEffect, useRef, useState } from 'react';

// 🔩 Components
import Logo, { LogoProps } from '../Logo/Logo';
import AppNavigation from '../AppNavigation';
import { APP_NAME } from '@/lib/constants';
import { useMobileMenu } from '@/ui/hooks/useMobileMenu';

import styles from './AppBar.module.scss';
import Box from '../Box';

interface AppBarTrayProps {
  children: React.ReactNode;
  className?: string;
  hideOffset?: number;
  scrollThreshold?: number;
  disableScrollVisibility?: boolean;
}

const AppBarTray = ({
  children,
  hideOffset = 60,
  scrollThreshold = 5,
  disableScrollVisibility = false
}: AppBarTrayProps) => {
  const [visible, setVisible] = useState(true);
  const [pinned, setPinned] = useState(true);

  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (disableScrollVisibility) return;

      setPinned(currentScrollY <= 0);

      if (Math.abs(currentScrollY - lastScrollY.current) < scrollThreshold) {
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > hideOffset) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [disableScrollVisibility, hideOffset, scrollThreshold]);

  return (
    <div
      className={`
        ${styles.appBarTray} 
        ${visible ? styles.visible : styles.hidden}
        ${pinned ? styles.pinned : styles.unpinned}
      `}
    >
      <Box
        width="100%"
        paddingBlock={'extra-tight'}
        paddingInline={{
          mobileSm: 'base',
          tablet: 'loose',
          laptop: 'jumbo'
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export type AppBarType = React.ReactNode | React.ReactElement;

export interface AppBarProps {
  logo?: LogoProps;
  url?: string;
}

const AppBar = ({ url, logo }: AppBarProps): AppBarType => {
  const { isMenuOpen, toggleMenu, disableAppBarVisibility } = useMobileMenu();
  return (
    <AppBarTray
      className={`${styles.appBarTray}`}
      disableScrollVisibility={disableAppBarVisibility}
    >
      <header id={`appBar`} className={`appBar ${styles.appBar}`}>
        {logo && (
          <Logo
            title={logo.title ? logo.title : `${APP_NAME}`}
            gravatar={logo.gravatar ? logo.gravatar : false}
            url={url}
          />
        )}
        <AppNavigation
          setOpen={toggleMenu}
          open={isMenuOpen}
          links={[
            {
              label: 'About',
              path: '/about'
            },
            {
              label: 'Portfolio',
              path: '/portfolio'
            },
            {
              label: 'Contact',
              path: '/contact'
            }
          ]}
        />
      </header>
    </AppBarTray>
  );
};

export default AppBar;
