'use client';

// 🔌 Vendors
import useSWR from 'swr';

// 🔩 Components
import PortfolioLayout from '@/ui/layouts/Portfolio';
import Page from '@/ui/components/Page';
import type { Content } from 'interfaces/index';

import ErrorPage from '../../../global-error';

// 🤖 Configs
import { PortfolioLayoutProps } from '@/ui/layouts/Portfolio';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function ProjectsPage() {
  const { data, error, isLoading, isValidating } = useSWR<Content[]>(
    '/api/projects',
    fetcher
  );
  if (error) return <ErrorPage name="" message="" status={404} />;
  if (isLoading) return <Page loading />;
  if (isValidating) return <Page loading />;
  if (!data) return null;

  return data.map((project: PortfolioLayoutProps) => (
    <PortfolioLayout {...project} key={project.id} />
  ));
}
