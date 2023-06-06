import React from 'react';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

const ShoppingList = ({ title, shops }) => {
  return (
    <>
      <h1 className="font-semibold text-center">{title}</h1>
      <ul className="flex flex-col items-center justify-center gap-8 h-full">
        {shops.map((item, idx) => (
          <ShoppingListItem
            key={idx}
            shop={item}
          />
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
