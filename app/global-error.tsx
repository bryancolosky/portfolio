'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import Head from 'next/head';

// 🔩 Components
import Error from '@/ui/components/Error';

// 🤖 Configs
import { APP_NAME } from '@/lib/constants';
import { ResponseError } from '../interfaces';

interface PageProps extends ResponseError {
  children?: React.ReactNode;
}

export const ErrorPage = ({ status, message, children }: PageProps) => {
  return (
    <Fragment>
      <Head>
        <title>{`${status} | ${APP_NAME}`}</title>
      </Head>
      <Error name="Next JS Error" status={status} message={message} />
    </Fragment>
  );
};

export default ErrorPage;
