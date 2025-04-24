'use client';
import Image from 'next/image';
import { Star, Eye, Scale } from 'lucide-react';
import { useState } from 'react';
import ProductDetailCardPopUp from './ProductDetailCardPopUp';
import ProductComparisonPopup from './ProductComparisonPopup';
import { useFilter } from '@/Context/FilterContext';

// Define TypeScript interfaces based on your data structure
interface CourseData {
    _id: string;
    title: string;
    category: string; // This maps to "level" in your UI
    prices: string; // This will be used for priceRange in your UI
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

// Default course price as a fallback
const defaultCourse = {
    price: "₹199.00 - ₹499.00"
};

const CourseGallery = () => {
    // Using the Filter context to get all products (not filtered ones)
    const { allProducts, loading, error } = useFilter();

    // State for comparison functionality
    const [showComparisonPopup, setShowComparisonPopup] = useState(false);
    const [coursesToCompare, setCoursesToCompare] = useState<CourseData[]>([]);

    // Function to handle adding a course to comparison
    const handleAddToCompare = (course: CourseData) => {
        // Check if the course is already in the comparison list
        if (!coursesToCompare.some(item => item._id === course._id)) {
            setCoursesToCompare(prevCourses => [...prevCourses, course]);
        }
        // Show comparison popup regardless
        setShowComparisonPopup(true);
    };

    // Handle removing a course from comparison
    const handleRemoveFromCompare = (courseId: string) => {
        setCoursesToCompare(coursesToCompare.filter(course => course._id !== courseId));
    };

    // Handle closing the comparison popup
    const handleCloseComparison = () => {
        setShowComparisonPopup(false);
    };

    const CourseCard = ({ course }: { course: CourseData }) => {
        const [isHovered, setIsHovered] = useState(false);
        const [showProductPopup, setShowProductPopup] = useState(false);

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

        // Map category to a user-friendly level name
        const level = course.category || 'Beginner';

        // Use actual rating or default to 5
        const rating = 5; // Default rating, adjust if you have actual rating data

        return (
            <div
                className="flex flex-col md:flex-row border border-gray-300 rounded-lg p-4 md:p-6 bg-white shadow-sm mb-6"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Half */}
                <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center items-center text-left mb-4 md:mb-0">
                    <h1
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
                        className="text-sm cursor-pointer text-gray-500 mb-2">
                        {level}
                    </h1>

                    <h1
                        className="cursor-pointer text-xl font-bold text-gray-800 hover:text-amber-700 cursor-pointer text-center leading-snug mb-3" href='/product'>
                        {course.title}
                    </h1>

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-orange-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={18}
                                fill={i < rating ? "orange" : "transparent"}
                                stroke="orange"
                            />
                        ))}
                    </div>

                    {/* Price */}
                    <p className="text-base font-semibold text-black mb-4">{getPriceRange(course.prices)}</p>

                    {/* Button */}
                    <h1 onClick={() => {
                        if (course) {
                            // Store the entire course object in localStorage
                            localStorage.setItem('selectedCourse', JSON.stringify(course));

                            // Redirect to product page
                            window.location.href = '/product';
                        }
                    }} className="cursor-pointer bg-amber-700 text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 w-fit border border-transparent hover:bg-white hover:text-amber-700 hover:border-amber-700 transition-colors duration-200">
                        ✅ Access Now
                    </h1>
                </div>

                {/* Right Half */}
                <div className="w-full md:w-1/2 flex justify-center items-center relative">
                    <div className="w-full h-64 relative">
                        <Image
                            src={course.courseDetails.gcbLab.image}
                            alt={`${course.title} preview`}
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>

                    {/* Animated icons container */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row gap-3">
                        {/* Eye Icon */}
                        <div
                            className={`bg-white p-2 rounded-full shadow-md cursor-pointer flex items-center justify-center transition-all duration-500 transform 
                                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                            style={{ transitionDelay: '0.1s' }}
                            onClick={() => setShowProductPopup(true)}
                        >
                            <Eye size={20} className="text-amber-700" />
                        </div>

                        {/* Compare Icon */}
                        <div
                            className={`bg-white p-2 rounded-full shadow-md cursor-pointer flex items-center justify-center transition-all duration-500 transform 
                                ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                            style={{ transitionDelay: '0.2s' }}
                            onClick={() => handleAddToCompare(course)}
                        >
                            <Scale size={20} className="text-amber-700" />
                        </div>
                    </div>
                </div>

                {/* Product Detail Popup */}
                {showProductPopup && (
                    <div className="fixed inset-0 bg-white/20 flex items-center justify-center z-50" onClick={(e) => {
                        if (e.target === e.currentTarget) setShowProductPopup(false);
                    }}>
                        <ProductDetailCardPopUp
                            product={course}
                            onClose={() => setShowProductPopup(false)}
                        />
                    </div>
                )}
            </div>
        );
    };

    // Handle loading state
    if (loading) {
        return <div className="max-w-6xl mx-auto p-4 text-center">Loading courses...</div>;
    }

    // Handle error state
    if (error) {
        return <div className="max-w-6xl mx-auto p-4 text-center text-red-500">Error: {error}</div>;
    }

    // Handle empty state
    if (!allProducts || allProducts.length === 0) {
        return <div className="max-w-6xl mx-auto p-4 text-center">No courses available at the moment.</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            {allProducts.map(course => (
                <CourseCard key={course._id} course={course} />
            ))}

            {/* Product Comparison Popup */}
            {showComparisonPopup && (
                <ProductComparisonPopup
                    isOpen={showComparisonPopup}
                    selectedCourses={coursesToCompare}
                    onClose={handleCloseComparison}
                    onRemoveCourse={handleRemoveFromCompare}
                />
            )}
        </div>
    );
};

export default CourseGallery;