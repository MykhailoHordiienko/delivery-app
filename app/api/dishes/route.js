import { NextResponse } from 'next/server';

const dishes = {
  MAC: [
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 0 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 1 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 2 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 3 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 4 },
    { title: 'burger', photo: '', price: 5, shop: 'MAC', id: 5 },
  ],
  KFC: [
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 6 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 7 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 8 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 9 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 10 },
    { title: 'wing', photo: '', price: 5, shop: 'KFC', id: 11 },
  ],
  BURRITO: [
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 12 },
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 13 },
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 14 },
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 15 },
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 16 },
    { title: 'BURRITO', photo: '', price: 5, shop: 'BURRITO', id: 17 },
  ],
};

export async function POST(request) {
  const { currentShop } = await request.json();
  const filteredDishes = dishes[currentShop];

  return NextResponse.json(filteredDishes);
}
