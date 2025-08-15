'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import Head from 'next/head';
import { usePathname, useParams } from 'next/navigation';

// 🔩 Components
import Error from '@/ui/components/Error';

// 🤖 Configs
import { APP_NAME } from '@/lib/constants';
import { ResponseError } from '@/types/index';

interface PageProps extends ResponseError {}

export const NotFound = ({ status, message }: PageProps) => {
  const pathname = usePathname();
  const query = useParams<{ id: string }>();

  return (
    <Fragment>
      <Head>
        <title>{`${status} | ${APP_NAME}`}</title>
      </Head>
      <Error
        name="Next JS Not Found"
        status={404}
        message={`${query.id}. Invalid URL @${pathname}. Not found.`}
      />
    </Fragment>
  );
};

export default NotFound;
