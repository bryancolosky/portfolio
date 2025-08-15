'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export type UXIconProps = SVGProps<SVGSVGElement>;
const UXIcon = ({ fill }: UXIconProps) => (
  <FontAwesomeIcon icon={faCode} fill={fill} />
);

export default UXIcon;
