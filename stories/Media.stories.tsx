import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Media from '../ui/components/Media';
import Box from '../ui/components/Box';
import Page from '../ui/components/Page';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Media 🖼',
  component: Media,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animate={false}>
        <Box width="100%">
          <Media {...args} />
        </Box>
      </Page>
    );
  }
};

export const Landscape: Story = {
  ...Template,
  args: {
    id: 'nikon',
    caption: 'Nikon',
    fill: 'green',
    decoration: 1,
    clipShape: 'landscape',
    viewBox: '0 0 1000 500',
    source:
      'https://2.gravatar.com/userimage/91447980/019959a534bd8ba1336491506f7fdb40?size=1200'
  }
};

export const Circle: Story = {
  ...Template,
  args: {
    id: 'nikon',
    caption: 'Nikon',
    fill: 'yellow',
    decoration: 7,
    clipShape: 'circle',
    viewBox: '0 0 500 500',
    source:
      'https://2.gravatar.com/userimage/91447980/8f65c1ac34fb62d7c8c2e22dbbc26134?size=1200'
  }
};

export const Portrait: Story = {
  ...Template,
  args: {
    id: 'nikon',
    caption: 'Nikon',
    fill: 'green',
    decoration: 4,
    clipShape: 'portrait',
    viewBox: '0 0 500 500',
    source:
      'https://2.gravatar.com/userimage/91447980/2a66610c1f2ce32f152ccea57b8d07b6?size=1200'
  }
};
