'use client';

// 🔌 Vendors
import React, { Children, Fragment, useState } from 'react';

// 🔩 Components

// 🎨 Styles
import styles from './MorphSections.module.scss';

interface MorphSectionsProps {
  children: React.ReactNode;
  renderSection: (
    section: React.ReactNode,
    id: number,
    isScrolled: boolean
  ) => React.ReactNode | React.ReactElement;
}

type MorphSectionsType = React.ReactElement;

export const MorphSections = ({
  children,
  renderSection
}: MorphSectionsProps): MorphSectionsType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sections = Children.toArray(children);

  return (
    <Fragment>
      {sections! &&
        sections.map((section, index) => {
          const isHighlighted = index === selectedIndex;
          const Section = () => renderSection(section, index, isHighlighted);

          return <Section key={index} />;
        })}
    </Fragment>
  );
};

export default MorphSections;
