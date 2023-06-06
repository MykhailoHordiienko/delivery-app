import DishList from '@/components/DishList/DishList';
import ShoppingList from '@/components/ShoppingList/ShoppingList';

const ShopPage = async ({ params: { shop } }) => {
  const reqShop = await fetch('http://localhost:3000/api/shops');
  const shops = await reqShop.json();
  const reqDishes = await fetch('http://localhost:3000/api/dishes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentShop: shop }),
  });
  const dishes = await reqDishes.json();
  //   console.log(dishes);

  return (
    <>
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <ShoppingList
          title={'Shops:'}
          shops={shops}
        />
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        <DishList dishes={dishes} />
      </section>
    </>
  );
};

export default ShopPage;
