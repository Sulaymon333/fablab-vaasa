import Link from 'next/link';

function Header() {
    return (
        <header className="p-6 bg-yellow-300">
            <nav className="flex justify-between mx-auto text-gray-700 max-w-screen-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-bold hover:border-b-0 link">FablabVaasa</h1>
                </Link>
                <ul className="flex items-center space-x-5">
                    <li className="link">English</li>
                    <li className="link">Finnish</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
