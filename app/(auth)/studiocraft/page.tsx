'use client';

// 🔌 Vendors
import useSWR from 'swr';

// 🔩 Components
import PageLayout from '@/ui/layouts/Page';
import Page from '@/ui/components/Page';
import type { Content, ResponseError } from 'interfaces/index';

import ErrorPage from '../../global-error';

// 🤖 Configs
import { PageLayoutProps } from '@/ui/layouts/Page';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function IndexPage() {
  const { data, error, isLoading, isValidating } = useSWR<
    Content[],
    ResponseError
  >('/api/studiocraft', fetcher);

  if (error) return <ErrorPage name="" message="" status={404} />;
  if (isLoading) return <Page loading />;
  if (isValidating) return <Page loading />;
  if (!data) return null;

  return data.map((layout: PageLayoutProps) => (
    <PageLayout {...layout} key={layout.id} />
  ))[0];
}
