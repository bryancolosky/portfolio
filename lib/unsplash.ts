import 'server-only';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, text, pgEnum, serial } from 'drizzle-orm/pg-core';
import { count, eq, ilike } from 'drizzle-orm';
import { createInsertSchema } from 'drizzle-zod';

export const db = drizzle(neon(process.env.POSTGRES_URL!));

export const orientationEnum = pgEnum('orientation', [
  'portrait',
  'landscape',
  'square'
]);

export const unsplash = pgTable('unsplash', {
  id: serial('id').primaryKey(),
  imageUrl: text('image_url').notNull(),
  name: text('name').notNull(),
  orientation: orientationEnum('orientation').notNull()
});

export type SelectPhotograph = typeof unsplash.$inferSelect;
export const insertProductSchema = createInsertSchema(unsplash);

export async function getPhotographs(
  search: string,
  offset: number
): Promise<{
  unsplash: SelectPhotograph[];
  newOffset: number | null;
  totalPhotographs: number;
}> {
  // Always search the full table, not per page
  if (search) {
    return {
      unsplash: await db
        .select()
        .from(unsplash)
        .where(ilike(unsplash.name, `%${search}%`))
        .limit(1000),
      newOffset: null,
      totalPhotographs: 0
    };
  }

  if (offset === null) {
    return { unsplash: [], newOffset: null, totalPhotographs: 0 };
  }

  let totalPhotographs = await db.select({ count: count() }).from(unsplash);
  let morePhotographs = await db
    .select()
    .from(unsplash)
    .limit(10)
    .offset(offset);
  let newOffset = morePhotographs.length >= 10 ? offset + 10 : null;

  return {
    unsplash: morePhotographs,
    newOffset,
    totalPhotographs: totalPhotographs[0].count
  };
}

export async function deletePhotographById(id: number) {
  await db.delete(unsplash).where(eq(unsplash.id, id));
}
