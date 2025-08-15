'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export type ArrowLeftIconProps = SVGProps<SVGSVGElement>;
const ArrowLeftIcon = ({ fill }: ArrowLeftIconProps) => (
  <FontAwesomeIcon icon={faArrowLeft} fill={fill} />
);

export default ArrowLeftIcon;
