'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useGlobalContext } from '@/app/Context/store';

const ShoppingListItem = ({ shop }) => {
  const pathName = usePathname();
  const { data } = useGlobalContext();
  const hrefTo = `/${shop}`;
  console.log(data[0]?.shop === shop);
  console.log(shop);
  const disabled = data.length >= 0 || data[0].shop === shop;
  return (
    <li>
      <Link
        href={hrefTo}
        className={`${pathName === hrefTo && 'text-blue-600'} ${
          !disabled && 'pointer-events-none opacity-25'
        } hover:text-blue-600 focus:text-blue-600 block text-center rounded-lg border min-w-[200px]`}
      >
        {shop}
      </Link>
    </li>
  );
};

export default ShoppingListItem;
