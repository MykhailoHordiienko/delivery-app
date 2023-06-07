import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await getProductsFromDb();
    return NextResponse.json(res);
  } catch (error) {
    throw new Error('ERROR IN ROUTE PRODUCTS');
  }
}
