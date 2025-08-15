'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

export type LogoXIconProps = SVGProps<SVGSVGElement>;
const LogoXIcon = ({ fill }: LogoXIconProps) => (
  <FontAwesomeIcon icon={faXTwitter} fill={fill} />
);

export default LogoXIcon;
