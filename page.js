'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import apiClient from '@/utils/api';

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend theke shob product fetch korar jonno
    apiClient.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log('Error fetching products:', err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Explore All Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Filter */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 h-fit">
            <h3 className="font-bold text-gray-700 mb-3">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><label className="flex items-center space-x-2"><input type="checkbox" /> <span>Electronics</span></label></li>
              <li><label className="flex items-center space-x-2"><input type="checkbox" /> <span>Fashion & Clothing</span></label></li>
              <li><label className="flex items-center space-x-2"><input type="checkbox" /> <span>Home & Kitchen</span></label></li>
              <li><label className="flex items-center space-x-2"><input type="checkbox" /> <span>Beauty & Health</span></label></li>
            </ul>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              // Fallback cards jodi backend data na thake
              <>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
