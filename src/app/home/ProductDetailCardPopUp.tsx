'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/Context/CartContext';

// Define the Course type to match your data structure
type Course = {
  _id: string
  title: string
  category: string
  prices: string
  bootcampAvailability: string
  courseDetails: {
    overview: string
    accessPeriod: {
      days: string
      price: string
      _id: string
    }[]
    gcbLab: {
      image: string
      labs: {
        title: string
        description: string
        imageUrl: string
        _id: string
      }[]
    }
    onDemandLab: {
      title: string
      price: string
      _id: string
    }[]
  }
  author: {
    title: string
    description: string
    imageUrl: string
  }
  termsAndConditions: string[]
  howLearn: {
    title: string
    points: string[]
    _id: string
  }[]
  certification: {
    title: string
    description: string
    image: string
    _id: string
  }[]
  createdAt: string
  updatedAt: string
  __v: number
}

// Pop-up modal component for success message
const PopupModal = ({
  isVisible,
  onClose,
  onGoToCart,
}: {
  isVisible: boolean;
  onClose: () => void;
  onGoToCart: () => void;
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent backdrop-brightness-50 bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center">
            ✔
          </div>
          <p className="text-gray-700 font-medium">Product added to cart successfully!</p>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-[#007BBA] text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
          >
            OK
          </button>
          <button
            onClick={onGoToCart}
            className="bg-[#007BBA] text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
          >
            Go to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductDetailCardPopUp = ({ product, onClose }: { product: Course, onClose: () => void }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [accessPeriod, setAccessPeriod] = useState(
    product?.courseDetails?.accessPeriod?.[0]?._id || ""
  );
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  const handleGoToCart = () => {
    window.location.href = "/cart";
  };

  const handleAddToCart = () => {
    // Find the selected access period object
    const selectedAccessPeriod = product.courseDetails.accessPeriod.find(p => p._id === accessPeriod);

    if (!selectedAccessPeriod) {
      alert('Please select an access period');
      return;
    }

    // Add to cart using the cart context with the exact same structure as SingleCourseCard
    addToCart({
      id: product._id,
      title: product.title,
      quantity,
      price: Number(selectedAccessPeriod.price),
      accessId: accessPeriod,
      accessDays: selectedAccessPeriod.days,
      imageUrl: product.courseDetails.gcbLab.image || '/Assets/Shield.avif'
    });

    setShowModal(true);
  };

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
            src={product?.courseDetails?.gcbLab?.image || "/Assets/demo-diagram.png"}
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
        <h3 className="text-sm text-gray-500">{product?.category || "Intermediate"}</h3>

        <div className="flex items-center gap-2">
          <div className="text-yellow-400 text-lg">★★★★★</div>
          <span className="text-sm text-gray-500">(0 review)</span>
        </div>

        <h1 className="text-3xl font-semibold text-gray-800">
          ₹{product?.courseDetails?.accessPeriod?.[0]?.price || "199.00"} – ₹{product?.courseDetails?.accessPeriod?.[product?.courseDetails?.accessPeriod?.length - 1]?.price || "499.00"}
        </h1>

        <div>
          <label className="block text-sm text-black font-semibold mb-1">Access Period</label>
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 text-sm"
            value={accessPeriod}
            onChange={(e) => setAccessPeriod(e.target.value)}
          >
            <option value="">Choose an option</option>
            {product?.courseDetails?.accessPeriod?.map((option) => (
              <option key={option._id} value={option._id}>
                {option.days} Days - ₹{option.price}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1">
            <button
              className="text-gray-600 p-1"
              onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
            >
              <Minus size={16} />
            </button>
            <span className="px-2 text-gray-500">{quantity}</span>
            <button
              className="text-gray-600 p-1"
              onClick={() => setQuantity(prev => prev + 1)}
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            className="bg-yellow-300 text-black px-6 py-2 rounded-lg font-semibold"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>

        <div className="text-sm text-gray-500">SKU: N/A</div>
      </div>

      {/* Success Modal */}
      <PopupModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        onGoToCart={handleGoToCart}
      />
    </div>
  );
};

export default ProductDetailCardPopUp;