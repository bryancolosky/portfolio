import { projects } from '@/lib/projects';
import { NextRequest, NextResponse } from 'next/server';

interface RouteContext {
  params: Promise<{ id: string }>;
}
export async function GET(
  request: NextRequest,
  context: RouteContext
): Promise<NextResponse> {
  try {
    const { id } = await context.params;
    const project = projects.find((p) => p.id === id);

    if (project) { return NextResponse.json(project); } else {
      return NextResponse.json(
        {
          name: `Not found ${id}`,
          status: 404,
          message: `Project with id: ${id} not found.`
        },
        { status: 404, headers: { Allow: 'GET' } }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
