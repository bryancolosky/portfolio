import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Button from '../ui/components/Button';
import Page from '../ui/components/Page';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  LogoGitHubIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoXIcon
} from '../ui/components/Icon/Icons';
import FullFrame from '../ui/components/FullFrame';
import { title } from 'process';
import { sub } from 'date-fns';

const Icons = {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  LogoGitHubIcon,
  LogoInstagramIcon,
  LogoLinkedInIcon,
  LogoXIcon
};

const meta = {
  title: 'Components 🔋 / Pressables 🛎 / Button 👇',
  component: Button,
  tags: ['autodocs', 'Components 🔋', 'Pressables 🛎'],
  parameters: {
    layout: 'centered',
    docs: {
      title: 'Button',
      subtitle:
        'A button is a clickable element that performs an action when pressed.',
      description: {
        component:
          'A button is a clickable element that performs an action when pressed. It can be styled in various ways and can include icons or text.'
      }
    }
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
    disclosure: false
  },
  argTypes: {
    disclosure: { control: 'boolean' },
    icon: {
      options: Object.keys(Icons),
      mapping: Icons,
      control: {
        type: 'select',
        labels: {
          ArrowLeftIcon: 'Arrow Left',
          ArrowRightIcon: 'Arrow Right',
          ChevronUpIcon: 'Caret Up',
          ChevronDownIcon: 'Caret Down',
          LogoGitHubIcon: 'GitHub',
          LogoInstagramIcon: 'Instagram',
          LogoLinkedInIcon: 'LinkedIn',
          LogoXIcon: 'X (formerly Twitter)'
        }
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return <Button {...args} />;
  }
};

export const Primary: Story = {
  ...Template,
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
};

export const Secondary: Story = {
  ...Template,
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
};

export const Tertiary: Story = {
  ...Template,
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
};

export const Plain: Story = {
  ...Template,
  args: {
    variant: 'plain',
    children: 'Plain Button'
  }
};

export const Critical: Story = {
  ...Template,
  args: {
    variant: 'primary',
    tone: 'critical',
    children: 'Critical Button'
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />

        <Button
          variant={'secondary'}
          tone="critical"
          children={'Secondary Critical Button'}
        />
      </Box>
    )
  ]
};

export const Success: Story = {
  ...Template,
  args: {
    variant: 'primary',
    tone: 'success',
    children: 'Success Button'
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />

        <Button
          variant={'secondary'}
          tone="success"
          children={'Secondary Success Button'}
        />
      </Box>
    )
  ]
};

export const Icon: Story = {
  ...Template,
  args: {
    icon: <ArrowRightIcon />,
    children: 'Icon Button'
  }
};

export const IconOnly: Story = {
  ...Template,
  args: {
    icon: <ArrowRightIcon />
  }
};

export const DisclosureDown: Story = {
  ...Template,
  args: {
    disclosure: true,
    children: 'Disclosure Down'
  }
};

export const DisclosureUp: Story = {
  ...Template,
  args: {
    disclosure: 'up',
    children: 'Disclosure Up'
  }
};

export const Select: Story = {
  ...Template,
  args: {
    disclosure: 'select',
    children: 'Select Button'
  }
};

export const Large: Story = {
  ...Template,
  args: {
    size: 'large',
    children: 'Large Button'
  }
};

export const Medium: Story = {
  ...Template,
  args: {
    size: 'medium',
    children: 'Medium Button'
  }
};

export const Small: Story = {
  ...Template,
  args: {
    size: 'small',
    children: 'Small Button'
  }
};

export const Micro: Story = {
  ...Template,
  args: {
    size: 'micro',
    children: 'Micro Button'
  }
};
