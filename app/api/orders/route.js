import { addOrderToDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { orderData } = await request.json();
  await addOrderToDb(orderData);
  return NextResponse.json(orderData);
}
