'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/Context/CartContext';

// Define the Course type to match the one from the parent component
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

// Popup Modal component for success message
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

// Define props interface for TabMenu
interface TabMenuProps {
    course: Course
}

const Evasion_Lab = ({ course }: TabMenuProps) => {
    // State variables for cart functionality
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState(
        course.courseDetails.accessPeriod[0]?._id || ""
    );
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useCart();

    // Handle adding to cart
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

    // Navigate to cart
    const handleGoToCart = () => {
        window.location.href = "/cart";
    };

    // Close the modal
    const handleClose = () => setShowModal(false);

    return (<>
        <div className="flex flex-col items-center justify-center bg-white space-y-10">
            <div className="max-w-6xl bg-gray-100 w-full">
                <Image
                    src={course.courseDetails.gcbLab.image}
                    alt="Network Architecture Diagram"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            <div className="max-w-6xl w-full bg-white p-2 md:p-2 rounded-xl gap-6">
                {course.courseDetails.gcbLab.labs.map((lab) => (
                    <div key={lab._id} className="mb-10">
                        <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                            {lab.title}
                        </h2>

                        <div className="flex flex-col justify-between md:flex-row">
                            <p className="text-black md:text-sm text-base p-1 pt-3 md:mr-2">
                                {lab.description}
                            </p>

                            {lab.imageUrl && (
                                <div className="flex-shrink-0 p-1 m-2 flex justify-center">
                                    <Image
                                        src={lab.imageUrl}
                                        alt={lab.title}
                                        width={150}
                                        height={150}
                                        className="h-35"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-6xl w-full bg-white p-2 md:p-2 rounded-xl gap-6">
                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Certificate Renewal - Only For Existing CRTP Certified Student</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {course.courseDetails.onDemandLab.map((card, index) => (
                            <div key={index} className="border-2 border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                                {card.title && (
                                    <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                        On Demand Lab
                                    </div>
                                )}
                                <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                    <p>{card.title}</p>
                                </div>
                                {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:text-sm text-base mx-auto">
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Add to cart</h2>
                    <div className="flex flex-col md:flex-row gap-4 text-black items-center mb-6">
                        <div>
                            <label className="block mb-1">Access Period</label>
                            <select
                                value={accessPeriod}
                                onChange={(e) => setAccessPeriod(e.target.value)}
                                className="border-2 rounded-md px-4 py-2 w-full"
                            >
                                {course.courseDetails.accessPeriod.map((period) => (
                                    <option key={period._id} value={period._id}>
                                        {period.days} Days - ₹{period.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Quantity</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="border-2 rounded-md px-4 py-2 w-24"
                            />
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="bg-teal-400 cursor-pointer text-white font-semibold px-6 py-2 rounded-full mt-4 md:mt-6"
                        >
                            Add to Cart
                        </button>
                    </div>

                    <div>
                        <h3 className="text-black mb-2">Terms of Purchase and Use:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                            {course.termsAndConditions.map((term, index) => (
                                <li key={index}>{term}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            <PopupModal
                isVisible={showModal}
                onClose={handleClose}
                onGoToCart={handleGoToCart}
            />
        </div>
    </>);
};

export default Evasion_Lab;