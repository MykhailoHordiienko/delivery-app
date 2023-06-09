'use client';
import Image from 'next/image';
import defaultImg from '../../public/defaultImg.jpeg';
import { useGlobalContext } from '@/app/Context/store';
import { addToOrderStore } from '@/app/Context/storeOperations';
const DishListItem = ({ item }) => {
  const { title, photo, price } = item;
  const { setOrder } = useGlobalContext();

  const handleAddToOrder = () => {
    setOrder(prev => {
      return addToOrderStore(prev, item);
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
      <button
        onClick={handleAddToOrder}
        type="button"
        className="w-full p-2 rounded-xl bg-blue-200 hover:bg-blue-600 focus-visible:bg-blue-600 hover:text-zinc-100 focus-visible:text-zinc-100"
      >
        Add to Cart
      </button>
    </li>
  );
};

export default DishListItem;
