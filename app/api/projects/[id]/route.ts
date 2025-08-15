import { NextResponse } from 'next/server';
import { projects } from '@/lib/projects';
import type { Content, ResponseError } from 'interfaces/index';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<Content | ResponseError>> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json(
      {
        name: `Not found ${id}`,
        status: 404,
        message: `Project with id: ${id} not found.`
      },
      { status: 404 }
    );
  }
}
