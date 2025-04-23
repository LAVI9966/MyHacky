'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SearchCheck } from 'lucide-react';
import Image from 'next/image';

export default function Related_product() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Default sorting');

    const sortOptions = [
        'Default sorting',
        'Sort by popularity',
        'Sort by latest',
        'Sort by price: low to high',
        'Sort by price: high to low'
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option: string) => {
        setSelectedSort(option);
        setIsDropdownOpen(false);
    };

    const products = [
        {
            title: '(Pre–Launch) CETP : Certified Evasion Techniques Professional',
            image: '/Assets/AAD.avif',
            price: '₹199.00 – ₹499.00',
            rating: 5
        },
        {
            title: '[March 2025] Bootcamp CRTE : Attacking and Defending Active Directory: Advanced Edition',
            image: '/Assets/AAD.avif',
            price: '₹199.00 – ₹499.00',
            rating: 5
        },
        {
            title: 'CRTE : Windows Red Team Lab',
            image: '/Assets/AAD.avif',
            price: '₹199.00 – ₹499.00',
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-white px-6 md:px-16 py-10 text-[#1c2b36]">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm text-gray-500 mb-2">Home / Intermediate</p>
                <h1 className="text-4xl font-bold mb-8">Intermediate</h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                        <SearchCheck className="text-blue-600 w-5 h-5" />
                        <span>Showing all 3 results</span>
                    </div>

                    <div className="relative">
                        <div
                            className="flex items-center space-x-1 text-sm text-gray-500 cursor-pointer border border-gray-200 rounded px-3 py-2 hover:bg-gray-50"
                            onClick={toggleDropdown}
                        >
                            <span>{selectedSort}</span>
                            <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-1 w-64 bg-white border border-gray-200 rounded shadow-lg z-10">
                                <ul>
                                    {sortOptions.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${selectedSort === option ? 'text-blue-600 font-medium' : 'text-gray-700'}`}
                                            onClick={() => selectOption(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Product Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-white rounded overflow-hidden shadow-md">
                                <div className="relative w-full h-60">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                </div>
                                <div className="py-4 px-2">
                                    <p className="text-sm text-gray-500 mb-1">Intermediate</p>
                                    <h3 className="text-base font-medium mb-1">{product.title}</h3>
                                    <div className="flex justify-center mb-1">
                                        {Array.from({ length: product.rating }).map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current text-yellow-400" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.567-.955L10 0l2.944 5.955 6.567.955-4.755 4.635 1.122 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-base font-semibold text-[#1c2b36] mb-4">{product.price}</p>
                                    <button className="bg-yellow-400 hover:bg-yellow-300 transition font-semibold py-2 px-6 rounded-full text-[#1c2b36]">
                                        Select options
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}