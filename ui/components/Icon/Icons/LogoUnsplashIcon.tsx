'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnsplash } from '@fortawesome/free-brands-svg-icons';

export type LogoUnsplashIconProps = SVGProps<SVGSVGElement>;
const LogoUnsplashIcon = ({ fill }: LogoUnsplashIconProps) => (
  <FontAwesomeIcon icon={faUnsplash} fill={fill} />
);

export default LogoUnsplashIcon;
