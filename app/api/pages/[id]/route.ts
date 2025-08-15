import { NextApiRequest, NextApiResponse } from 'next';
import { Page, pages } from '@/lib/pages';
import type { Content, ResponseError } from 'interfaces/index';
import { NextResponse } from 'next/server';

export type NotFoundResponse = ResponseError;

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<NextResponse<Content | ResponseError>> {
  const { id } = await params;
  const page = pages.find((p) => p.id === id);

  if (page) {
    return NextResponse.json(page);
  } else {
    return NextResponse.json(
      {
        name: `Not found ${id}`,
        status: 404,
        message: `Page with id: ${id} not found.`
      },
      { status: 404, headers: { Allow: 'GET' } }
    );
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
