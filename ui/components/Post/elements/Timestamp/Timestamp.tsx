// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Date from '@/ui/components/Date';

// 🎨 Styles
import styles from './Timestamp.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type TimestampType = React.ReactNode | React.ReactElement;

export interface TimestampProps {
  timestamp?: string;
}

const Timestamp = ({ ...props }: TimestampProps): TimestampType => {
  const className = classNames(props.timestamp && styles.timestamp);

  return (
    <span className={`${className}`}>
      <Date dateString={`${props.timestamp}`} />
    </span>
  );
};

export default Timestamp;
