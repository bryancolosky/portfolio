'use client';

// 🔌 Vendors
import { parseISO, format } from 'date-fns';

// 🔩 Components
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './Date.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils';

export type DateType = React.ReactNode;

export interface DateProps {
  dateString?: string;
}

export const Date = ({ dateString }: DateProps): DateType => {
  const date = parseISO(dateString || '');
  const className = classNames(styles.date);

  return (
    <time className={`${className}`} dateTime={dateString}>
      <Text element="span" numeric>
        {format(date, 'LLLL	d, yyyy')}
      </Text>
    </time>
  );
};

export default Date;
