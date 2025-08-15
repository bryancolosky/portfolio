import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';

// 🔩 Components
import Page from '../ui/components/Page';
import Box from '../ui/components/Box';
import Map from '../ui/components/Map';
import FullFrame from '../ui/components/FullFrame';

// 🤖 Configs
import { travelData } from '../lib/travel';

const meta = {
  title: 'Components 🔋 / Map 🗺',
  component: Map,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animate={false}>
        <Box width="100%">
          <Map {...args} />
        </Box>
      </Page>
    );
  }
};

export const Brooklyn: Story = {
  ...Template
};

export const SouthernCalifornia: Story = {
  ...Template,
  args: {
    id: 'soCal',
    center: travelData[1],
    keyLocation: travelData[1],
    zoom: 8
  }
};

export const Germany: Story = {
  ...Template,
  args: {
    id: 'germany',
    center: travelData[3],
    keyLocation: travelData[3],
    zoom: 6
  }
};

export const Istanbul: Story = {
  ...Template,
  args: {
    id: 'istanbul',
    center: travelData[4],
    keyLocation: travelData[4],
    zoom: 8
  }
};

export const Worldwide: Story = {
  args: {
    id: 'worldwide',
    center: travelData[0],
    keyLocation: travelData[0],
    marks: travelData,
    zoom: 3
  },
  decorators: [
    (Story) => (
      <Page animate={true}>
        <Box width="100%">
          <Story />
        </Box>
        <Box width="100%">
          <Map id={'brooklyn'} />
        </Box>
        <Box width="100%">
          <Map
            id={'soCal'}
            center={travelData[1]}
            keyLocation={travelData[1]}
            zoom={8}
          />
        </Box>
        <Box width="100%">
          <Map
            id={'germany'}
            center={travelData[3]}
            keyLocation={travelData[3]}
            zoom={6}
          />
        </Box>
        <Box width="100%">
          <Map
            id={'istanbul'}
            center={travelData[4]}
            keyLocation={travelData[4]}
            zoom={8}
          />
        </Box>
      </Page>
    )
  ]
};
