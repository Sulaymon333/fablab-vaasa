import Link from 'next/link';
import Checkout from './Checkout';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { selectItems } from '../slices/basketSlice';

function Header() {
    const [mouseEntered, setMouseEntered] = useState(false);
    const items = useSelector(selectItems);

    const handleClick = () => {
        setMouseEntered(!mouseEntered);
    };

    return (
        <header className="sticky top-0 z-40 p-6 bg-yellow-300">
            <nav className="flex justify-between mx-auto text-gray-700 max-w-screen-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-bold hover:border-b-0 link">FablabVaasa</h1>
                </Link>
                <ul className="flex items-center space-x-5">
                    <li className="link">English</li>
                    <li className="link">Finnish</li>
                    <li className="relative flex items-center" onClick={handleClick}>
                        <span className="absolute w-5 h-5 text-sm font-bold text-center text-gray-700 bg-white rounded-full -right-2 -top-2">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-8 text-gray-600" />
                    </li>
                </ul>
                {mouseEntered && <Checkout basketItems={items} />}
            </nav>
        </header>
    );
}

export default Header;
