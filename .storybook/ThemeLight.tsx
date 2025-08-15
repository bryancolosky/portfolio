import { create } from 'storybook/theming';
import { HEXCODES } from '../ui/colors';

export default create({
  base: 'light',
  // Typography
  fontBase: 'Inter, sans-serif',
  fontCode: 'monospace',

  brandTitle: '📚 Storybook | Bryan Colosky',
  brandUrl: '',
  // brandImage: './profile.jpg',
  brandTarget: '_self',

  //
  colorPrimary: `${HEXCODES.maroon}`,
  colorSecondary: `${HEXCODES.blue}`,

  // // UI
  appBg: `${HEXCODES.white}`,
  appContentBg: `${HEXCODES.white}`,
  // appPreviewBg: '#ffffff',
  // appBorderColor: '#585C6D',
  // appBorderRadius: 4,

  // // Text colors
  textColor: `${HEXCODES.navy}`
  // textInverseColor: '#ffffff',

  // // Toolbar default and active colors
  // barTextColor: '#9E9E9E',
  // barSelectedColor: '#585C6D',
  // barHoverColor: '#585C6D',
  // barBg: '#ffffff',

  // // Form colors
  // inputBg: '#ffffff',
  // inputBorder: '#10162F',
  // inputTextColor: '#10162F',
  // inputBorderRadius: 2
});
