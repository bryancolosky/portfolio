import { NextResponse } from 'next/server';
import { Content } from 'interfaces/index';
import { pages } from '@/lib/pages';

export async function GET(): Promise<NextResponse<Content[]>> {
  return NextResponse.json(pages);
}
