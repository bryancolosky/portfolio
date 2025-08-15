'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Box from '@/ui/components/Box';

// 🎨 Styles
import styles from './Loader.module.scss';

export type LoaderType = React.ReactNode;
export interface LoaderProps {}

export const Loader = ({}: LoaderProps): LoaderType => {
  return (
    <Box>
      <div className={`spinner ${styles.spinner}`} />
    </Box>
  );
};

export default Loader;
