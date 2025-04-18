'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFilter } from '@/Context/FilterContext'
import { useCart } from '@/Context/CartContext';
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
                        className="bg-[#007BBA] text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                    >
                        Go to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

// Backend structure based Course type
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

const CourseCard = () => {
    const { filteredProducts } = useFilter();

    return (
        <section className="px-4 md:px-6 lg:px-8 py-10 bg-white text-[#0e0e32]">
            {filteredProducts.map((course: Course) => (
                <SingleCourseCard key={course._id} course={course} />
            ))}
        </section>
    );
};

const SingleCourseCard = ({ course }: { course: Course }) => {
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState(
        course.courseDetails.accessPeriod[0]?._id || ""
    );
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: course._id,
            title: course.title,
            quantity,
            price: Number(course.courseDetails.accessPeriod.find(p => p._id === accessPeriod)?.price),
            accessId: accessPeriod,
            imageUrl: course.courseDetails.gcbLab.image || '/Assets/Shield.avif'
        });
        setShowModal(true);
    };

    const handleGoToCart = () => {
        window.location.href = "/cart";
    };

    const handleClose = () => setShowModal(false);

    const accessOptions = course.courseDetails.accessPeriod.map(
        (period) => `${period.days} Days - ₹${period.price}`
    );

    const selectedAccessValue = accessOptions.find((opt, idx) => course.courseDetails.accessPeriod[idx]._id === accessPeriod) || accessOptions[0];

    return (
        <div className="max-w-4xl mx-auto border border-teal-300 rounded-xl p-6 shadow-md bg-white space-y-6 mb-8">
            <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 capitalize">{course.category}</p>
                <h2 className="text-2xl font-bold leading-snug">{course.title}</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2 space-y-3">
                    <p className="text-gray-700 text-base leading-relaxed">
                        {course.courseDetails.overview}
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <Image
                        src={course.courseDetails.gcbLab.image} // <-- fallback path
                        alt="Course diagram"
                        width={600}
                        height={300}
                        className="rounded-lg w-full object-contain"
                    />

                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                    href={`/courses/${course._id}`}
                    className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap"
                >
                    More Details
                </Link>


                <div className="flex flex-col flex-grow min-w-[100px] gap-2">
                    <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Access Period</label>
                    <select
                        value={accessPeriod}
                        onChange={(e) => setAccessPeriod(e.target.value)}
                        className="border border-gray-400 rounded-lg px-4 whitespace-normal py-2 text-sm focus:outline-none"
                    >

                        {course.courseDetails.accessPeriod.map((option) => (
                            <option key={option._id} value={option._id}>
                                {option.days} Days - ₹{option.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col flex-grow min-w-[90px] gap-2">
                    <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Quantity</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border border-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none w-full"
                    />
                </div>

                <button
                    onClick={handleAddToCart}
                    className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap"
                >
                    Add to Cart
                </button>
            </div>

            <PopupModal
                isVisible={showModal}
                onClose={handleClose}
                onGoToCart={handleGoToCart}
            />
        </div>
    );
};

export default CourseCard;
