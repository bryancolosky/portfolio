import { NextResponse } from 'next/server';
import { Content } from 'interfaces/index';
import { projects } from '@/lib/projects';

export async function GET(): Promise<NextResponse<Content[]>> {
  return NextResponse.json(projects);
}
