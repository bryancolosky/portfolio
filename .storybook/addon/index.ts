import { addons, useState, useEffect } from 'storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from '../constants';
import { store } from './Tool';

export function useDarkMode(): boolean {
  const [isDark, setIsDark] = useState(store().current === 'dark');

  useEffect(() => {
    const channel = addons.getChannel();
    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
  }, []);

  return isDark;
}

export * from '../constants';
