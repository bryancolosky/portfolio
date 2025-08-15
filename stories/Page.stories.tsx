import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Media from '../ui/components/Media';
import Box from '../ui/components/Box';
import Page from '../ui/components/Page';
import Button from '../ui/components/Button';
import ButtonGroup from '../ui/components/ButtonGroup';
import FullFrame from '../ui/components/FullFrame';
import Text from '../ui/components/Typography';
import Link from '../ui/components/Link';
import Post from '../ui/components/Post';
import Map from '../ui/components/Map';

const meta = {
  title: 'Patterns 🕹 / Page 📄',
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
        <Page.Cover
          greeting={'Greetings out there.'}
          description={'Made in California. Based in Brooklyn.'}
        >
          <Text variant="lead" element="p">
            Check out my{' '}
            <Link url="/" primary>
              portfolio 🎨
            </Link>
          </Text>
          <ButtonGroup gap="tight">
            <Button variant="secondary">View my resume 💼</Button>
            <Button variant="tertiary">Contact me 📪</Button>
          </ButtonGroup>
        </Page.Cover>
        <FullFrame>
          <Box width="100%">
            <Text element="h2" variant="headline-4">
              Featured Work
            </Text>
            <Text variant="body" element="p">
              See my full{' '}
              <Link url="/" monochrome>
                portfolio 🎨
              </Link>
            </Text>
            <Post id={meta.title}>
              <Post.Preview
                id={meta.title}
                title={'Indigo post title'}
                emoji={' 🔮'}
                decoration={7}
                fill="indigo"
                coverImage={'./poster.jpg'}
                date={'1989-05-13T01:00:00Z'}
                overview={'Post overview and description'}
                slug={'page'}
              />
            </Post>
          </Box>
        </FullFrame>
        <Box width="100%">
          <Text element="h2" variant="headline-4">
            Photography & travel
          </Text>
          <Map id={'brooklyn'} />
          <Text variant="body" element="p">
            See all{' '}
            <Link url="/" monochrome>
              destinations ✈️
            </Link>
          </Text>
        </Box>
        <FullFrame>
          <Box width="100%">
            <Text element="h2" variant="headline-4">
              Get in touch
            </Text>
            <Text variant="body" element="p">
              View my professional <Link url="/">experience 👔</Link>
            </Text>
            <Media
              id={'page'}
              caption={'page'}
              fill={'teal'}
              decoration={3}
              clipShape={'landscape'}
              viewBox={'0 0 1000 500'}
              source={
                'https://2.gravatar.com/userimage/91447980/019959a534bd8ba1336491506f7fdb40?size=1200'
              }
            />
          </Box>
        </FullFrame>
      </Page>
    );
  }
};

export const BaseTemplate: Story = {
  ...Template,
  name: '↪ Template',
  args: { animate: true }
};
