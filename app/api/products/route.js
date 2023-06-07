import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

export async function POST() {
  const res = await getProductsFromDb();
  return NextResponse.json(res);
}
