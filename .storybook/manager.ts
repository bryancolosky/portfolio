// 🔌 Vendors
import * as React from 'react';
import { addons } from 'storybook/manager-api';
import { Addon_TypesEnum } from 'storybook/internal/types';
import type { themes } from 'storybook/theming';

import Tool, { prefersDark, store } from './addon/Tool';

import ThemeLight from './ThemeLight';
import ThemeDark from './ThemeDark';

const Themes = {
  light: {
    ...ThemeLight
  },
  dark: {
    ...ThemeDark
  }
};

const currentStore = store();
const currentTheme =
  currentStore.current || (prefersDark.matches && 'dark') || 'light';

addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: {
    ...Themes[currentTheme],
    ...currentStore[currentTheme]
  },
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other']
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
});

addons.register('./addon/', (api) => {
  addons.add('./addon/', {
    title: 'dark mode',
    type: Addon_TypesEnum.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => React.createElement(Tool, { api })
  });
});
