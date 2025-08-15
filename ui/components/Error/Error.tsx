'use client';

// 🔌 Vendors
import React, { Fragment } from 'react';

// 🔩 Components
import Page from '@/ui/components/Page';
import FullFrame from '@/ui/components/FullFrame';
import Text from '@/ui/components/Typography';
import Link from '@/ui/components/Link';

// 🎨 Styles
import styles from './Error.module.scss';
import { ResponseError } from '@/types/index';

export type ErrorType = React.ReactNode | React.ReactElement;

export interface ErrorProps extends ResponseError {
  description?: string;
  children?: React.ReactNode;
}

export const Error = ({ status, message }: ErrorProps): ErrorType => {
  return (
    <Fragment>
      {status === 500 ? (
        <Page>
          <Page.Cover
            greeting={`🔌 ${status}`}
            description={
              message ? `${message}` : `An error ${status} occurred on server`
            }
          >
            <Text variant="lead" element="p">
              Try going to back to{' '}
              <Link url="/" as="/">
                home 🏠
              </Link>
            </Text>
          </Page.Cover>
        </Page>
      ) : (
        <Page>
          <Page.Cover
            greeting={`🌐 ${status}`}
            description={
              message ? `${message}` : `Opps! This page cannot be found`
            }
          >
            <Text variant="lead" element="p">
              Try going to back to{' '}
              <Link url="/" as="/">
                home 🏠
              </Link>
            </Text>
          </Page.Cover>
        </Page>
      )}
    </Fragment>
  );
};

export default Error;
