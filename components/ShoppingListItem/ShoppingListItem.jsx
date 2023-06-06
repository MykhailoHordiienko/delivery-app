'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ShoppingListItem = ({ shop }) => {
  const pathName = usePathname();
  const hrefTo = `/${shop}`;
  return (
    <li>
      <Link
        href={hrefTo}
        className={`${
          pathName === hrefTo && 'text-blue-600'
        } hover:text-blue-600 focus:text-blue-600 block text-center rounded-lg border min-w-[200px]`}
      >
        {shop}
      </Link>
    </li>
  );
};

export default ShoppingListItem;
