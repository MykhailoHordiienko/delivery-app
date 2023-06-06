'use client';
import { useGlobalContext } from '@/app/Context/store';
import CartList from '@/components/CartList/CartList';
import FormCart from '@/components/FormCart/FormCart';
import normalizeOrder from '@/helpers/normalizeOrder';

const ShoppingCartPage = () => {
  const { data: order } = useGlobalContext();
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const uniqueOrder = normalizeOrder(order);

  return (
    <>
      <aside className="w-80 p-6 h-full mx-auto border border-black rounded-lg">
        <FormCart />
        <p className="mx-auto mt-9">Total Prise: {totalPrice}$</p>
      </aside>
      <section className="p-6 w-full overflow-x-scroll rounded-lg flex border border-black bg-zinc-100">
        <CartList order={uniqueOrder} />
      </section>
    </>
  );
};

export default ShoppingCartPage;
