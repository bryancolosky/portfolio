import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Page from '../ui/components/Page';
import Post from '../ui/components/Post';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Patterns 🕹 / Page 📄 / Post 📰 / Cover 🌄 ',
  component: Post.CoverSheet,
  parameters: {
    layout: 'centered'
  },
  args: {
    id: 'templateStory',
    title: 'Post title',
    date: '1989-05-13T01:00:00Z',
    overview: 'Post overview and description',
    emoji: ' 📱',
    fill: 'black',
    decoration: 7,
    author: { name: 'Bryan', picture: '' },
    slug: 'post',
    coverImage: './poster.jpg'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Post.CoverSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animation={false}>
        <Post.CoverSheet {...args} />
      </Page>
    );
  }
};

export const IndigoHero: Story = {
  ...Template,
  args: {
    id: 'indigo',
    title: 'Indigo post title',
    emoji: ' 🔮',
    decoration: 7,
    fill: 'indigo'
  }
};

export const RedHero: Story = {
  ...Template,
  args: {
    id: 'red',
    title: 'Red post title',
    fill: 'red',
    emoji: ' ⛩',
    decoration: 11
  }
};

export const VioletHero: Story = {
  ...Template,
  args: {
    id: 'violet',
    title: 'Violet post title',
    fill: 'violet',
    emoji: ' 🍾',
    decoration: 1
  }
};

export const BlueHero: Story = {
  ...Template,
  args: {
    id: 'blue',
    title: 'Blue post title',
    fill: 'blue',
    emoji: ' 🌊',
    decoration: 8
  }
};

export const GreenHero: Story = {
  ...Template,
  args: {
    id: 'green',
    title: 'Green post title',
    fill: 'green',
    emoji: ' 🌵',
    decoration: 3
  }
};

export const YellowHero: Story = {
  ...Template,
  args: {
    id: 'yellow',
    title: 'Yellow post title',
    fill: 'yellow',
    emoji: ' 👑',
    decoration: 9
  }
};

export const OrangeHero: Story = {
  ...Template,
  args: {
    id: 'orange',
    title: 'Orange post title',
    fill: 'orange',
    emoji: ' ⛺️',
    decoration: 2
  }
};

export const BlackHero: Story = {
  ...Template,
  args: {
    id: 'black',
    title: 'Black post title',
    fill: 'black',
    emoji: ' 🏴‍☠️',
    decoration: 12
  }
};

export const WhiteHero: Story = {
  ...Template,
  args: {
    id: 'white',
    title: 'White post title',
    fill: 'white',
    emoji: ' 📐',
    decoration: 11
  }
};
