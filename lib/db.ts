import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  pgTable,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
  serial
} from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const statusEnum = pgEnum('status', ['active', 'inactive', 'archived']);

export const photographs = pgTable('photographs', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  status: statusEnum('status').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  stock: integer('stock').notNull(),
  availableAt: timestamp('available_at').notNull()
});

export type SelectPhotograph = typeof photographs.$inferSelect;
export const insertSchema = createInsertSchema(photographs);

export async function getPhotographs(
  search: string,
  offset: number
): Promise<{
  photographs: SelectPhotograph[];
  newOffset: number | null;
  totalPhotographs: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      photographs: await db
        .select()
        .from(photographs)
        .where(ilike(photographs.name, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalPhotographs: 0
    };
  }

  if (offset === null) {
    return { photographs: [], newOffset: null, totalPhotographs: 0 };
  }

  let totalPhotographs = await db.select({ count: count() }).from(photographs);
  let morePhotographs = await db
    .select()
    .from(photographs)
    .limit(5)
    .offset(offset);
  let newOffset = morePhotographs.length >= 5 ? offset + 5 : null;

  return {
    photographs: morePhotographs,
    newOffset,
    totalPhotographs: totalPhotographs[0].count
  };
}

export async function deletePhotographById(id: number) {
  await db.delete(photographs).where(eq(photographs.id, id));
}
