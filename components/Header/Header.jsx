'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathName = usePathname();

  return (
    <header className="h-12 flex items-center justify-center bg-zinc-100">
      <nav className="flex gap-6 items-center justify-center ">
        <Link
          href="/"
          className={`${
            pathName !== '/shoppingcart' && 'text-blue-600'
          } hover:text-blue-600 focus:text-blue-600`}
        >
          Shop
        </Link>
        <Link
          href="/shoppingcart"
          className={`${
            pathName === '/shoppingcart' && 'text-blue-600'
          } hover:text-blue-600 focus:text-blue-600`}
        >
          Shopping Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
