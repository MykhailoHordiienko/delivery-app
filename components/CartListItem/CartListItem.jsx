'use client';
import { useGlobalContext } from '@/app/Context/store';

import Image from 'next/image';
import defaultImg from '../../public/defaultImg.jpeg';

const CartListItem = ({ item }) => {
  const { title, photo, price, id, quantity } = item;
  const { data, setData } = useGlobalContext();
  const handleRemove = id => {
    setData(prev => {
      return prev.filter(item => item.id !== id);
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
      <input
        className="w-full h-8 p-2 mt-4 mb-4"
        type="number"
        name="quantity"
        step="1"
        min="1"
        max="10"
        value={quantity}
        onChange={() => console.log('hi')}
      />
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
