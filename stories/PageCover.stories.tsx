import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Text from '../ui/components/Typography';
import Link from '../ui/components/Link';
import Page from '../ui/components/Page';
import FullFrame from '../ui/components/FullFrame';
import Button from '../ui/components/Button';
import ButtonGroup from '../ui/components/ButtonGroup';

const meta = {
  title: 'Patterns 🕹 / Page 📄 / Cover 🌄',
  component: Page.Cover,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Page.Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animate={true}>
        <Page.Cover {...args}>
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
      </Page>
    );
  }
};

export const Greeting: Story = {
  ...Template,
  args: {
    greeting: 'Greetings there',
    description: 'Made in California.'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/mUbAaaCdz83XQe0D1dVN5p/%F0%9F%92%BC-Portfolio?type=design&node-id=63-663&mode=design&t=bG2l9g5rfPgkpIfY-11'
    }
  }
};
