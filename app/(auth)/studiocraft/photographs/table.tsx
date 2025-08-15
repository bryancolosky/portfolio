'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/ui/shadcn/components/table';

import Button from '@/ui/components/Button';
import { ArrowRightIcon, ArrowLeftIcon } from '@/ui/components/Icon';
import { Row } from './table-row';

import { SelectPhotograph } from '@/lib/db';
import { Fragment } from 'react';

export function PhotographsTable({
  photography,
  offset,
  totalPhotos
}: {
  photography: SelectPhotograph[];
  offset: number;
  totalPhotos: number;
}) {
  let router = useRouter();
  let photographyPerPage = 10;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    router.push(`?offset=${offset}`, { scroll: false });
  }

  return (
    <Fragment>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Price</TableHead>
            <TableHead className="hidden md:table-cell">Total Sales</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {photography.map((photo) => (
            <Row key={photo.id} photo={photo} />
          ))}
        </TableBody>
      </Table>

      <form className="flex items-center w-full justify-between">
        <div className="text-xs text-muted-foreground">
          Showing{' '}
          <strong>
            {Math.max(
              0,
              Math.min(offset - photographyPerPage, totalPhotos) + 1
            )}
            -{offset}
          </strong>{' '}
          of <strong>{totalPhotos}</strong> photographs
        </div>
        <div className="flex">
          <Button
            onClick={prevPage}
            variant="tertiary"
            size="micro"
            icon={<ArrowLeftIcon />}
            disabled={offset === photographyPerPage}
          >
            Prev
          </Button>
          <Button
            onClick={nextPage}
            variant="tertiary"
            size="micro"
            icon={<ArrowRightIcon />}
            disabled={offset + photographyPerPage > totalPhotos}
          >
            Next
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
