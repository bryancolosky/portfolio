'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export type BarsIconProps = SVGProps<SVGSVGElement>;
const BarsIcon = ({ fill }: BarsIconProps) => (
  <FontAwesomeIcon icon={faBars} fill={fill} />
);

export default BarsIcon;
