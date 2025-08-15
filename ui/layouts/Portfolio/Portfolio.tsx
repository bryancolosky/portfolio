'use-client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import FullFrame from '@/ui/components/FullFrame';
import Link, { LinkProps } from '@/ui//components/Link';
import Page from '@/ui/components/Page';
import Text from '@/ui/components/Typography';
import Post, { PostProps } from '@/ui/components/Post';
import Photopgraph, { PhotographProps } from '@/ui/components/Photograph';
import Box from '@/ui/components/Box';
import Media from '@/ui/components/Media';
import { APP_NAME } from '@/lib/constants';
import Grid from '@/ui/components/Grid';
import Date from '@/ui/components/Date';

import { AppSidebar } from '@/ui/shadcn/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbEllipsis,
  BreadcrumbSeparator
} from '@/ui/shadcn/components/breadcrumb';
import { Separator } from '@/ui/shadcn/components/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/ui/shadcn/components/sidebar';

// 🤖 Configs
import type { ElementTypes } from '@/ui/components/Typography';

export type PortfolioLayoutType = React.ReactNode | React.ReactElement;

export interface PortfolioLayoutProps {
  id: string;
  cover?: {
    headline?: string;
    subheadline?: string;
    lead?: {
      element: ElementTypes;
      string?: string;
      link?: LinkProps;
    };
  };
  heroPost?: PostProps | PhotographProps;
  content?: any;
  children?: React.ReactNode | React.ReactElement;
}

export const PortfolioLayout = ({
  id,
  cover,
  heroPost,
  children,
  ...props
}: PortfolioLayoutProps) => {
  return (
    <Page key={id} {...props}>
      {cover && (
        <Page.Cover greeting={cover?.headline} description={cover?.subheadline}>
          {cover?.lead && (
            <Text variant="lead" element={cover?.lead.element}>
              {cover?.lead.string}{' '}
              {cover?.lead.link && (
                <NextLink href={`${cover?.lead.link.url}`}>
                  <Link
                    primary={cover?.lead.link.primary === true ? true : false}
                  >
                    {cover?.lead.link.children}
                  </Link>
                </NextLink>
              )}
            </Text>
          )}
        </Page.Cover>
      )}
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Portfolio</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {heroPost && (
              <Post id={heroPost.id}>
                <Post.Preview
                  id={heroPost.id}
                  variant={'hero'}
                  title={heroPost.title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  author={heroPost.author}
                  slug={heroPost.slug}
                  overview={heroPost.overview}
                  emoji={heroPost.emoji}
                  fill={heroPost.color}
                  decoration={heroPost.decoration}
                />
              </Post>
            )}
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Page>
  );
};

export default PortfolioLayout;
