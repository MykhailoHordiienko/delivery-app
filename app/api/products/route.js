import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await getProductsFromDb();
  try {
    return NextResponse.json(res);
  } catch (error) {
    throw new Error('ERROR IN ROUTE PRODUCTS');
  }
}
