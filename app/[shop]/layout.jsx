import ShoppingList from '@/components/ShoppingList/ShoppingList';

export default function DashboardLayout({ children }) {
  return (
    <main className="flex gap-4 h-full p-6">
      <ShoppingList />
      <section className="w-full">{children}</section>
    </main>
  );
}
