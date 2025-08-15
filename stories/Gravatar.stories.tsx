import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Box from '../ui/components/Box';
import Gravatar from '../ui/components/Gravatar';
import Page from '../ui/components/Page';
import FullFrame from '../ui/components/FullFrame';

const meta = {
  title: 'Components 🔋 / Gravatar 👤',
  component: Gravatar,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'Components 🔋', 'Gravatar 👤'],
  argTypes: {}
} satisfies Meta<typeof Gravatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animation={false}>
        <Box width="100%">
          <Gravatar {...args} />
        </Box>
      </Page>
    );
  }
};

export const Decoration1: Story = {
  ...Template,
  args: {
    fill: 'yellow',
    decoration: 1,
    alt: false,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration2: Story = {
  ...Template,
  args: {
    fill: 'blue',
    decoration: 2,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration3: Story = {
  ...Template,
  args: {
    fill: 'green',
    decoration: 3,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration4: Story = {
  ...Template,
  args: {
    fill: 'orange',
    decoration: 4,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration5: Story = {
  ...Template,
  args: {
    fill: 'yellow',
    decoration: 5,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration6: Story = {
  ...Template,
  args: {
    fill: 'red',
    decoration: 6,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration7: Story = {
  ...Template,
  args: {
    fill: 'indigo',
    decoration: 7,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration8: Story = {
  ...Template,
  args: {
    fill: 'white',
    decoration: 8,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration9: Story = {
  ...Template,
  args: {
    fill: 'violet',
    decoration: 9,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration10: Story = {
  ...Template,
  args: {
    fill: 'green',
    decoration: 10,
    size: {
      width: 64,
      height: 64
    }
  }
};

export const Decoration11: Story = {
  ...Template,
  args: {
    fill: 'red',
    decoration: 11,
    size: {
      width: 64,
      height: 64
    }
  }
};
export const Decoration12: Story = {
  ...Template,
  args: {
    fill: 'blue',
    decoration: 12,
    size: {
      width: 64,
      height: 64
    }
  }
};
