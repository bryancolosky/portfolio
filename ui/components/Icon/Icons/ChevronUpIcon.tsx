'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export type ChevronUpIconProps = SVGProps<SVGSVGElement>;
const ChevronUpIcon = ({ fill }: ChevronUpIconProps) => (
  <FontAwesomeIcon icon={faChevronUp} fill={fill} />
);

export default ChevronUpIcon;
