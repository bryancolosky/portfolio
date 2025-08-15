'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

export type ResumeIconProps = SVGProps<SVGSVGElement>;
const ResumeIcon = ({ fill }: ResumeIconProps) => (
  <FontAwesomeIcon icon={faAddressCard} fill={fill} />
);

export default ResumeIcon;
