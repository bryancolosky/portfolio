import type { Meta, StoryObj } from '@storybook/nextjs';

import Grid from '../ui/components/Grid';
import Box from '../ui/components/Box';
import FullFrame from '../ui/components/FullFrame';
import Page from '../ui/components/Page';

const meta = {
  title: 'Components 🔋 / Layouts 🏗 / Grid',
  component: Grid,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs', 'Components 🔋', 'Layouts 🏗'],
  args: {
    Cell: (<Grid.Cell />) as object as typeof Grid.Cell
  },
  argTypes: {}
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: ({ ...args }) => {
    return (
      <Page animate={false}>
        <Box width="100%">
          <Grid {...args}>
            <Grid.Cell area="main">
              <Box background="blue" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="aside">
              <Box background="navy" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="auxiliary">
              <Box background="aqua" width="100%" minHeight="150px" />
            </Grid.Cell>
          </Grid>
        </Box>
        <Box width="100%">
          <Grid {...args}>
            <Grid.Cell area="main">
              <Box background="green" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="aside">
              <Box background="forest" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="auxiliary">
              <Box background="lime" width="100%" minHeight="150px" />
            </Grid.Cell>
          </Grid>
        </Box>
        <Box width="100%">
          <Grid {...args}>
            <Grid.Cell area="main">
              <Box background="red" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="aside">
              <Box background="maroon" width="100%" minHeight="150px" />
            </Grid.Cell>
            <Grid.Cell area="auxiliary">
              <Box background="light-red" width="100%" minHeight="150px" />
            </Grid.Cell>
          </Grid>
        </Box>
      </Page>
    );
  }
};

export const Main: Story = {
  ...Template,
  args: {
    columns: {
      mobileSm: 1,
      mobileMd: 4,
      mobileLg: 4,
      laptop: 6,
      laptopLg: 6
    },
    areas: {
      mobileSm: ['main', 'aside', 'auxiliary'],
      mobileMd: ['main main main main', 'aside aside auxiliary auxiliary'],
      mobileLg: ['aside main main auxiliary'],
      laptop: ['main main main main aside auxiliary'],
      laptopLg: ['main main main main aside aside auxiliary auxiliary']
    }
  }
};
