import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Icon from '../ui/components/Icon';
import {
  LogoGitHubIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoXIcon
} from '../ui/components/Icon/Icons';
import Page from '../ui/components/Page';

const Vendors = {
  LogoGitHubIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoXIcon
};

const meta = {
  title: 'Components 🔋 / Icons 🧩 / Vendors',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'Components 🔋', 'Icons 🧩'],
  argTypes: {
    source: {
      options: Object.keys(Vendors),
      mapping: Vendors,
      control: {
        type: 'select',
        labels: {
          LogoGitHubIcon: 'GitHub',
          LogoInstagramIcon: 'Instagram',
          LogoLinkedInIcon: 'LinkedIn',
          LogoXIcon: 'X (formerly Twitter)'
        }
      }
    }
  },
  args: {
    size: 'large',
    source: LogoGitHubIcon
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return <Icon {...args} />;
  }
};

export const LogoGitHub: Story = {
  ...Template,
  name: 'GitHub',
  args: {
    source: LogoGitHubIcon
  }
};

export const LogoInstagram: Story = {
  ...Template,
  name: 'Instagram',
  args: {
    source: LogoInstagramIcon
  }
};

export const LogoLinkedIn: Story = {
  ...Template,
  name: 'LinkedIn',
  args: {
    source: LogoLinkedInIcon
  }
};

export const LogoX: Story = {
  ...Template,
  name: 'X (formerly Twitter)',
  args: {
    source: LogoXIcon
  }
};
