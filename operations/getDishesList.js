export const getDishesList = async shop => {
  const reqDishes = await fetch('http://localhost:3000/api/dishes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentShop: shop }),
  });
  const dishes = await reqDishes.json();
  return dishes;
};
