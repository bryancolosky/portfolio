'use client';

// 🔌 Vendors
import { Suspense } from 'react';
import useSWR from 'swr';

// 🔩 Components
import PageLayout from '@/ui/layouts/Page';
import Page from '@/ui/components/Page';
import type { Content, ResponseError } from 'interfaces/index';

import ErrorPage from '../global-error';
import Loading from '../loading';

// 🤖 Configs
import { PageLayoutProps } from '@/ui/layouts/Page';

export default function IndexPage() {
  const { data, error, isLoading, isValidating } = useSWR<
    Content[],
    ResponseError
  >('/api/pages');

  if (error) return <ErrorPage name="Error" message="Error" status={404} />;
  if (isLoading) return <Page loading />;
  if (isValidating) return <Page loading />;
  if (!data) return null;

  return data.map((layout: PageLayoutProps) => (
    <Suspense fallback={<Loading />}>
      <PageLayout {...layout} key={layout.id} />
    </Suspense>
  ))[0];
}
