import { NextResponse } from 'next/server';

const dishes = {
  MAC: [
    { title: 'burger', photo: '', price: 5 },
    { title: 'burger', photo: '', price: 5 },
    { title: 'burger', photo: '', price: 5 },
    { title: 'burger', photo: '', price: 5 },
    { title: 'burger', photo: '', price: 5 },
    { title: 'burger', photo: '', price: 5 },
  ],
  KFC: [
    { title: 'wing', photo: '', price: 5 },
    { title: 'wing', photo: '', price: 5 },
    { title: 'wing', photo: '', price: 5 },
    { title: 'wing', photo: '', price: 5 },
    { title: 'wing', photo: '', price: 5 },
    { title: 'wing', photo: '', price: 5 },
  ],
  BURRITO: [
    { title: 'BURRITO', photo: '', price: 5 },
    { title: 'BURRITO', photo: '', price: 5 },
    { title: 'BURRITO', photo: '', price: 5 },
    { title: 'BURRITO', photo: '', price: 5 },
    { title: 'BURRITO', photo: '', price: 5 },
    { title: 'BURRITO', photo: '', price: 5 },
  ],
};

export async function POST(request) {
  const { currentShop } = await request.json();
  const filteredDishes = dishes[currentShop];

  return NextResponse.json(filteredDishes);
}
