import ShoppingList from '@/components/ShoppingList/ShoppingList';

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/shops');
  const shops = await req.json();

  return (
    <main className="h-full p-6">
      <ShoppingList
        title={'Chose the Shop'}
        shops={shops}
      />
    </main>
  );
}
