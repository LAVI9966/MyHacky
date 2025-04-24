'use client';
import Image from 'next/image';
import { Star, Eye, Scale } from 'lucide-react';
import { useState } from 'react';
import ProductDetailCardPopUp from './ProductDetailCardPopUp';
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

// Interface for the UI representation of a course
interface CourseCardProps {
    course: CourseData;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showProductPopup, setShowProductPopup] = useState(false);
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [comment, setComment] = useState('');

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
                <a href='/product/product-category' className="text-sm text-gray-500 mb-2">{level}</a>

                <h1 onClick={() => {
                    if (course) {
                        // Store the entire course object in localStorage
                        localStorage.setItem('selectedCourse', JSON.stringify(course));

                        // Redirect to product page
                        window.location.href = '/product';
                    }
                }} className="cursor-pointer text-xl font-bold text-gray-800 hover:text-amber-700 cursor-pointer text-center leading-snug mb-3" href='/product'>
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
                        onClick={() => setShowCommentPopup(true)}
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

            {/* Comment Popup */}
            {showCommentPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => {
                    if (e.target === e.currentTarget) setShowCommentPopup(false);
                }}>
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h3 className="text-lg font-bold mb-4">Add a Comment</h3>
                        <textarea
                            className="w-full border border-gray-300 rounded p-2 mb-4"
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comment here..."
                        ></textarea>
                        <div className="flex justify-end gap-2">
                            <button
                                className="px-4 py-2 border border-gray-300 rounded text-gray-700"
                                onClick={() => setShowCommentPopup(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-amber-700 text-white rounded"
                                onClick={() => {
                                    // Here you would typically save the comment
                                    alert('Comment saved: ' + comment);
                                    setShowCommentPopup(false);
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const CourseGallery = () => {
    // Using the Filter context to get all products (not filtered ones)
    const { allProducts, loading, error } = useFilter();

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
        </div>
    );
};

export default CourseGallery;