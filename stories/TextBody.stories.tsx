import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Text from '../ui/components/Typography';
import Page from '../ui/components/Page';
import Box from '../ui/components/Box';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Text ✏️ / Body ✍️',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      title: 'Text',
      subtitle: 'Subtitle',
      description: {
        component: 'A text element is used to display text'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  args: {
    element: 'span'
  },
  render: ({ ...args }) => {
    return <Text {...args}>Lorem ipsum dolor sil amen ...</Text>;
  }
};

export const Body: Story = {
  ...Template,
  args: {
    element: 'span',
    variant: 'body'
  }
};

export const Lead: Story = {
  ...Template,
  args: {
    element: 'span',
    variant: 'lead'
  }
};

export const Caption: Story = {
  ...Template,
  args: {
    element: 'span',
    variant: 'caption'
  }
};

export const Fine: Story = {
  ...Template,
  args: {
    element: 'span',
    variant: 'fine'
  }
};

export const Micro: Story = {
  ...Template,
  args: {
    element: 'span',
    variant: 'micro'
  }
};
