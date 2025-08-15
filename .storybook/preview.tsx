// 🔌 Vendors
import React, { Fragment, useEffect, useState } from 'react';
import { Permanent_Marker, Inter } from 'next/font/google';
import { MDXProvider } from '@mdx-js/react';
import { addons } from 'storybook/preview-api';
import { DocsContainer, getStoryId } from '@storybook/addon-docs';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
  Story,
  Unstyled
} from '@storybook/addon-docs/blocks';
import type { Preview } from '@storybook/react';

// 🔩 Components
import AppAppearance, {
  getAppAppearance,
  useAppAppearance
} from '../ui/components/AppAppearance';
import AppProvider from '../ui/components/AppProvider';
import AppFrame from '../ui/components/AppFrame';
import Text, { typeSettings } from '../ui/components/Typography';
import { APP_NAME } from '../lib/constants';

// 🎨 Styles
import { DARK_MODE_EVENT_NAME, UPDATE_DARK_MODE_EVENT_NAME } from './constants';

import { useDarkMode } from './addon';
import ThemeLight from './ThemeLight';
import ThemeDark from './ThemeDark';
import '../ui/styles/index.css';

const Themes = {
  light: {
    ...ThemeLight
  },
  dark: {
    ...ThemeDark
  }
};

const StorybookGlobal = ({ children, inApp, mode }) => {
  const { appearance, setAppAppearance } = useAppAppearance();
  const channel = addons.getChannel();

  useEffect(() => {
    document.body.className = `${inter.variable} ${permantMarker.variable}`;
    channel.on(DARK_MODE_EVENT_NAME, setAppAppearance);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setAppAppearance);
  }, [channel, setAppAppearance]);
  return (
    <AppAppearance forcedAppAppearance={mode}>
      <AppProvider curtain={false}>
        <AppFrame
          key={getStoryId.name}
          appBar={
            inApp ? { logo: { title: `${APP_NAME}`, gravatar: false } } : false
          }
          appFooter={inApp ? { title: `${APP_NAME}` } : false}
        >
          {children}
        </AppFrame>
      </AppProvider>
    </AppAppearance>
  );
};

const DocsProvider = ({ children, context }) => {
  const { appearance, setAppAppearance } = useAppAppearance();
  const [mounted, setMounted] = useState(false);
  const channel = addons.getChannel();

  const onChangeHandler = (e) => {
    channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
    setAppAppearance(e.target.value);
  };

  useEffect(() => setMounted(true), []);

  return (
    <StorybookGlobal inApp={true} mode={appearance}>
      <DocsContainer context={context}>
        <div>
          <code>Docs container</code>
        </div>
        <p>
          <select
            id="sb-mode-select"
            value={appearance}
            onChange={onChangeHandler}
            data-test-id="sb-mode-selector"
          >
            <option value="system">⚙️ System</option>
            {mounted && (
              <>
                <option value="dark">🌑 Night</option>
                <option value="light">🌕 Day</option>
              </>
            )}
          </select>
        </p>
        {children}
      </DocsContainer>
    </StorybookGlobal>
  );
};

export const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const permantMarker = Permanent_Marker({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap'
});

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    globalTypes: {
      theme: {
        description: 'Global theme for components',
        toolbar: {
          title: 'Theme',
          icon: 'circlehollow',
          items: ['light', 'dark'],
          dynamicTitle: true
        }
      }
    },
    globals: {
      theme: 'light'
    },
    initialGlobals: {
      theme: 'light'
    },
    darkMode: {
      current: 'light',
      stylePreview: true,
      dark: { ...Themes.dark },
      light: { ...Themes.light }
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'Table of Contents',
        disable: false
      },
      page: () => {
        return (
          <Fragment>
            <div>
              <code>Docs page</code>
            </div>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </Fragment>
        );
      },
      container: ({ children, context }) => {
        return <DocsProvider context={context}>{children}</DocsProvider>;
      },
      components: {
        h1: typeSettings.h1,
        h2: typeSettings.h2,
        h3: typeSettings.h3,
        h4: typeSettings.h4,
        h5: typeSettings.h5,
        h6: typeSettings.h6,
        pre: typeSettings.pre,
        p: typeSettings.p
      }
    },
    options: {
      storySort: {
        order: [
          'Foundations ⚡️',
          [
            'Readme 📒',
            'Colors 🌈',
            ['Monotones', 'Palettes', 'Themes'],
            'Typography 🖋',
            ['Type Settings', 'HTML Markdown']
          ],
          'Components 🔋',
          [
            'Text ✏️',
            'Icons 🧩',
            ['Iconography', 'Directional', 'Vendors'],
            'Layouts 🏗',
            'Logo ⭐️',
            'Gravatar 👤',
            'Pressables 🛎'
          ]
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      return (
        <StorybookGlobal inApp={false} mode={Story[context.globals.theme]}>
          <Story key={Story.name} />
        </StorybookGlobal>
      );
    }
  ]
};

export default preview;
