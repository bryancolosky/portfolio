import { NextResponse } from 'next/server';
import { Content } from 'interfaces/index';
import { studiocraft } from '@/lib/pages';

export async function GET(): Promise<NextResponse<Content[]>> {
  return NextResponse.json(studiocraft);
}
