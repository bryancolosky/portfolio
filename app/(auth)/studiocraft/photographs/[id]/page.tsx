'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import type { Content, ResponseError } from 'interfaces/index';

import Page from '@/ui/components/Page';
import ProjectLayout from '@/ui/layouts/Portfolio';

// 🤖 Configs

import ErrorPage from '../../../../global-error';
import { SelectPhotograph } from '@/lib/db';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function PhotoPage() {
  const query = useParams();
  const { data, error, isLoading, isValidating } = useSWR<
    SelectPhotograph,
    ResponseError
  >(() => (query?.id ? `/api/projects/${query.id}` : null), fetcher);

  if (error) return <ErrorPage name="" message="" status={404} />;
  if (isLoading) return <Page loading />;
  if (isValidating) return <Page loading />;
  if (!data) return null;

  return (
    <Image
      key={data.id}
      alt="Product image"
      className="aspect-square rounded-md object-cover"
      height="64"
      src={data.imageUrl}
      width="64"
    />
  );
}
