'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export type LogoLinkedInIconProps = SVGProps<SVGSVGElement>;
const LogoLinkedInIcon = ({ fill }: LogoLinkedInIconProps) => (
  <FontAwesomeIcon icon={faLinkedin} fill={fill} />
);

export default LogoLinkedInIcon;
