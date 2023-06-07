'use client';
import { useGlobalContext } from '@/app/Context/store';
import CartList from '@/components/CartList/CartList';
import FormCart from '@/components/FormCart/FormCart';

const ShoppingCartPage = () => {
  const { order } = useGlobalContext();
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <FormCart />
        <p className="mx-auto mt-9">Total Prise: {totalPrice}$</p>
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        <CartList order={order} />
      </section>
    </>
  );
};

export default ShoppingCartPage;
