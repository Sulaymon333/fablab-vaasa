import Link from 'next/link';

function Header() {
    return (
        <header className="p-6 bg-yellow-300">
            <nav className="flex justify-between mx-auto text-gray-700 max-w-screen-2xl ">
                <div>
                    <h1 className="text-4xl font-bold">FablabVaasa</h1>
                </div>
                <ul className="flex items-center space-x-5">
                    <Link href="/en" className="p-0 m-0">
                        <li>English</li>
                    </Link>
                    <Link href="/fi">
                        <li>Finnish</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
