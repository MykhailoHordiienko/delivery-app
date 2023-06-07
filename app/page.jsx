import ShoppingList from '@/components/ShoppingList/ShoppingList';
import getBasePathForFetch from '@/helpers/getBasePathForFetch';
// import { getProducts } from '@/operations/getProducts';

export default async function Home() {
  //   const response = await getProducts();
  const res = await fetch(`${getBasePathForFetch()}/api/products`);
  const response = await res.json();
  const shops = [...Object.keys(...response)].slice(1);

  return (
    <main className="h-full p-6">
      <ShoppingList
        title={'Chose the Shop'}
        shops={shops}
      />
    </main>
  );
}
