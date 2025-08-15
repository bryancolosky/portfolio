'use client';

// 🔌 Vendors
import * as React from 'react';
import { SVGProps } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export type LogoGitHubIconProps = SVGProps<SVGSVGElement>;
const LogoGitHubIcon = ({ fill }: LogoGitHubIconProps) => (
  <FontAwesomeIcon icon={faGithub} fill={fill} />
);

export default LogoGitHubIcon;
