'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from '@fortawesome/free-brands-svg-icons';

export type LogoFigmaIconProps = SVGProps<SVGSVGElement>;

const LogoFigmaIcon = ({ fill = 'currentColor' }: LogoFigmaIconProps) => (
  <FontAwesomeIcon icon={faFigma} fill={fill} />
);

export default LogoFigmaIcon;
