import DishList from '@/components/DishList/DishList';
import ShoppingList from '@/components/ShoppingList/ShoppingList';

const ShopPage = ({ params: { shop } }) => {
  return (
    <>
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <ShoppingList title={'Shops:'} />
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        <DishList shop={shop} />
      </section>
    </>
  );
};

export default ShopPage;
