import ShoppingList from '@/components/ShoppingList/ShoppingList';

export default function Home() {
  return (
    <main className="h-full p-6">
      <ShoppingList title={'Chose the Shop'} />
    </main>
  );
}
