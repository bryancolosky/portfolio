'use client';

// 🔌 Vendors
import React, { forwardRef, memo } from 'react';

// 🔩 Components
import { LinkComponentProps, useLink } from '@/ui/components/Link';

// 🎨 Styles
import styles from './UnstyledLink.module.scss';

export interface UnstyledLinkProps extends LinkComponentProps {}

export const unstyled = {
  props: { 'data-unstyled': true },
  selector: '[data-unstyled]'
};

export const UnstyledLink = memo(
  forwardRef<any, UnstyledLinkProps>(function UnstyledLink(props, _ref) {
    const LinkComponent = useLink();
    if (LinkComponent) {
      return <LinkComponent {...unstyled.props} {...props} ref={_ref} />;
    }

    const { external, url, target: targetProp, ...rest } = props;

    let target;

    if (external) {
      target = '_blank';
    } else {
      target = targetProp ?? undefined;
    }

    const rel = target === '_blank' ? 'noopener noreferrer' : undefined;

    return (
      <a
        className={`${styles.unstyledLink}`}
        target={target}
        {...rest}
        tabIndex={props.tabIndex}
        href={url}
        rel={rel}
        {...unstyled.props}
        ref={_ref}
      />
    );
  })
);

export default UnstyledLink;
