'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components

// 🎨 Styles
import styles from './MorphSection.module.scss';

export interface MorphSectionProps {
  id: number;
  children?: React.ReactNode;
  isScrolled?: boolean;
}

export const MorphSection = ({ id, children }: MorphSectionProps) => {
  return (
    <section key={id} className={`section ${styles.sectionWrap}`}>
      {children}
    </section>
  );
};

export default MorphSection;
