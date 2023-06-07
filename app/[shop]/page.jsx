import DishList from '@/components/DishList/DishList';
import ShoppingList from '@/components/ShoppingList/ShoppingList';
import getProducts from '@/operations/getProducts';

const ShopPage = async ({ params: { shop } }) => {
  const response = await getProducts();
  const shops = [...Object.keys(...response)].slice(1);
  const dishes = response[0][shop];

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
