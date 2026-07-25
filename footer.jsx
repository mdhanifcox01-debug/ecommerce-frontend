import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-black text-orange-500 tracking-wider">SHOPHUB</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover trending products, wholesale prices, and lightning-fast delivery right at your fingertips.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-orange-500">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-orange-500">Help Center</Link></li>
            <li><Link href="#" className="hover:text-orange-500">Track Your Order</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-orange-500">All Products</Link></li>
            <li><Link href="/cart" className="hover:text-orange-500">My Cart</Link></li>
            <li><Link href="/checkout" className="hover:text-orange-500">Checkout</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-3">Secure Payments</h3>
          <p className="text-sm text-gray-400 mb-2">We support bKash, Nagad, Cards & Cash on Delivery.</p>
          <div className="flex space-x-2 text-xl">
            <span>💳</span>
            <span>📱</span>
            <span>💵</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; 2026 SHOPHUB. All rights reserved.
      </div>
    </footer>
  );
}
