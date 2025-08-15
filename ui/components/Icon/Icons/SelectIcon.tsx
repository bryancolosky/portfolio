'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export type SelectIconProps = SVGProps<SVGSVGElement>;
const SelectIcon = ({ fill }: SelectIconProps) => (
  <FontAwesomeIcon icon={faSortDown} fill={fill} />
);

export default SelectIcon;
