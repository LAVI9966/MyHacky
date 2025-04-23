'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';

// Sample course data array
const coursesData = [
    {
        id: 1,
        level: 'Intermediate',
        title: '(Pre-Launch) CETP : Certified Evasion Techniques Professional',
        rating: 5,
        priceRange: '₹199.00 - ₹499.00',
        image: '/Assets/AAD.avif'
    },
    {
        id: 2,
        level: 'Beginner',
        title: 'Fundamentals of Cybersecurity',
        rating: 4,
        priceRange: '₹149.00 - ₹399.00',
        image: '/Assets/AAD.avif'
    },
    {
        id: 3,
        level: 'Advanced',
        title: 'Penetration Testing Masterclass',
        rating: 5,
        priceRange: '₹299.00 - ₹599.00',
        image: '/Assets/AAD.avif'
    },
    {
        id: 4,
        level: 'Intermediate',
        title: 'Network Security Essentials',
        rating: 4,
        priceRange: '₹199.00 - ₹449.00',
        image: '/Assets/AAD.avif'
    }
];

const CourseCard = ({ course }) => {
    return (
        <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg p-4 md:p-6 bg-white shadow-sm mb-6">
            {/* Left Half */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center items-center text-left mb-4 md:mb-0">
                <p className="text-sm text-gray-500 mb-2">{course.level}</p>

                <h2 className="text-xl font-bold text-gray-800 hover:text-amber-700 cursor-pointer text-center leading-snug mb-3">
                    {course.title}
                </h2>

                {/* Stars */}
                <div className="flex items-center gap-1 text-orange-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={18}
                            fill={i < course.rating ? "orange" : "transparent"}
                            stroke="orange"
                        />
                    ))}
                </div>

                {/* Price */}
                <p className="text-base font-semibold text-black mb-4">{course.priceRange}</p>

                {/* Button */}
                <button className="bg-amber-700 text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 w-fit border border-transparent hover:bg-white hover:text-amber-700 hover:border-amber-700 transition-colors duration-200">
                    ✅ Access Now
                </button>
            </div>

            {/* Right Half */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full h-64 relative">
                    <Image
                        src={course.image}
                        alt={`${course.title} preview`}
                        fill
                        className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

const CourseGallery = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">

            {coursesData.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default CourseGallery;