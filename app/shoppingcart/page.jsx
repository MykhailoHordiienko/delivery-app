'use client';
import { useGlobalContext } from '@/app/Context/store';
import CartList from '@/components/CartList/CartList';
import FormCart from '@/components/FormCart/FormCart';
import Link from 'next/link';

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
        {order.length < 1 ? (
          <div className="flex flex-col items-center justify-center gap-8 mx-auto">
            <h1 className="text-6xl">Empty Cart</h1>
            <Link
              href="/"
              className="text-3xl border border-black rounded-md p-3 hover:text-blue-600 focus:text-blue-600"
            >
              Shops
            </Link>
          </div>
        ) : (
          <CartList order={order} />
        )}
      </section>
    </>
  );
};

export default ShoppingCartPage;
