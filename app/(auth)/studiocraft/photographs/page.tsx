import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/ui/shadcn/components/tabs';

import { PhotographsTable } from './table';

import { getPhotographs } from '@/lib/db';
import PortfolioLayout from '@/ui/layouts/Portfolio';
import { SearchInput } from '../search';

export default async function PhotographsPage(props: {
  searchParams: Promise<{ q: string; offset: string }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;
  const { photographs, newOffset, totalPhotographs } = await getPhotographs(
    search,
    Number(offset)
  );

  return (
    <PortfolioLayout id="photographs">
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="archived" className="hidden sm:flex">
              Archived
            </TabsTrigger>
          </TabsList>
          <SearchInput />
        </div>
        <TabsContent value="all">
          <PhotographsTable
            photography={photographs}
            offset={newOffset ?? 0}
            totalPhotos={totalPhotographs}
          />
        </TabsContent>
      </Tabs>
    </PortfolioLayout>
  );
}
