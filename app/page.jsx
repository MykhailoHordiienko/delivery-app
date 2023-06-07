import ShoppingList from '@/components/ShoppingList/ShoppingList';
import { getProducts } from '@/operations/getProducts';

export default async function Home() {
  const response = await getProducts();
  const shops = [...Object.keys(response)];

  return (
    <main className="h-full p-6">
      <ShoppingList
        title={'Chose the Shop'}
        shops={shops}
      />
    </main>
  );
}
