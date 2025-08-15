import type { StorybookConfig } from '@storybook/nextjs';
import remarkGfm from 'remark-gfm';
import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-docs')
    // getAbsolutePath('@storybook/preset-scss')
    // getAbsolutePath('storybook-css-modules')
    // {
    //   name: '@storybook/addon-docs',
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         remarkPlugins: [remarkGfm]
    //       }
    //     }
    //   }
    // }
  ],
  docs: {
    defaultName: 'Overview'
  },
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {}
  },
  staticDirs: ['../public'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
