import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
import { NextResponse } from 'next/server';

const dishes = {
  MAC: [
    { title: 'Burger1', photo: '', price: 5, shop: 'MAC', id: 0, quantity: 1 },
    { title: 'Burger2', photo: '', price: 5, shop: 'MAC', id: 1, quantity: 1 },
    { title: 'Burger3', photo: '', price: 5, shop: 'MAC', id: 2, quantity: 1 },
    { title: 'Burger4', photo: '', price: 5, shop: 'MAC', id: 3, quantity: 1 },
    { title: 'Burger5', photo: '', price: 5, shop: 'MAC', id: 4, quantity: 1 },
    { title: 'Burger6', photo: '', price: 5, shop: 'MAC', id: 5, quantity: 1 },
  ],
  KFC: [
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 6, quantity: 1 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 7, quantity: 1 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 8, quantity: 1 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 9, quantity: 1 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 10, quantity: 1 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 11, quantity: 1 },
  ],
  BURRITO: [
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 12,
      quantity: 1,
    },
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 13,
      quantity: 1,
    },
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 14,
      quantity: 1,
    },
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 15,
      quantity: 1,
    },
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 16,
      quantity: 1,
    },
    {
      title: 'BURRITO',
      photo: '',
      price: 5,
      shop: 'BURRITO',
      id: 17,
      quantity: 1,
    },
  ],
};

export async function GET() {
  const res = await getProductsFromDb();

  return NextResponse.json(res);
}
