'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export type ChevronDownIconProps = SVGProps<SVGSVGElement>;
const ChevronDownIcon = ({ fill }: ChevronDownIconProps) => (
  <FontAwesomeIcon icon={faChevronDown} fill={fill} />
);

export default ChevronDownIcon;
