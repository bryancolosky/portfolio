'use client';

// 🔌 Vendors
import React from 'react';

// 🔩 Components
import Gravatar from '@/ui/components/Gravatar';
import Link from '@/ui/components/Link';

import { classNames } from '@/ui/utils/utils';

// 🎨 Styles
import styles from './Logo.module.scss';

export type LogoType = React.ReactElement;
export interface LogoProps {
  gravatar?: boolean;
  flag?: 'ny' | 'ca' | 'seattle' | undefined | null;
  size?: 'large' | 'medium' | 'small';
  url?: string;
  title?: string;
  props?: React.SVGProps<SVGSVGElement>;
}

export const Flags = ({ ...props }: any) => {
  const { size, flag } = props;
  if (!flag) return;

  if (flag === 'ny') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 220"
        width={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        height={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        fill="none"
        {...props}
      >
        <g id="Icon" clipPath={`url(#clip-path)`}>
          <rect
            id="Background"
            fill={`var(--morph-fill)`}
            width="320"
            height="220"
          />
          <g id="Art">
            <rect
              id="Stripe"
              fill={`var(--theme-orange)`}
              x="240"
              width="80"
              height="220"
            />
            <rect
              id="Stripe"
              fill={`var(--theme-blue)`}
              y="0"
              width="80"
              height="220"
            />
            <path d="M173 66H153V86H173V66Z" fill="#7FDBFF" />
            <path
              d="M183 126V106H143V126H153V146H173V126H183Z"
              fill="#7FDBFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M133 66H153V86H173V66H193V86H203V146H193V166H133V146H123V86H133V66ZM143 126V106H183V126H173V146H153V126H143Z"
              fill="#CDECFF"
            />
          </g>
        </g>
      </svg>
    );
  }

  if (flag == 'ca') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 220"
        width={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        height={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        fill="none"
        {...props}
      >
        <g id="Icon" clipPath={`url(#clip-path)`}>
          <rect
            id="Background"
            fill={`var(--morph-fill)`}
            width="320"
            height="220"
          />
          <g id="Art">
            <rect
              id="Stripe"
              fill={`var(--theme-red)`}
              y="180"
              width="320"
              height="40"
            />
            <rect
              id="Earth"
              fill={`#999`}
              x="80"
              y="140"
              width="160"
              height="20"
            />
            <polygon
              id="Bear"
              fill={`#333`}
              points="140 60 140 40 120 40 120 60 100 60 100 100 120 100 120 140 160 140 160 120 180 120 180 140 200 140 200 120 220 120 220 140 240 140 240 60 140 60"
            />
            <g id="Star">
              <rect fill={`#01ff70`} x="40" y="60" width="20" height="20" />
              <rect fill={`#01ff70`} y="60" width="20" height="20" />
              <polygon
                fill={`#01ff70`}
                points="60 40 60 20 40 20 40 0 20 0 20 20 0 20 0 40 20 40 20 60 40 60 40 40 60 40"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }

  if (flag == 'seattle') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 220"
        width={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        height={
          size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
        }
        fill="none"
        {...props}
      >
        <path d="M320 0H0V220H320V0Z" fill="var(--theme-teal)" />
        <rect
          x="120"
          y="70"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="120"
          y="130"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="180"
          y="130"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="170"
          y="90"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="160"
          y="140"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="140"
          y="140"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="140"
          y="60"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="160"
          y="60"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="180"
          y="70"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="190"
          y="90"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="110"
          y="90"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="190"
          y="110"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="110"
          y="110"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="90"
          y="110"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="80"
          y="80"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="80"
          y="110"
          width="10"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="100"
          y="130"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="100"
          y="90"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="100"
          y="70"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="100"
          y="10"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect x="80" width="20" height="10" fill="var(--theme-teal-bg)" />
        <rect
          x="40"
          y="110"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="20"
          y="120"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect y="130" width="20" height="10" fill="var(--theme-teal-bg)" />
        <rect x="40" width="20" height="10" fill="var(--theme-teal-bg)" />
        <rect y="10" width="20" height="20" fill="var(--theme-teal-bg)" />
        <rect
          x="210"
          y="69.9999"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="220"
          y="89.9999"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="200"
          y="150"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="210"
          y="110"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="210"
          y="130"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="110"
          y="50"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="200"
          y="49.9999"
          width="10"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="120"
          y="49.9999"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="140"
          y="40"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="180"
          y="49.9999"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="160"
          y="40"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="40"
          y="20"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="40"
          y="50"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="40"
          y="80"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="20"
          y="30"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="20"
          y="60"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="20"
          y="90"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect x="20" width="20" height="20" fill="var(--theme-teal-bg)" />
        <rect y="40" width="20" height="20" fill="var(--theme-teal-bg)" />
        <rect y="70" width="20" height="20" fill="var(--theme-teal-bg)" />
        <rect y="100" width="20" height="20" fill="var(--theme-teal-bg)" />
        <rect
          x="80"
          y="20"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="80"
          y="50"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="60"
          y="10"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="60"
          y="40"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="60"
          y="70"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="60"
          y="100"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="140"
          y="170"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="160"
          y="170"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="180"
          y="160"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="120"
          y="160"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="100"
          y="150"
          width="20"
          height="10"
          fill="var(--theme-teal-bg)"
        />
        <rect
          x="130"
          y="110"
          width="20"
          height="20"
          fill="var(--theme-teal-bg)"
        />
        <rect x="150" y="90" width="20" height="40" fill="var(--color-aqua)" />
      </svg>
    );
  }
};

export function Logo({
  title,
  gravatar,
  flag,
  url,
  size,
  ...props
}: LogoProps): LogoType {
  return (
    <Link.Unstyled url={url}>
      <span className={`logo ${styles.logo}`}>
        {flag === 'ny' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 220"
            width={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            height={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            fill="none"
            {...props}
          >
            <g id="Icon" clipPath={`url(#clip-path)`}>
              <rect
                id="Background"
                fill={`var(--morph-fill)`}
                width="320"
                height="220"
              />
              <g id="Art">
                <rect
                  id="Stripe"
                  fill={`var(--theme-orange)`}
                  x="240"
                  width="80"
                  height="220"
                />
                <rect
                  id="Stripe"
                  fill={`var(--theme-blue)`}
                  y="0"
                  width="80"
                  height="220"
                />
                <path d="M173 66H153V86H173V66Z" fill="#7FDBFF" />
                <path
                  d="M183 126V106H143V126H153V146H173V126H183Z"
                  fill="#7FDBFF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M133 66H153V86H173V66H193V86H203V146H193V166H133V146H123V86H133V66ZM143 126V106H183V126H173V146H153V126H143Z"
                  fill="#CDECFF"
                />
              </g>
            </g>
          </svg>
        ) : flag === 'ca' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 220"
            width={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            height={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            fill="none"
            {...props}
          >
            <g id="Icon" clipPath={`url(#clip-path)`}>
              <rect
                id="Background"
                fill={`var(--morph-fill)`}
                width="320"
                height="220"
              />
              <g id="Art">
                <rect
                  id="Stripe"
                  fill={`var(--theme-red)`}
                  y="180"
                  width="320"
                  height="40"
                />
                <rect
                  id="Earth"
                  fill={`#999`}
                  x="80"
                  y="140"
                  width="160"
                  height="20"
                />
                <polygon
                  id="Bear"
                  fill={`#333`}
                  points="140 60 140 40 120 40 120 60 100 60 100 100 120 100 120 140 160 140 160 120 180 120 180 140 200 140 200 120 220 120 220 140 240 140 240 60 140 60"
                />
                <g id="Star">
                  <rect fill={`#01ff70`} x="40" y="60" width="20" height="20" />
                  <rect fill={`#01ff70`} y="60" width="20" height="20" />
                  <polygon
                    fill={`#01ff70`}
                    points="60 40 60 20 40 20 40 0 20 0 20 20 0 20 0 40 20 40 20 60 40 60 40 40 60 40"
                  />
                </g>
              </g>
            </g>
          </svg>
        ) : flag === 'seattle' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 220"
            width={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            height={
              size ? (size === 'large' ? 128 : size === 'small' ? 36 : 64) : 64
            }
            fill="none"
            {...props}
          >
            <path d="M320 0H0V220H320V0Z" fill="var(--theme-teal)" />
            <rect
              x="120"
              y="70"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="120"
              y="130"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="180"
              y="130"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="170"
              y="90"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="160"
              y="140"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="140"
              y="140"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="140"
              y="60"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="160"
              y="60"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="180"
              y="70"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="190"
              y="90"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="110"
              y="90"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="190"
              y="110"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="110"
              y="110"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="90"
              y="110"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="80"
              y="80"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="80"
              y="110"
              width="10"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="100"
              y="130"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="100"
              y="90"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="100"
              y="70"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="100"
              y="10"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect x="80" width="20" height="10" fill="var(--theme-teal-bg)" />
            <rect
              x="40"
              y="110"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="20"
              y="120"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect y="130" width="20" height="10" fill="var(--theme-teal-bg)" />
            <rect x="40" width="20" height="10" fill="var(--theme-teal-bg)" />
            <rect y="10" width="20" height="20" fill="var(--theme-teal-bg)" />
            <rect
              x="210"
              y="69.9999"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="220"
              y="89.9999"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="200"
              y="150"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="210"
              y="110"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="210"
              y="130"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="110"
              y="50"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="200"
              y="49.9999"
              width="10"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="120"
              y="49.9999"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="140"
              y="40"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="180"
              y="49.9999"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="160"
              y="40"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="40"
              y="20"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="40"
              y="50"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="40"
              y="80"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="20"
              y="30"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="20"
              y="60"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="20"
              y="90"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect x="20" width="20" height="20" fill="var(--theme-teal-bg)" />
            <rect y="40" width="20" height="20" fill="var(--theme-teal-bg)" />
            <rect y="70" width="20" height="20" fill="var(--theme-teal-bg)" />
            <rect y="100" width="20" height="20" fill="var(--theme-teal-bg)" />
            <rect
              x="80"
              y="20"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="80"
              y="50"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="60"
              y="10"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="60"
              y="40"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="60"
              y="70"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="60"
              y="100"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="140"
              y="170"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="160"
              y="170"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="180"
              y="160"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="120"
              y="160"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="100"
              y="150"
              width="20"
              height="10"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="130"
              y="110"
              width="20"
              height="20"
              fill="var(--theme-teal-bg)"
            />
            <rect
              x="150"
              y="90"
              width="20"
              height="40"
              fill="var(--color-aqua)"
            />
          </svg>
        ) : (
          <Gravatar
            clipShape="circle"
            decoration={12}
            size={
              size
                ? size === 'large'
                  ? { width: 128, height: 128 }
                  : size === 'small'
                    ? { width: 36, height: 36 }
                    : { width: 64, height: 64 }
                : { width: 64, height: 64 }
            }
          />
        )}
        {title && <span className={`${styles.logoTitle}`}>{title}</span>}
      </span>
    </Link.Unstyled>
  );
}

export default Logo;
