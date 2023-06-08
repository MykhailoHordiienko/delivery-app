import ShoppingList from '@/components/ShoppingList/ShoppingList';
import { getProductsFromDb } from '@/db/mongodb/mongoOperations';
// import getProducts from '@/operations/getProducts';

export default async function Home() {
  //   const response = await getProducts();
  const response = await getProductsFromDb();
  console.log(JSON.parse(JSON.stringify(response)));
  const parsedResponse = JSON.parse(JSON.stringify(response));
  const shops = [...Object.keys(...parsedResponse)].slice(1);

  return (
    <main className="h-full p-6">
      <ShoppingList
        title={'Chose the Shop'}
        shops={shops}
      />
    </main>
  );
}
