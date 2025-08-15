'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';

// 🔩 Components
import Error from '@/ui/components/Error';

// 🤖 Configs
import { APP_NAME } from '@/lib/constants';
import { ResponseError } from '@/types/index';

interface PageProps extends ResponseError {}

export const NotFound = ({ status, message }: PageProps) => {
  const pathname = usePathname();
  return (
    <Fragment>
      <Head>
        <title>{`${status} | ${APP_NAME}`}</title>
      </Head>
      <Error
        name="Next JS Not Found"
        status={404}
        message={`${message}. Invalid URL ${pathname}. Not found.`}
      />
    </Fragment>
  );
};

export default NotFound;
