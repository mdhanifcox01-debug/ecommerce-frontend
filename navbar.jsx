import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-orange-600 tracking-wider">
          SHOPHUB
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-6 hidden md:flex">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-full border-2 border-orange-500 rounded-l-full px-4 py-2 focus:outline-none"
          />
          <button className="bg-orange-500 text-white px-6 rounded-r-full font-medium hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* Nav Links & Cart */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-orange-500 font-medium">
            <span className="text-xl mr-1">🛒</span>
            <span>Cart</span>
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
