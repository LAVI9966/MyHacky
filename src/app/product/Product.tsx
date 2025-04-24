'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/Context/CartContext";

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

// Popup Modal Component
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

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState("");
    const [activeTab, setActiveTab] = useState("description");
    const [course, setCourse] = useState<Course | null>(null);
    const [showPrice, setShowPrice] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useCart();

    // Load course data from localStorage on component mount
    useEffect(() => {
        const courseData = localStorage.getItem('selectedCourse');
        if (courseData) {
            try {
                const parsedCourse = JSON.parse(courseData) as Course;
                setCourse(parsedCourse);
            } catch (error) {
                console.error("Error parsing course data:", error);
            }
        }
    }, []);

    // Get selected access period details
    const selectedAccessPeriod = course?.courseDetails?.accessPeriod?.find(p => p._id === accessPeriod);

    // Handle access period selection
    const handleAccessPeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAccessPeriod(e.target.value);
        setShowPrice(!!e.target.value); // Show price only when a period is selected
    };

    // Clear the access period selection
    const handleClearSelection = () => {
        setAccessPeriod("");
        setShowPrice(false);
    };

    // Get price range from course data
    const getPriceRange = (course: Course | null): string => {
        if (!course || !course.courseDetails?.accessPeriod?.length) return "Price not available";

        const prices = course.courseDetails.accessPeriod.map(p => {
            const priceMatch = p.price.match(/\d+/);
            return priceMatch ? parseInt(priceMatch[0], 10) : 0;
        }).filter(p => p > 0);

        if (prices.length === 0) return "Price not available";
        if (prices.length === 1) return `₹${prices[0]}`;

        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        return `₹${minPrice}.00 - ₹${maxPrice}.00`;
    };

    // Handle add to cart
    const handleAddToCart = () => {
        if (!course || !selectedAccessPeriod) {
            alert("Please select an access period");
            return;
        }

        // Extract price value from the price string
        let priceValue = 0;
        const priceMatch = selectedAccessPeriod.price.match(/\d+/);
        if (priceMatch) {
            priceValue = parseInt(priceMatch[0], 10);
        }

        addToCart({
            id: course._id,
            title: course.title,
            quantity: quantity,
            price: priceValue,
            accessId: accessPeriod,
            accessDays: selectedAccessPeriod.days,
            imageUrl: course.courseDetails.gcbLab?.image || '/Assets/Shield.avif'
        });

        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleGoToCart = () => {
        window.location.href = "/cart";
    };

    return (
        <div className="w-full pt-5 bg-white">
            <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 w-full max-w-6xl mx-auto">
                {/* Left - Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={course?.courseDetails?.gcbLab?.image || "/Assets/gcb.avif"} // Use course image if available
                        alt={course?.title || "Course Image"}
                        width={800}
                        height={600}
                        className="object-contain rounded"
                    />
                </div>

                {/* Right - Product Details */}
                <div className="flex-1 space-y-6">
                    <nav className="text-sm text-gray-500">
                        Home / {course?.category || "Category"} / {course?.title || "Course Title"}
                    </nav>
                    <h2 className="text-purple-700">{course?.category || "Category"}</h2>
                    <h1 className="text-2xl text-black font-semibold">{course?.title || "Course Title"}</h1>
                    <p className="text-2xl font-bold text-gray-500">{getPriceRange(course)}</p>

                    <div className="space-y-2 relative">
                        <label className="block text-black font-semibold">Access Period</label>
                        <select
                            value={accessPeriod}
                            onChange={handleAccessPeriodChange}
                            className="border border-gray-300 text-gray-500 rounded px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="">Choose an option</option>
                            {course?.courseDetails?.accessPeriod?.map(period => (
                                <option key={period._id} value={period._id}>
                                    {period.days} Days
                                </option>
                            ))}
                        </select>

                        {/* Clear text that appears when dropdown has a value */}
                        {accessPeriod && (
                            <div className="text-sm text-blue-600 cursor-pointer mt-1" onClick={handleClearSelection}>
                                Clear
                            </div>
                        )}

                        {/* Animated price display */}
                        <div className={`transition-all duration-500 overflow-hidden ${showPrice ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {selectedAccessPeriod && (
                                <p className="text-2xl font-bold text-gray-500 mt-2">
                                    {`₹${selectedAccessPeriod.price}`}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-16 border border-gray-300  text-gray-500 rounded px-2 py-1"
                        />
                        <button
                            className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-semibold"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>

                    <div className="text-sm flex gap-3 text-gray-500">
                        <p>SKU: {course?._id?.substring(0, 8) || "N/A"}</p>
                        <p>
                            Category: <span className="text-purple-700 font-medium">{course?.category || "Category"}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-6xl mx-auto px-6 mt-10">
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                    {[
                        { key: "description", label: "Description" },
                        { key: "additional", label: "Additional information" },
                        { key: "reviews", label: "Reviews (0)" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            className={`pb-2 px-4 text-left mb-2 sm:mb-0 font-semibold text-sm transition-colors duration-200 ${activeTab === tab.key
                                ? "border-b-2 border-purple-800 text-gray-800"
                                : "border-transparent text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 text-gray-700">
                    {activeTab === "description" && <p>{course?.courseDetails?.overview || "No description available."}</p>}

                    {activeTab === "additional" && (
                        <table className="w-full text-left">
                            <tbody>
                                <tr className="border-t">
                                    <th className="py-2 px-4 font-medium">Access Period</th>
                                    <td className="py-2 px-4">
                                        {course?.courseDetails?.accessPeriod?.map(period => (
                                            <div key={period._id} className="mb-1">
                                                {period.days} Days - {period.price}
                                            </div>
                                        )) || "Not specified"}
                                    </td>
                                </tr>
                                {/* Author section removed as requested */}
                            </tbody>
                        </table>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-4">
                            <p>There are no reviews yet.</p>
                            <div className="border p-6 space-y-4 bg-white rounded shadow-sm">
                                <h3 className="text-lg font-semibold">
                                    Be the first to review "{course?.title || 'this course'}"
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <form className="space-y-4">
                                    <div>
                                        <label className="font-bold block">Your rating *</label>
                                        <div className="flex space-x-1 text-xl text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>☆</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-bold block">Your review *</label>
                                        <textarea
                                            rows={4}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block">Name *</label>
                                            <input className="w-full border border-gray-300 rounded px-3 py-2" />
                                        </div>
                                        <div>
                                            <label className="block">Email *</label>
                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded px-3 py-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" />
                                            <span>
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-semibold"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Success Modal */}
            <PopupModal
                isVisible={showModal}
                onClose={handleCloseModal}
                onGoToCart={handleGoToCart}
            />
        </div>
    );
}