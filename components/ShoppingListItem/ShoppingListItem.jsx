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
        className={`${pathName === hrefTo && 'text-blue-600'}`}
      >
        {shop}
      </Link>
    </li>
  );
};

export default ShoppingListItem;
