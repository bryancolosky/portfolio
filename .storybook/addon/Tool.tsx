import * as React from 'react';
import { global } from '@storybook/global';
import { themes, ThemeVars } from 'storybook/theming';
import { IconButton } from 'storybook/internal/components';
import { MoonIcon, SunIcon } from '@storybook/icons';
import {
  STORY_CHANGED,
  SET_STORIES,
  DOCS_RENDERED
} from 'storybook/internal/core-events';
import { API, useParameter } from 'storybook/manager-api';
import equal from 'fast-deep-equal';
import {
  DARK_MODE_EVENT_NAME,
  UPDATE_DARK_MODE_EVENT_NAME
} from '../constants';

const { document, window } = global as { document: Document; window: Window };
const modes = ['light', 'dark'] as const;
type Mode = (typeof modes)[number];

interface ModeStore {
  classTarget: string;
  current: Mode;
  dark: ThemeVars;
  darkClass: string | string[];
  light: ThemeVars;
  lightClass: string | string[];
  stylePreview: boolean;
  userHasExplicitlySetTheTheme: boolean;
}

const STORAGE_KEY = 'sb-addon-mode';
export const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)');

const defaultParams: Required<Omit<ModeStore, 'current'>> = {
  classTarget: 'body',
  dark: themes.dark,
  darkClass: ['dark'],
  light: themes.light,
  lightClass: ['light'],
  stylePreview: false,
  userHasExplicitlySetTheTheme: false
};

export const updateStore = (newStore: ModeStore) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore));
};

const toggleDarkClass = (
  el: Element,
  {
    current,
    darkClass = defaultParams.darkClass,
    lightClass = defaultParams.lightClass
  }: ModeStore
) => {
  if (current === 'dark') {
    el.classList.remove(...arrayify(lightClass));
    el.classList.add(...arrayify(darkClass));
  } else {
    el.classList.remove(...arrayify(darkClass));
    el.classList.add(...arrayify(lightClass));
  }
};

const arrayify = (classes: string | string[]): string[] => {
  const arr: string[] = [];
  return arr.concat(classes).map((item) => item);
};

const updatePreview = (store: ModeStore) => {
  const iframe = document.getElementById(
    'storybook-preview-iframe'
  ) as HTMLIFrameElement;

  if (!iframe) {
    return;
  }

  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow?.document;
  const target = iframeDocument?.querySelector<HTMLElement>(store.classTarget);

  if (!target) {
    return;
  }

  toggleDarkClass(target, store);
};

const updateManager = (store: ModeStore) => {
  const manager = document.querySelector(store.classTarget);

  if (!manager) {
    return;
  }

  toggleDarkClass(manager, store);
};

export const store = (userTheme: Partial<ModeStore> = {}): ModeStore => {
  const storedItem = window.localStorage.getItem(STORAGE_KEY);

  if (typeof storedItem === 'string') {
    const stored = JSON.parse(storedItem) as ModeStore;

    if (userTheme) {
      if (userTheme.dark && !equal(stored.dark, userTheme.dark)) {
        stored.dark = userTheme.dark;
        updateStore(stored);
      }

      if (userTheme.light && !equal(stored.light, userTheme.light)) {
        stored.light = userTheme.light;
        updateStore(stored);
      }
    }

    return stored;
  }

  return { ...defaultParams, ...userTheme } as ModeStore;
};

updateManager(store());

interface DarkModeProps {
  api: API;
}

export function DarkMode({ api }: DarkModeProps) {
  const [isDark, setDark] = React.useState(prefersDark.matches);
  const darkModeParams = useParameter<Partial<ModeStore>>('darkMode', {});
  const { current: defaultMode, stylePreview, ...params } = darkModeParams;
  const channel = api.getChannel();
  const userHasExplicitlySetTheTheme = React.useMemo(
    () => store(params).userHasExplicitlySetTheTheme,
    [params]
  );
  const setMode = React.useCallback(
    (mode: Mode) => {
      const currentStore = store();
      api.setOptions({ theme: currentStore[mode] });
      setDark(mode === 'dark');
      api.getChannel()?.emit(DARK_MODE_EVENT_NAME, mode === 'dark');
      updateManager(currentStore);
      if (stylePreview) {
        updatePreview(currentStore);
      }
    },
    [api, stylePreview]
  );

  const updateMode = React.useCallback(
    (mode?: Mode) => {
      const currentStore = store();
      const current =
        mode || (currentStore.current === 'dark' ? 'light' : 'dark');
      updateStore({ ...currentStore, current });
      setMode(current);
    },
    [setMode]
  );

  function prefersDarkUpdate(event: MediaQueryListEvent) {
    if (userHasExplicitlySetTheTheme || defaultMode) {
      return;
    }

    updateMode(event.matches ? 'dark' : 'light');
  }

  const renderTheme = React.useCallback(() => {
    const { current = 'light' } = store();
    setMode(current);
  }, [setMode]);

  const handleIconClick = () => {
    updateMode();
    const currentStore = store();
    updateStore({ ...currentStore, userHasExplicitlySetTheTheme: true });
  };

  React.useEffect(() => {
    const currentStore = store();
    updateStore({
      ...currentStore,
      ...darkModeParams,
      current: currentStore.current || darkModeParams.current
    });
    renderTheme();
  }, [darkModeParams, renderTheme]);
  React.useEffect(() => {
    channel?.on(STORY_CHANGED, renderTheme);
    channel?.on(SET_STORIES, renderTheme);
    channel?.on(DOCS_RENDERED, renderTheme);
    prefersDark.addListener(prefersDarkUpdate);
    return () => {
      channel?.removeListener(STORY_CHANGED, renderTheme);
      channel?.removeListener(SET_STORIES, renderTheme);
      channel?.removeListener(DOCS_RENDERED, renderTheme);
      prefersDark.removeListener(prefersDarkUpdate);
    };
  });
  React.useEffect(() => {
    channel?.on(UPDATE_DARK_MODE_EVENT_NAME, updateMode);
    return () => {
      channel?.removeListener(UPDATE_DARK_MODE_EVENT_NAME, updateMode);
    };
  });
  React.useEffect(() => {
    if (userHasExplicitlySetTheTheme) {
      return;
    }

    if (defaultMode) {
      updateMode(defaultMode);
    } else if (prefersDark.matches) {
      updateMode('dark');
    }
  }, [defaultMode, updateMode, userHasExplicitlySetTheTheme]);
  return (
    <IconButton
      key="dark-mode"
      title={
        isDark ? 'Change theme to light mode' : 'Change theme to dark mode'
      }
      onClick={handleIconClick}
    >
      {isDark ? (
        <SunIcon aria-hidden="true" />
      ) : (
        <MoonIcon aria-hidden="true" />
      )}
    </IconButton>
  );
}

export default DarkMode;
