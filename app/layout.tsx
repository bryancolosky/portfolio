'use client';

// 🔌 Vendors
import { Analytics } from '@vercel/analytics/react';
import { Permanent_Marker, Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { MDXProvider } from '@mdx-js/react';

// 🔩 Components
import AppFrame from '@/ui/components/AppFrame';
import { typeSettings } from '@/ui/components/Typography';

import { SWRProvider } from './providers';
import { Template } from './template';

// 🎨 Styles
import '@/ui/styles/globals.scss';
import '@/ui/styles/index.css';

// 🤖 Config
import { APP_NAME } from '@/lib/constants';
import { useId } from 'react';

const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const permantMarker = Permanent_Marker({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap'
});

const NoSSR = dynamic(() => import('@/ui/components/AppAppearance'), {
  ssr: false
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${permantMarker.variable}`}>
        <NoSSR>
          <SWRProvider>
            <AppFrame
              appBar={{ logo: { title: `${APP_NAME}`, gravatar: true } }}
              appFooter={{ title: `${APP_NAME}` }}
            >
              <Template key={useId()}>{children}</Template>
            </AppFrame>
          </SWRProvider>
        </NoSSR>
      </body>
      <Analytics />
    </html>
  );
}
