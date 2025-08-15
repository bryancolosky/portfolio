import Image from 'next/image';

import { Badge } from '@/ui/shadcn/components/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/ui/shadcn/components/dropdown-menu';
import { TableCell, TableRow } from '@/ui/shadcn/components/table';

import { SelectPhotograph } from '@/lib/db';
import { deletePhotograph } from '../actions';

import Button from '@/ui/components/Button';

export function Row({ photo }: { photo: SelectPhotograph }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={photo.imageUrl}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{photo.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {photo.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${photo.price}`}</TableCell>
      <TableCell className="hidden md:table-cell">{photo.stock}</TableCell>
      <TableCell className="hidden md:table-cell">
        {photo.availableAt.toLocaleDateString('en-US')}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" variant="plain" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              <form action={deletePhotograph}>
                <button type="submit">Delete</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
