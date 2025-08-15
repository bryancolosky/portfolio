'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export type ArrowRightIconProps = SVGProps<SVGSVGElement>;
const ArrowRightIcon = ({ fill }: ArrowRightIconProps) => (
  <FontAwesomeIcon icon={faArrowRight} fill={fill} />
);

export default ArrowRightIcon;
