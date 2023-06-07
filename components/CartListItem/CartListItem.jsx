'use client';
import { useGlobalContext } from '@/app/Context/store';
import Image from 'next/image';
import defaultImg from '../../public/defaultImg.jpeg';
import {
  decrementOrderStore,
  incrementOrderStore,
  removeFromOrderStore,
} from '@/app/Context/storeOperations';

const CartListItem = ({ item }) => {
  const { title, photo, price, id, quantity } = item;
  const { setOrder } = useGlobalContext();

  const handleRemove = id => {
    setOrder(prev => {
      return removeFromOrderStore(prev, id);
    });
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      return;
    }
    setOrder(prev => {
      return decrementOrderStore(prev, id);
    });
  };
  const handleIncrement = () => {
    setOrder(prev => {
      return incrementOrderStore(prev, id);
    });
  };

  return (
    <li>
      <Image
        className="w-[300px] rounded-md"
        src={photo ? photo : defaultImg}
        alt="product image"
      />
      <div className="p-2 flex justify-between">
        <h2>{title}</h2>
        <p>Price : {price} $</p>
      </div>
      <div className="flex justify-around p-2">
        <button
          onClick={handleIncrement}
          className="w-14 p-2 rounded-xl bg-blue-200 hover:bg-blue-600 focus-visible:bg-blue-600 hover:text-zinc-100 focus-visible:text-zinc-100"
          type="button"
        >
          +
        </button>
        <p className="text-center font-bold">{quantity}</p>
        <button
          onClick={handleDecrement}
          disabled={quantity <= 1}
          className="w-14 p-2 rounded-xl bg-blue-200 hover:bg-blue-600 focus-visible:bg-blue-600 hover:text-zinc-100 focus-visible:text-zinc-100 disabled:opacity-25"
          type="button"
        >
          -
        </button>
      </div>
      <button
        onClick={() => handleRemove(id)}
        type="button"
        className="w-full p-2 rounded-xl bg-blue-200 hover:bg-blue-600 focus-visible:bg-blue-600 hover:text-zinc-100 focus-visible:text-zinc-100"
      >
        Remove
      </button>
    </li>
  );
};

export default CartListItem;
