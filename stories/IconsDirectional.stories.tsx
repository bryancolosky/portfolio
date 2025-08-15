import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Icon from '../ui/components/Icon';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from '../ui/components/Icon/Icons';
import Page from '../ui/components/Page';

const Directionals = {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon
};

const meta = {
  title: 'Components 🔋 / Icons 🧩 / Directional',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'Components 🔋', 'Icons 🧩'],
  argTypes: {
    source: {
      options: Object.keys(Directionals),
      mapping: Directionals,
      control: {
        type: 'select',
        labels: {
          ArrowLeftIcon: 'Arrow Left',
          ArrowRightIcon: 'Arrow Right',
          ChevronUpIcon: 'Caret Up',
          ChevronDownIcon: 'Caret Down'
        }
      }
    }
  },
  args: {
    size: 'large',
    source: ArrowRightIcon
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return <Icon {...args} />;
  }
};

export const ArrowLeft: Story = {
  ...Template,
  name: 'Arrow Left',
  args: {
    source: ArrowLeftIcon
  }
};

export const ArrowRight: Story = {
  ...Template,
  name: 'Arrow Right',
  args: {
    source: ArrowRightIcon
  }
};

export const ChevronUp: Story = {
  ...Template,
  name: 'Chevron Up',
  args: {
    source: ChevronUpIcon
  }
};

export const ChevronDown: Story = {
  ...Template,
  name: 'Chevron Down',
  args: {
    source: ChevronDownIcon
  }
};
