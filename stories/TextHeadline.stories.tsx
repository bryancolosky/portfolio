import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Text from '../ui/components/Typography';
import Page from '../ui/components/Page';
import Box from '../ui/components/Box';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Text ✏️ / Headline 🖊️',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      title: 'Text',
      subtitle: 'Subtitle',
      description: {
        component: 'A heading element is used to display text'
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
    element: 'h1',
    variant: 'headline-1'
  },
  render: ({ ...args }) => {
    return <Text {...args}>Lorem ipsum dolor sil amen ...</Text>;
  }
};

export const Headline1: Story = {
  ...Template,
  args: {
    element: 'h1',
    variant: 'headline-1'
  }
};

export const Headline2: Story = {
  ...Template,
  args: {
    element: 'h2',
    variant: 'headline-2'
  }
};

export const Headline3: Story = {
  ...Template,
  args: {
    element: 'h3',
    variant: 'headline-3'
  }
};

export const Headline4: Story = {
  ...Template,
  args: {
    element: 'h4',
    variant: 'headline-4'
  }
};

export const Headline5: Story = {
  ...Template,
  args: {
    element: 'h5',
    variant: 'headline-5'
  }
};

export const Headline6: Story = {
  ...Template,
  args: {
    element: 'h6',
    variant: 'headline-6'
  }
};
