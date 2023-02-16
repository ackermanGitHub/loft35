const Header = () => {
  return <></>;
};

export default Header;

/* 
import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Loft35Sign from '@/components/Loft35_sign';
import { useSession, signOut } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import { Store } from '@/context/Store';
import Cookies from 'js-cookie';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const { status, data: session } = useSession();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => a + (c.quantity || 0), 0)
    );
  }, [cart.cartItems]);

  const logoutHandler = () => {
    Cookies.remove('cart');
    dispatch({
      type: 'CART_RESET',
      payload: undefined,
    });
    signOut({ callbackUrl: '/' });
  };

  return (
    <nav className="flex h-12 items-center px-4 justify-end shadow-md mt-2">
      <div className="flex h-8 items-center">
        <Loft35Sign></Loft35Sign>
        <Link href="/" className="mx-2">
          <Image
            src="/icons/instagram.svg"
            alt="Dirección del Instagram"
            className={'Instagram'}
            width={18}
            height={18}
            priority
          />
        </Link>
        <Link href="/" className="mx-2">
          <Image
            src="/icons/facebook.svg"
            alt="Dirección del Facebook"
            className={'Facebook'}
            width={18}
            height={18}
            priority
          />
        </Link>
        <Link href="/cart" className="mx-2 relative">
          <Image
            src="/icons/cart.svg"
            alt="Carrito de Compras"
            className={'shopping-cart'}
            width={18}
            height={18}
            priority
          />
          {cartItemsCount > 0 && (
            <span className="text-5xs absolute top-3 left-2 text-center rounded-full bg-red-600 text-white w-3 h-3">
              {cartItemsCount}
            </span>
          )}
        </Link>
        <h1 className="">
          {status === 'loading' ? (
            <></>
          ) : session?.user ? (
            <Menu as="div" className="relative inline-block">
              <Menu.Button className="text-blue-600">
                {session.user.name}
              </Menu.Button>
              <Menu.Items className="absolute right-0 w-32 origin-top-right bg-white shadow-lg">
                <Menu.Item>
                  <Link className="flex p-2 hover:bg-gray-200" href="/profile">
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    className="flex p-2 hover:bg-gray-200"
                    href="/#"
                    onClick={logoutHandler}
                  >
                    Logout
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/login" className="mx-2">
              Login
            </Link>
          )}
        </h1>
      </div>
    </nav>
  );
};

export default Header;

*/
