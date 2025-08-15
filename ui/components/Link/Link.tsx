'use client';

// 🔌 Vendors
import React, { createContext, useContext } from 'react';

// 🔩 Components
import UnstyledLink from './elements';

// 🎨 Styles
import styles from './Link.module.scss';

// 🤖 Configs
import { classNames, Target } from '@/ui/utils';

export interface LinkComponentProps extends React.HTMLProps<HTMLAnchorElement> {
  url?: string;
  as?: string;
  children?: React.ReactNode;
  external?: boolean;
  target?: Target;
  tabIndex?: number;
  download?: string | boolean;
  [key: string]: any;
}

export type LinkComponent = React.ComponentType<LinkComponentProps>;

export interface LinkProps {
  id?: string;
  url?: string;
  as?: string;
  children?: React.ReactNode;
  external?: boolean;
  target?: Target;
  monochrome?: boolean;
  primary?: boolean;
  onClick?(): void;
  tabIndex?: number;
  accessibilityLabel?: string;
  dataPrimaryLink?: boolean;
}

export const BannerContext = createContext(false);

export const LinkContext = createContext<LinkComponent | undefined>(undefined);

export const Link = ({
  url,
  as,
  children,
  onClick,
  external,
  target,
  id,
  monochrome,
  primary,
  tabIndex,
  accessibilityLabel,
  dataPrimaryLink
}: LinkProps & { UnstyledLink?: typeof UnstyledLink }) => {
  return (
    <BannerContext.Consumer>
      {(LinkContext) => {
        const shouldBeMonochrome = monochrome || LinkContext;

        const className = classNames(
          styles.link,
          shouldBeMonochrome && styles.monochrome,
          primary && styles.primary
        );

        return url ? (
          <UnstyledLink
            onClick={onClick}
            className={className}
            tabIndex={tabIndex}
            url={url}
            as={as}
            external={external}
            target={target}
            id={id}
            aria-label={accessibilityLabel}
            data-primary-link={dataPrimaryLink}
          >
            {children}
          </UnstyledLink>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className={className}
            id={id}
            tabIndex={tabIndex}
            aria-label={accessibilityLabel}
            data-primary-link={dataPrimaryLink}
          >
            {children}
          </button>
        );
      }}
    </BannerContext.Consumer>
  );
};

export function useLink() {
  return useContext(LinkContext);
}

Link.Unstyled = UnstyledLink;

export default Link;
