'use client';

// 🔌 Vendors
import React from 'react';
import 'animate.css';

// 🔩 Components
import Logo from '../Logo';

// 🎨 Styles
import styles from './AppSplash.module.scss';

export type AppSplashType = React.ReactElement;

export interface AppSplashProps {
  label?: string;
}
export const AppSplash = ({ label }: AppSplashProps): AppSplashType => {
  return (
    <div className={`splash ${styles.splash}`}>
      <div className={`splashWrapper ${styles.splashWrapper}`}>
        <div className={`splashContent ${styles.splashContent}`}>
          <div className={`splashing ${styles.splashing}`}>
            <div className={`splashingGraphic ${styles.splashingGraphic}`}>
              <Logo gravatar={false} />
              {label ? <span>{label}</span> : <span>Loading...</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSplash;
