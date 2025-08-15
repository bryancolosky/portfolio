'use server';

import { revalidatePath } from 'next/cache';

import { deletePhotographById } from '@/lib/db';

export async function deletePhotograph(formData: FormData) {
  let id = Number(formData.get('id'));
  await deletePhotographById(id);
  revalidatePath('/');
}
