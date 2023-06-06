import ShoppingList from '@/components/ShoppingList/ShoppingList';
import { getShopsList } from '@/operations/getShopsList';

export default async function Home() {
  const shops = await getShopsList();

  return (
    <main className="h-full p-6">
      <ShoppingList
        title={'Chose the Shop'}
        shops={shops}
      />
    </main>
  );
}
