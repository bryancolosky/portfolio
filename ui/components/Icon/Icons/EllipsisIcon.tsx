'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export type EllipsisIconProps = SVGProps<SVGSVGElement>;
const EllipsisIcon = ({ fill }: EllipsisIconProps) => (
  <FontAwesomeIcon icon={faEllipsis} fill={fill} />
);

export default EllipsisIcon;
