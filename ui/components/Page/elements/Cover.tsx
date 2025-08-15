'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';
import Box from '@/ui/components/Box';
import FullFrame from '../../FullFrame';

// 🎨 Styles

export type CoverType = React.ReactNode | React.ReactElement;

export interface CoverProps {
  greeting?: string | string[];
  description?: string | string[];
  link?: boolean;
  children?: React.ReactNode;
}

const PageCover = ({
  greeting,
  description,
  children
}: CoverProps): CoverType => {
  return (
    <FullFrame>
      <Box width="100%" padding={'none'}>
        <Text element="h1" variant="headline-1">
          {greeting}
        </Text>
        <Text element="h2" variant="headline-2">
          {description}
        </Text>
        {children}
      </Box>
    </FullFrame>
  );
};

export default PageCover;
