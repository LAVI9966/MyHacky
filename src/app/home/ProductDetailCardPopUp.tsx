'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';

const ProductDetailCardPopUp = ({ product, onClose }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row bg-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto relative">
      {/* Close button in top right */}
      <button
        className="absolute top-4 text-black right-4 p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        onClick={onClose}
      >
        <X size={20} />
      </button>

      {/* Left Image Section */}
      <div
        className="flex-1 flex items-center justify-center p-4 overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-full h-full">
          <Image
            src={product?.image || "/Assets/demo-diagram.png"}
            alt="Product"
            width={500}
            height={500}
            className={`rounded-lg h-full transition-transform duration-200 ${isHovering ? 'scale-125' : 'scale-100'
              }`}
          />
        </div>
      </div>

      {/* Right Details Section */}
      <div className="flex-1 space-y-4 px-6 pt-4 lg:pt-0">
        <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">IN STOCK</span>
        <h3 className="text-sm text-gray-500">{product?.level || "Intermediate"}</h3>

        <div className="flex items-center gap-2">
          <div className="text-yellow-400 text-lg">★★★★★</div>
          <span className="text-sm text-gray-500">(0 review)</span>
        </div>

        <h1 className="text-3xl font-semibold text-gray-800">
          {product?.priceRange || "₹199.00 – ₹499.00"}
        </h1>

        <div>
          <label className="block text-sm text-black font-semibold mb-1">Access Period</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 text-sm">
            <option>Choose an option</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
            <button className="text-gray-600 p-1">
              <Minus size={16} />
            </button>
            <span className="px-2 text-gray-500">1</span>
            <button className="text-gray-600 p-1">
              <Plus size={16} />
            </button>
          </div>
          <button className="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold">
            Add to cart
          </button>
        </div>

        <div className="text-sm text-gray-500">SKU: N/A</div>
      </div>
    </div>
  );
};

export default ProductDetailCardPopUp;