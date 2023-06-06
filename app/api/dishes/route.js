import { NextResponse } from 'next/server';

const dishes = {
  MAC: [
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 0, quantity: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 1, quantity: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 2, quantity: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 3, quantity: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 4, quantity: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 5, quantity: 1 },
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

export async function POST(request) {
  const { currentShop } = await request.json();
  const filteredDishes = dishes[currentShop];

  return NextResponse.json(filteredDishes);
}
