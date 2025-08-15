'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';
import Icon from '@/ui/components/Icon';
import Link from '@/ui/components/Link';
import Button from '@/ui/components/Button';
import {
  LogoGitHubIcon,
  LogoFigmaIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoUnsplashIcon,
  LogoXIcon
} from '@/ui/components/Icon/Icons';

// 🎨 Styles
import styles from './AppFooter.module.scss';

// 🤖 Configs
import { APP_NAME } from '@/lib/constants';
import Box from '../Box';

export type AppFooterType = React.ReactElement;

export interface AppFooterProps {
  title?: string | string[];
}
export const AppFooter = ({ title = `${APP_NAME}` }: AppFooterProps) => {
  return (
    <footer className={`appFooter ${styles.appFooter}`}>
      <Box
        width="100%"
        as="footer"
        paddingBlock={'jumbo'}
        paddingInline={{
          mobileSm: 'base',
          tablet: 'loose',
          laptop: 'jumbo'
        }}
      >
        <ul className={`${styles.appFooterLinks}`}>
          <li>
            <Link external url="/">
              LinkedIn
              <Icon source={LogoLinkedInIcon} size="medium" />
            </Link>
          </li>
          <li>
            <Link external url="/">
              Unsplash
              <Icon source={LogoUnsplashIcon} size="medium" />
            </Link>
          </li>
          <li>
            <Link external url="/">
              Figma
              <Icon source={LogoFigmaIcon} size="medium" />
            </Link>
          </li>
          <li>
            <Link external url="/">
              GitHub
              <Icon source={LogoGitHubIcon} size="medium" />
            </Link>
          </li>
          <li>
            <Link external url="/">
              Twitter
              <Icon source={LogoXIcon} size="medium" />
            </Link>
          </li>
          <li>
            <Link external url="/">
              Instagram
              <Icon source={LogoInstagramIcon} size="medium" />
            </Link>
          </li>
        </ul>
        <ul className={`${styles.appFooterLinks}`}>
          <li>
            <Button variant="secondary" size="micro" tone="success">
              Send a message ✉️
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="micro" tone="critical">
              Hire me 💼
            </Button>
          </li>
        </ul>
        <Text variant="fine" element="p" fontWeight="bold" color="subdued">
          Imprint
        </Text>
        <Text variant="fine" element="p" color="subdued">
          Designed in{' '}
          <Link monochrome external url="https://www.figma.com/@bryancolosky">
            Figma 🎨
          </Link>{' '}
          & built with{' '}
          <Link
            monochrome
            external
            url="https://master--62c60219981635a89ff4b573.chromatic.com"
          >
            Storybook 📚
          </Link>
          . Developed using{' '}
          <Link monochrome external url="">
            React ⚛️
          </Link>{' '}
          & hosted on{' '}
          <Link monochrome external url="">
            Vercel 🛰
          </Link>
          .
        </Text>
        <Text variant="fine" element="p" color="subdued">
          Made with love ❤️ & fueled by coffee ☕️.
        </Text>
        <ul className={`${styles.appFooterLinks}`}>
          <li>
            <Link monochrome url="">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link monochrome url="">
              Terms of Use
            </Link>
          </li>
        </ul>
        <Text variant="micro" element="p">
          Copyright © {new Date().getFullYear()} |{' '}
          {title !== APP_NAME ? title : `${APP_NAME}`}
        </Text>
      </Box>
    </footer>
  );
};

export default AppFooter;
