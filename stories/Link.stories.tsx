import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Link from '../ui/components/Link';
import Page from '../ui/components/Page';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Pressables 🛎 / Link 🔗',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'Components 🔋', 'Pressables 🛎'],
  argTypes: {
    external: { control: 'boolean' }
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return <Link {...args} />;
  }
};

export const Default: Story = {
  ...Template,
  args: {
    children: 'Default Link'
  }
};

export const Primary: Story = {
  ...Template,
  args: {
    primary: true,
    children: 'Primary Link'
  }
};

export const Monochrome: Story = {
  ...Template,
  args: {
    external: true,
    monochrome: true,
    children: 'Monochrome Link'
  }
};
