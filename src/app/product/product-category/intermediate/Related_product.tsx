'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag } from 'lucide-react';
import { SearchCheck } from 'lucide-react';
import Image from 'next/image';
import { useFilter } from '../../../../Context/FilterContext'; // Make sure path matches your project structure

// Using the same Course type from FilterContext
interface Course {
    _id: string;
    title: string;
    category: string;
    prices: string;
    bootcampAvailability: string;
    courseDetails: {
        overview: string;
        accessPeriod: {
            days: string;
            price: string;
            _id: string;
        }[];
        gcbLab: {
            image: string;
            labs: {
                title: string;
                description: string;
                imageUrl: string;
                _id: string;
            }[];
        };
        onDemandLab: {
            title: string;
            price: string;
            _id: string;
        }[];
    };
    author: {
        title: string;
        description: string;
        imageUrl: string;
    };
    termsAndConditions: string[];
    howLearn: {
        title: string;
        points: string[];
        _id: string;
    }[];
    certification: {
        title: string;
        description: string;
        image: string;
        _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function Related_product() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Default sorting');

    // Get the filter context
    const {
        filteredProducts,
        allProducts,
        loading,
        error,
        setSelectedDifficulty
    } = useFilter();

    // Set the filter to "intermediate" when component mounts
    useEffect(() => {
        setSelectedDifficulty("intermediate");
    }, [setSelectedDifficulty]);

    // Filter only intermediate category courses
    const intermediateProducts = allProducts.filter(
        (product: Course) => product.category.toLowerCase() === 'intermediate'
    );

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

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-white px-6 md:px-16 py-10 text-[#1c2b36]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm text-gray-500 mb-2"> <span
                        className='cursor-pointer'
                        onClick={() => {
                            window.location.href = '/home';
                        }}
                    >
                        Home
                    </span>  / Intermediate</p>
                    <h1 className="text-4xl font-bold mb-8">Intermediate</h1>
                    <div className="flex justify-center items-center h-64">
                        <p className="text-lg">Loading courses...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className="min-h-screen bg-white px-6 md:px-16 py-10 text-[#1c2b36]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm text-gray-500 mb-2"> <span
                        className='cursor-pointer'
                        onClick={() => {
                            window.location.href = '/home';
                        }}
                    >
                        Home
                    </span>  / Intermediate</p>
                    <h1 className="text-4xl font-bold mb-8">Intermediate</h1>
                    <div className="flex justify-center items-center h-64">
                        <p className="text-lg text-red-500">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-6 md:px-16 py-10 text-[#1c2b36]">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm text-gray-500 mb-2"> <span
                    className='cursor-pointer'
                    onClick={() => {
                        window.location.href = '/home';
                    }}
                >
                    Home
                </span>  / Intermediate</p>
                <h1 className="text-4xl font-bold mb-8">Intermediate</h1>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                        <SearchCheck className="text-blue-600 w-5 h-5" />
                        <span>Showing {intermediateProducts.length} results</span>
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
                    {intermediateProducts.map((product: Course, index: number) => (
                        <div key={product._id} className="text-left group">
                            <div className="bg-white rounded overflow-hidden shadow-md relative">
                                <div className="relative w-full h-60">
                                    <Image
                                        src={product.courseDetails?.gcbLab?.image || '/Assets/AAD.avif'}
                                        alt={product.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-contain"
                                        priority={index === 0}
                                    />
                                    <div
                                        className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow"

                                        onClick={() => {
                                            if (product) {
                                                // Store the entire course object in localStorage
                                                localStorage.setItem('selectedCourse', JSON.stringify(product));

                                                // Redirect to product page
                                                window.location.href = '/product';
                                            }
                                        }}
                                    >
                                        <ShoppingBag className="w-5 h-5 text-[#1c2b36] cursor-pointer" />
                                    </div>
                                </div>
                                <div className="py-4 px-2">
                                    <p className="text-sm text-gray-500 mb-1">Intermediate</p>
                                    <h3 className="text-base font-medium mb-1">{product.title}</h3>
                                    <div className="flex justify-left mb-1">
                                        {/* If you have a rating field, use it here */}
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current text-gray-600" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.567-.955L10 0l2.944 5.955 6.567.955-4.755 4.635 1.122 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    {/* <p className="text-base font-semibold text-[#1c2b36] mb-4">{product.prices}</p> */}
                                    <p className="text-lg font-semibold text-gray-600 mb-4">₹199.00 – ₹499.00</p>
                                    <button onClick={() => {
                                        if (product) {
                                            // Store the entire course object in localStorage
                                            localStorage.setItem('selectedCourse', JSON.stringify(product));

                                            // Redirect to product page
                                            window.location.href = '/product';
                                        }
                                    }} className="bg-yellow-400 hover:bg-yellow-300 transition font-semibold py-2 px-6 rounded-full text-[#1c2b36]">
                                        Select options
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message if no products found */}
                {intermediateProducts.length === 0 && (
                    <div className="mt-12 flex justify-center">
                        <p className="text-lg text-gray-600">No Intermediate courses found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}