import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Text from '../ui/components/Typography';
import Page from '../ui/components/Page';
import Box from '../ui/components/Box';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Text ✏️ ',
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

export const SanSerif: Story = {
  ...Template,
  args: {
    element: 'p',
    variant: 'body'
  }
};

export const Display: Story = {
  ...Template,
  args: {
    element: 'h1',
    variant: 'headline-3'
  }
};
