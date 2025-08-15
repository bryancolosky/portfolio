'use client';

// 🔌 Vendors
import { SWRConfig } from 'swr';
import NextLink from 'next/link';

// 🔩 Components
import AppProvider from '@/ui/components/AppProvider';
import { TooltipProvider } from '@/ui/shadcn/components/tooltip';
import type { LinkComponent } from '@/ui/components/Link';

const NextLinkWrapper: LinkComponent = (props) => {
  if (!props) return null;
  const { children, url = '', external, ...rest } = props;

  return (
    <NextLink href={url} {...rest}>
      {children}
    </NextLink>
  );
};

const API = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(`${data.message}`, { cause: res.status });
  }
  return data;
};

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher: API,
        shouldRetryOnError: false
      }}
    >
      <AppProvider linkComponent={NextLinkWrapper}>
        <TooltipProvider>{children}</TooltipProvider>
      </AppProvider>
    </SWRConfig>
  );
};
