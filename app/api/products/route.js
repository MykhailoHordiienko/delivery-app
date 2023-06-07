import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await getProductsFromDb();

  return NextResponse.json(res);
}
