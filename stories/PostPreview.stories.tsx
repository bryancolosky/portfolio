import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Link from '../ui/components/Link';
import Page from '../ui/components/Page';
import Post from '../ui/components/Post';
import FullFrame from '../ui/components/FullFrame';
import Button from '../ui/components/Button';
import ButtonGroup from '../ui/components/ButtonGroup';

const meta = {
  title: 'Patterns 🕹 / Page 📄 / Post 📰 / Preview 🗞',
  component: Post.Preview,
  parameters: {
    layout: 'centered'
  },
  args: {
    id: 'postPreviewStory',
    variant: 'hero',
    title: 'Post title',
    date: '1989-05-13T01:00:00Z',
    overview: 'Post overview and description',
    emoji: ' 📱',
    fill: 'black',
    decoration: 7,
    coverImage: './poster.jpg',
    author: { name: 'Bryan', picture: '' },
    slug: 'post'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Post.Preview>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animation={false}>
        <Box>
          <Post.Preview {...args} />
        </Box>
      </Page>
    );
  }
};

export const IndigoHero: Story = {
  ...Template,
  args: {
    title: 'Indigo post title',
    emoji: ' 🔮',
    decoration: 7,
    fill: 'indigo'
  }
};

export const RedHero: Story = {
  ...Template,
  args: {
    title: 'Red post title',
    fill: 'red',
    emoji: ' ⛩',
    decoration: 11
  }
};

export const VioletHero: Story = {
  ...Template,
  args: {
    title: 'Violet post title',
    fill: 'violet',
    emoji: ' 🍾',
    decoration: 1
  }
};

export const BlueHero: Story = {
  ...Template,
  args: {
    title: 'Blue post title',
    fill: 'blue',
    emoji: ' 🌊',
    decoration: 8
  }
};

export const TealHero: Story = {
  ...Template,
  args: {
    title: 'Teal post title',
    fill: 'teal',
    emoji: ' 🐳',
    decoration: 5
  }
};

export const GreenHero: Story = {
  ...Template,
  args: {
    title: 'Green post title',
    fill: 'green',
    emoji: ' 🌵',
    decoration: 3
  }
};

export const YellowHero: Story = {
  ...Template,
  args: {
    title: 'Yellow post title',
    fill: 'yellow',
    emoji: ' 👑',
    decoration: 9
  }
};

export const OrangeHero: Story = {
  ...Template,
  args: {
    title: 'Orange post title',
    fill: 'orange',
    emoji: ' ⛺️',
    decoration: 2
  }
};

export const BlackHero: Story = {
  ...Template,
  args: {
    title: 'Black post title',
    fill: 'black',
    emoji: ' 🏴‍☠️',
    decoration: 12
  }
};

export const WhiteHero: Story = {
  ...Template,
  args: {
    title: 'White post title',
    fill: 'white',
    emoji: ' 📐',
    decoration: 11
  }
};

export const Slide: Story = {
  ...Template,
  args: {
    variant: 'slide'
  }
};

export const Snippet: Story = {
  ...Template,
  args: {
    variant: 'snippet'
  }
};
