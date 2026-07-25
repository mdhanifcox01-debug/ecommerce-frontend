import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product?._id || product?.id || 1}`} className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100 flex flex-col">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={product?.image || "https://via.placeholder.com/300"}
          alt={product?.title || "Product"}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -50%
        </span>
      </div>

      {/* Product Details */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product?.title || "Trendy Summer Fashion Casual T-Shirt for Men & Women"}
        </h3>
        
        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-orange-600">৳{product?.price || 450}</span>
            <span className="text-xs text-gray-400 line-through">৳{product?.oldPrice || 900}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">⭐ 4.8 (1.2k sold)</div>
        </div>
      </div>
    </Link>
  );
}
