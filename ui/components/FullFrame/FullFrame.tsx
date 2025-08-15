'use client';

// 🔌 Vendors
import React from 'react';

// 🎨 Styles
import styles from './FullFrame.module.scss';

export type FullFrameType = React.ReactNode;

export interface FullFrameProps {
  children?: React.ReactNode;
}

export const FullFrame = ({ children }: FullFrameProps): FullFrameType => {
  return <div className={`fullFrame ${styles.fullFrame}`}>{children}</div>;
};
export default FullFrame;
