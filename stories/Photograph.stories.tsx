import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Media from '../ui/components/Media';
import Box from '../ui/components/Box';
import Page from '../ui/components/Page';
import PostCover from '../ui/components/Post/elements/CoverSheet';
import Button from '../ui/components/Button';
import ButtonGroup from '../ui/components/ButtonGroup';
import FullFrame from '../ui/components/FullFrame';
import Text from '../ui/components/Typography';
import Link from '../ui/components/Link';
import Map from '../ui/components/Map';
import Photograph from '../ui/components/Photograph';

const meta = {
  title: 'Patterns 🕹 / Page 📄 / Photograph 📷',
  component: Page,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page {...args}>
        {/* <Photograph.CoverSheet
          id="photoStory"
          title={'Indigo photo title'}
          emoji={' 🔮'}
          decoration={7}
          fill="indigo"
          date={'1989-05-13T01:00:00Z'}
          overview={'Post overview and description'}
          slug={'page'}
          coverImage="./poster.jpg"
        /> */}
        <Photograph id="photoStory" />
      </Page>
    );
  }
};

export const PostTemplate: Story = {
  ...Template,
  name: '↪ Template',
  args: { animation: true }
};
