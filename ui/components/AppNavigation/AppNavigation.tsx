'use client';

// 🔌 Vendors
import React, { Fragment, useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import FocusLock from 'react-focus-lock';
import NextLink from 'next/link';

// 🔩 Components
import { useOnClickCanvas } from '@/ui/hooks/useOnClickCanvas';
import { useAppAppearance } from '@/ui/components/AppAppearance';
import Link from '@/ui/components/Link';
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './AppNavigation.module.scss';

type Open = boolean;

export type MenuToggleType = React.ReactElement;

export interface MenuToggleProps extends MenuProps {}

export const MenuToggle = ({
  open,
  setOpen
}: MenuToggleProps): MenuToggleType => {
  const isExpanded = open ? true : false;
  return (
    <button
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      aria-hidden
      onClick={() => setOpen(!open)}
      type={`button`}
      className={`menuToggle ${styles.menuToggle} ${
        open ? `menuToggleOpen ${styles.menuToggleOpen}` : null
      }`}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export type MenuType = React.ReactElement;

export interface MenuProps {
  open?: Open;
  id?: string;
  className?: string;
  links?: Array<Record<string, string>>;
  setOpen: (open: boolean) => void;
}

export const MenuIndex = ({
  open,
  className,
  id,
  links
}: MenuProps): MenuType => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const { appearance, setAppAppearance } = useAppAppearance();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <div className={className}>
      <ul id={id} className={`menuIndex ${styles.menuIndex}`}>
        {links &&
          links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={`${link.label}-${link.path}`}
                className={
                  isActive
                    ? `menuIndexItem ${styles.menuIndexItemActive}`
                    : `menuIndexItem ${styles.menuIndexItem}`
                }
              >
                <Link primary tabIndex={tabIndex} url={link.path}>
                  {link.label}
                </Link>
              </li>
            );
          })}

        <li className={`menuIndexItem ${styles.menuIndexItem}`}>
          <Text element="span" variant="caption" color="subdued">
            <label htmlFor="mode-select">Mode</label>
          </Text>
          <div className={`select ${styles.select}`}>
            <select
              id="mode-select"
              value={appearance}
              onChange={(e) => setAppAppearance(e.target.value)}
              data-test-id="mode-selector"
            >
              <option value="system">⚙️ System</option>
              {mounted && (
                <>
                  <option value="dark">🌑 Night</option>
                  <option value="light">🌕 Day</option>
                </>
              )}
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
};

export type AppNavigationType = React.ReactElement;

export interface AppNavigationProps extends MenuProps {}

export const AppNavigation = ({
  ...props
}: AppNavigationProps): AppNavigationType => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLElement>(null);
  const menuId = 'mainMenu';
  useOnClickCanvas(node, () => setOpen(false));

  return (
    <Fragment>
      <nav
        ref={node}
        id={`navigation ${open}`}
        className={`navigation ${styles.navigation} ${open && `open`}`}
      >
        <FocusLock disabled={!open}>
          <MenuToggle
            {...props}
            open={open}
            setOpen={setOpen}
            aria-controls={menuId}
            aria-hidden
          />
          <MenuIndex
            {...props}
            open={open}
            id={menuId}
            className={`menu ${styles.menu} ${open && `${styles.menuOpen}`}`}
          />
        </FocusLock>
      </nav>
    </Fragment>
  );
};

export default AppNavigation;
