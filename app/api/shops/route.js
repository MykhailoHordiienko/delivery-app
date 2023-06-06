import { NextResponse } from 'next/server';

const shops = ['MAC', 'KFC', 'BURRITO'];

export async function GET() {
  return NextResponse.json(shops);
}
