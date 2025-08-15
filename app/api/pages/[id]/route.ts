import { Page, pages } from '@/lib/pages';
import type { Content, ResponseError } from 'interfaces/index';
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
    const page = pages.find((p) => p.id === id);

    if (page) { return NextResponse.json(page); } else {
      return NextResponse.json(
        {
          name: `Not found ${id}`,
          status: 404,
          message: `Page with id: ${id} not found.`
        },
        { status: 404, headers: { Allow: 'GET' } }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export function POST() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

export function PUT() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}

export function DELETE() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET' } }
  );
}
