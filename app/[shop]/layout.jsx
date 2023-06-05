import ShoppingList from '@/components/ShoppingList/ShoppingList';

export default function DashboardLayout({ children }) {
  return (
    <main className="flex gap-4 h-full p-6">
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <ShoppingList title={'Shops:'} />
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        {children}
      </section>
    </main>
  );
}
