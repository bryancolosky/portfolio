'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export type LogoInstagramIconProps = SVGProps<SVGSVGElement>;
const LogoInstagramIcon = ({ fill }: LogoInstagramIconProps) => (
  <FontAwesomeIcon icon={faInstagram} fill={fill} />
);

export default LogoInstagramIcon;
