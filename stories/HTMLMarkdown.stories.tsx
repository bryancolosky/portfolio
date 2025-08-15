import type { Meta, StoryObj } from '@storybook/nextjs';

import Markdown from '../ui/components/Typography/markdown.mdx';
import Box from '../ui/components/Box';
import FullFrame from '../ui/components/FullFrame';
import Page from '../ui/components/Page';

const meta = {
  title: 'Foundations ⚡️ / Typography 🖋 /HTML  Markdown',
  component: Markdown,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page>
        <Markdown {...args} />
      </Page>
    );
  }
};

export const MarkdownHTML: Story = {
  ...Template,
  args: {}
};
