import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

const shops = ['MAC', 'KFC', 'BURRITO'];

const ShoppingList = () => {
  return (
    <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
      <h1 className="font-semibold text-center">Shops:</h1>
      <ul className="flex flex-col items-center justify-center gap-8 h-full">
        {shops.map((item, idx) => (
          <ShoppingListItem
            key={idx}
            shop={item}
          />
        ))}
      </ul>
    </aside>
  );
};

export default ShoppingList;
