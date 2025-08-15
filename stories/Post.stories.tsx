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
import PostPreview from '../ui/components/Post/elements/Preview';
import Map from '../ui/components/Map';
import Post from '../ui/components/Post';

const meta = {
  title: 'Patterns 🕹 / Page 📄 / Post 📰',
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
        <Post.CoverSheet
          id="postStory"
          title={'Indigo post title'}
          emoji={' 🔮'}
          decoration={7}
          fill="indigo"
          date={'1989-05-13T01:00:00Z'}
          overview={'Post overview and description'}
          slug={'page'}
          coverImage="./poster.jpg"
        />
        <Box width="100%">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignContent: 'center'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr'
              }}
            >
              <Text variant="micro" element="p">
                Sizes
              </Text>
              <Text variant="headline-3" element="span">
                📱 💻 🖥
              </Text>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr'
              }}
            >
              <Text variant="micro" element="p">
                Timelines
              </Text>
              <Text variant="headline-3" element="span">
                ⌛️ ⏲ 🗓
              </Text>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr'
              }}
            >
              <Text variant="micro" element="p">
                Platforms
              </Text>
              <Text variant="headline-3" element="span">
                🌐 💠 🔌
              </Text>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateRows: '1fr 1fr'
              }}
            >
              <Text variant="micro" element="p">
                Outcomes
              </Text>
              <Text variant="headline-3" element="span">
                📈 🏆 ✅
              </Text>
            </div>
          </div>
        </Box>
        <Box width="100%">
          <Text variant="headline-2" element="h2">
            Overview 📒
          </Text>
          <Text variant="lead" element="p">
            {`Post overview and description`}
          </Text>
          <Text variant="body" element="p">
            Visit the project{' '}
            <Link url="" monochrome>
              website 💈
            </Link>
          </Text>
          <ButtonGroup gap="tight">
            <Button variant="primary" size="micro">
              Share 🔗
            </Button>
            <Button variant="secondary" size="micro">
              PDF 📎
            </Button>
          </ButtonGroup>
          <hr />
        </Box>
        <Box>
          <Text variant="headline-3" element="h3">
            Challenge 🏔
          </Text>
          <Text
            variant="lead"
            element="p"
          >{`Post challenge multiline text`}</Text>
        </Box>
        <Box>
          <Text variant="headline-3" element="h3">
            Solution 💡
          </Text>
          <Text
            variant="lead"
            element="p"
          >{`Post solution multiline text`}</Text>
        </Box>
        <FullFrame>
          <Box width="100%">
            <Text variant="headline-4" element="h4">
              Indigo post title 🔮
            </Text>
            <ButtonGroup gap="tight">
              <Button variant="primary" size="micro">
                Share 🔗
              </Button>
              <Button variant="secondary" size="micro">
                PDF 📎
              </Button>
            </ButtonGroup>
            <Media
              id={'page'}
              caption={'page'}
              decoration={7}
              fill="indigo"
              clipShape={'landscape'}
              viewBox={'0 0 1000 500'}
              source={'./poster.jpg'}
            />
            <Text variant="body" element="p">
              View my full{' '}
              <Link url="" monochrome>
                portfolio 🎨
              </Link>
            </Text>
            <hr />
          </Box>
        </FullFrame>
      </Page>
    );
  }
};

export const PostTemplate: Story = {
  ...Template,
  name: '↪ Template',
  args: { animate: true }
};
