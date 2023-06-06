import CartList from '@/components/CartList/CartList';
import FormCart from '@/components/FormCart/FormCart';
import dishes from '@/dishes';

const ShoppingCartPage = () => {
  return (
    <>
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <FormCart />
        <p className="mx-auto mt-9">Total Prise</p>
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        <CartList order={dishes['MAC']} />
      </section>
    </>
  );
};

export default ShoppingCartPage;
