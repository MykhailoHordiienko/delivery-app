import ShoppingList from '@/components/ShoppingList/ShoppingList';
import { getProductsFromDb } from '@/db/mongodb/mongoOperations';

export default async function Home() {
  const response = await getProductsFromDb();
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
