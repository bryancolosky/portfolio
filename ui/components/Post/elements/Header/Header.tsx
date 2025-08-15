// 🔌 Vendors
import React from 'react';

// 🔩 Components
import PostMeta from '../Meta';
import PostTitle from '../Title';

// 🎨 Styles
import styles from './Header.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type HeaderType = React.ReactNode | React.ReactElement;

export interface HeaderProps {
  slug?: string;
  title?: string;
  date?: string;
  emoji?: string;
  linked?: boolean;
}

const Header = ({ ...props }: HeaderProps): HeaderType => {
  const className = classNames(props.title && styles.header);

  return (
    <header className={className}>
      <PostMeta date={props.date} slug={props.slug} />
      <PostTitle
        title={props.title}
        emoji={props.emoji}
        slug={props.slug}
        linked={props.linked}
      />
    </header>
  );
};

export default Header;
