import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Logo from '../ui/components/Logo';
import Page from '../ui/components/Page';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Logo ⭐️',
  component: Logo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    gravatar: { control: 'boolean' }
  }
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animation={false}>
        <Box>
          <Logo {...args} />
        </Box>
      </Page>
    );
  }
};

export const Gravatar: Story = {
  ...Template,
  args: {
    title: 'Hello world',
    size: 'large'
  }
};

export const MadeInCalifornia: Story = {
  ...Template,
  args: {
    gravatar: false,
    flag: 'ca',
    title: 'Made in California',
    size: 'large'
  }
};

export const BasedInBrooklyn: Story = {
  ...Template,
  args: {
    gravatar: false,
    flag: 'ny',
    title: 'Based in Brooklyn',
    size: 'large'
  }
};

export const BasedInSeattle: Story = {
  ...Template,
  args: {
    gravatar: false,
    flag: 'seattle',
    title: 'Based in Seattle',
    size: 'large'
  }
};
