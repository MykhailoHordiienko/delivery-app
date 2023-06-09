import DishList from '@/components/DishList/DishList';
import ShoppingList from '@/components/ShoppingList/ShoppingList';
import { getProductsFromDb } from '@/db/mongodb/mongoOperations';

const ShopPage = async ({ params: { shop } }) => {
  const response = await getProductsFromDb();
  const parsedResponse = JSON.parse(JSON.stringify(response));

  const shops = [...Object.keys(...parsedResponse)].slice(1);
  const dishes = parsedResponse[0][shop];

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
