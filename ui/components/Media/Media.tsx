'use client';

// 🔌 Vendors
import React, { useId } from 'react';

// 🔩 Components
import MediaFigure from '@/ui/components/MediaFigure';
import Text from '@/ui/components/Typography';

// 🎨 Styles
import styles from './Media.module.scss';

// 🤖 Configs
import { classNames } from '@/ui/utils/utils';
import Box from '../Box';

export type MediaType = React.ReactNode | React.ReactElement;

export interface MediaProps {
  id?: string;
  slug?: string;
  fill?: string;
  source?: string;
  decoration?: number;
  clipShape?: string;
  viewBox?: string;
  device?: string;
  caption?: string;
}

export const Media = ({ ...props }: MediaProps): MediaType => {
  const className = classNames(props.source && styles.media);
  const mediaID = useId();

  return (
    <figure className={className}>
      <Box width="100%">
        <MediaFigure
          id={`${props.id}${mediaID}`}
          fill={props.fill}
          source={props.source}
          decoration={props.decoration}
          clipShape={props.clipShape}
          viewBox={props.viewBox}
          device={props.device}
        />
        <figcaption
          className={classNames(styles.figureCaption, styles.figurePicCaption)}
        >
          <Text
            element="small"
            variant="micro"
            color="subdued"
          >{`Courtesy of ${props.caption} ©`}</Text>
        </figcaption>
      </Box>
    </figure>
  );
};

export default Media;
