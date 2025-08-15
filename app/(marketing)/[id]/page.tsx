'use client';

import { notFound, useParams } from 'next/navigation';
import useSWR from 'swr';
import type { Content, ResponseError } from 'interfaces/index';

import Page from '@/ui/components/Page';
import PageLayout from '@/ui/layouts/Page';

// 🤖 Configs

import ErrorPage from '../../global-error';
import Loading from '../../loading';
import { Suspense } from 'react';

export default function WebPage() {
  const query = useParams<{ id: string }>();
  const { data, error, isLoading, isValidating } = useSWR<
    Content,
    ResponseError
  >(() => (query?.id ? `/api/pages/${query.id}` : null));

  if (isLoading) return <Page loading />;
  if (error) {
    if (error.cause === 404) {
      // notFound();
      <ErrorPage
        name="Not Found Error"
        status={error.cause}
        message={`${error.message}`}
      />;
    }
    return (
      <ErrorPage
        name="Error"
        status={error.cause}
        message={`${error.message}`}
      />
    );
  }
  if (!data) {
    return <ErrorPage name="" status={500} message="Failed to load" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <PageLayout {...data} key={data.id} loading={isValidating ?? true} />
    </Suspense>
  );
}
