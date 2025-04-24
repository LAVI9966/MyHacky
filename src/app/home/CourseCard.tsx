"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// Define Course type based on your data structure
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

// Define the prop type for the component
interface CourseCardProps {
    course?: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Add the keyframes for the shine animation to the document
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shine {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            // Clean up the style element when component unmounts
            document.head.removeChild(style);
        };
    }, []);

    // Default course data in case no course is provided
    const defaultCourse = {
        level: "Not Specified",
        title: "Course Not Available",
        image: "/Assets/AAD.avif",
        reviews: 0,
        description: "This is a placeholder description for when no course data is provided.",
        price: "₹199 - ₹499"
    };

    // Parse price range from course prices
    const getPriceRange = (priceStr?: string): string => {
        if (!priceStr) return defaultCourse.price;

        // If the price already contains a range format (e.g. "₹199.00 - ₹499.00")
        if (priceStr.includes("-")) return priceStr;

        // Try to extract prices from access periods if available
        if (course?.courseDetails?.accessPeriod && course.courseDetails.accessPeriod.length > 0) {
            const prices = course.courseDetails.accessPeriod
                .map(period => parseFloat(period.price.replace(/[^\d.]/g, "")))
                .filter(price => !isNaN(price));

            if (prices.length > 0) {
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);

                if (minPrice === maxPrice) {
                    return `₹${minPrice}`;
                }

                return `₹${minPrice} - ₹${maxPrice}`;
            }
        }

        // If we can't extract a range, just return the original price
        return priceStr;
    };

    // Use the course data if available, otherwise use default
    const displayData = course ? {
        level: course.category,
        title: course.title,
        image: course.courseDetails.gcbLab.image, // Default image
        reviews: 0, // Default reviews
        description: course.courseDetails?.overview || defaultCourse.description,
        price: getPriceRange(course.prices)
    } : defaultCourse;

    // Function to handle product page redirection (original behavior)
    const handleProductRedirection = () => {
        if (!course) return;

        // Store the entire course object in localStorage
        localStorage.setItem('selectedCourse', JSON.stringify(course));

        // Redirect to product page
        window.location.href = '/product';
    };

    return (
        <div
            className="bg-[#001123] flex flex-col items-center gap-3 text-white p-4 rounded-md max-w-6xl mx-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image with shine effect */}
            <div className="relative w-full overflow-hidden rounded-md">
                {/* Shine overlay - only appears when hovered */}
                {hovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-10 
                        -translate-x-full animate-shine"
                        style={{
                            animation: "shine 1s ease forwards"
                        }} />
                )}

                {/* Next.js Image component */}
                <div className="relative w-full ">
                    <Image
                        src={displayData.image}
                        alt={displayData.title}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover rounded-md"
                        priority
                    />
                </div>
            </div>

            {/* Level with category-based routing */}
            <div
                className="text-sm text-gray-300 mt-3 underline cursor-pointer hover:text-amber-500 transition-colors"
                onClick={() => {
                    if (!course) return;

                    // Get the normalized category (lowercase for case insensitivity)
                    const category = course.category.toLowerCase();

                    // Redirect based on category/level
                    if (category === 'beginner') {
                        window.location.href = '/product/product-category/beginner';
                    } else if (category === 'intermediate') {
                        window.location.href = '/product/product-category/intermediate';
                    } else if (category === 'advanced') {
                        window.location.href = '/product/product-category/advanced';
                    } else {
                        // Fallback to product page if category doesn't match expected values
                        window.location.href = '/product';
                    }
                }}
            >
                {displayData.level}
            </div>

            {/* Title with Product Page Link (original behavior) */}
            <h2
                className="text-2xl font-bold mt-1 underline cursor-pointer hover:text-amber-500 transition-colors"
                onClick={handleProductRedirection}
            >
                {displayData.title}
            </h2>

            {/* Reviews */}
            <p className="text-sm mt-1 text-gray-300">
                ({displayData.reviews} Reviews)
            </p>

            {/* Description */}
            <p className="text-sm mt-4 text-gray-200">{displayData.description}</p>

            {/* Flip Button with Product Page Link (original behavior) */}
            <div className="mt-6 [perspective:1000px] cursor-pointer w-40 h-12" onClick={handleProductRedirection}>
                <motion.div
                    className="relative w-full h-full [transform-style:preserve-3d]"
                    animate={{ rotateX: hovered ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Front Side */}
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white font-semibold rounded [backface-visibility:hidden]">
                        SELECT OPTIONS
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white font-semibold rounded [transform:rotateX(180deg)] [backface-visibility:hidden]">
                        {displayData.price}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}