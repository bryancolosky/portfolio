// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Slug from '../Slug';
import Timestamp from '../Timestamp';

// 🎨 Styles
import styles from './Meta.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type MetaType = React.ReactNode | React.ReactElement;

export interface MetaProps {
  slug?: string;
  date?: string;
}

const Meta = ({ ...props }: MetaProps): MetaType => {
  const className = classNames(styles.meta);

  return (
    <div className={`${className}`}>
      <Slug slug={props.slug} />
      {props.date && <Timestamp timestamp={props.date} />}
    </div>
  );
};

export default Meta;
