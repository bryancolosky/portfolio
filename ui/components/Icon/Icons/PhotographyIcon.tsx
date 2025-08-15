'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';

export type PhotographyIconProps = SVGProps<SVGSVGElement>;
const PhotographyIcon = ({ fill }: PhotographyIconProps) => (
  <FontAwesomeIcon icon={faImages} fill={fill} />
);

export default PhotographyIcon;
