'use client';
import { useGlobalContext } from '@/app/Context/store';

import Image from 'next/image';
import defaultImg from '../../public/defaultImg.jpeg';

const CartListItem = ({ item }) => {
  const { title, photo, price, id, quantity } = item;
  const { setData } = useGlobalContext();
  const handleRemove = id => {
    setData(prev => {
      return prev.filter(item => item.id !== id);
    });
  };
  const handleDecrement = () => {
    if (quantity <= 1) {
      return;
    }
    setData(prev => {
      const itemChangedQuantity = prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      return itemChangedQuantity;
    });
  };
  const handleIncrement = () => {
    setData(prev => {
      const itemChangedQuantity = prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return itemChangedQuantity;
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
