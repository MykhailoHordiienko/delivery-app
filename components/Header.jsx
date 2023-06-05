'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <header className="p-6 bg-zinc-100">
      <nav className="flex gap-6 items-center justify-center ">
        <Link
          href="/"
          className={`${pathName === '/' && 'text-blue-600'}`}
        >
          Shop
        </Link>
        <Link
          href="/shoppingcart"
          className={`${pathName === '/shoppingcart' && 'text-blue-600'}`}
        >
          Shopping Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
