import React, { useState } from 'react';
import Image from 'next/image';
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

// Define props interface for TabMenu
interface TabMenuProps {
    course: Course
}

const Evasion_Lab = ({ course }: TabMenuProps) => {
    // Add state for quantity
    const [quantity, setQuantity] = useState<number>(1);

    const cards = [
        {
            title: "On Demand Lab",
            duration: "30 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$249"
        },
        {
            title: "On Demand Lab",
            duration: "60 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$379"
        },
        {
            title: "On Demand Lab",
            duration: "90 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$499"
        },
        {
            title: "Extension",
            duration: "30 DAYS LAB EXTENSION",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$199"
        },
        {
            title: "Reattempt",
            duration: "EXAM REATTEMPT",
            extras: [],
            price: "$99"
        },
        {
            title: "",
            duration: "Exam Reattempt is only for existing or past students of this course who have already purchased this course in the past.",
            extras: [],
            price: ""
        }
    ];
    const cards2 = [
        {
            title: "Extension",
            duration: "30 DAYS LAB ACCESS FOR CERT RENEWAL",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$149"
        },
        {
            title: "Reattempt",
            duration: "ADDITIONAL RENEWAL EXAM",
            extras: [],
            price: "$29"
        },
    ];
    return (<>
        <div className="flex flex-col items-center justify-center  bg-gray-100 space-y-10">
            {/* <div className="max-w-6xl w-full">
                <Image
                    src="/Assets/AAD.avif"
                    alt="Network Architecture Diagram"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            <div className="max-w-6xl w-full bg-white p-2 md:p-8 rounded-xl shadow-md gap-6">
                <div className="max-w-6xl w-full bg-white p-2 md:p-8 rounded-xl shadow-md gap-6">
                    {course.courseDetails.gcbLab.labs.map((lab) => (
                        <div key={lab._id} className="mb-10">
                            <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                                {lab.title}
                            </h2>

                            <div className="flex flex-col justify-between md:flex-row">
                                <p className="text-black md:text-xs text-base p-1 pt-3 md:mr-2">
                                    {lab.description}
                                </p>
                                <div className="flex-shrink-0 p-1 m-2 flex justify-center">
                                    <Image
                                        src={'/Assets/Spartan.avif'}
                                        alt={lab.title}
                                        width={150}
                                        height={150}
                                        className="h-35"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div> */}
            <div className="max-w-6xl w-full bg-white p-2 md:p-2 rounded-xl gap-6">

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Certificate Renewal - Only For Existing CRTP Certified Student</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {course.courseDetails.onDemandLab.map((card, index) => (
                            <div key={index} className="border-2  border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                                {card.title && (
                                    <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                        On Demand Lab
                                    </div>
                                )}
                                <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                    <p>{card.title}</p>
                                    {/* {card.extras.map((item, i) => (
                                    <p key={i}>+ <br />{item}</p>
                                ))} */}
                                </div>
                                {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-2 md:text-sm text-base mx-auto">
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Add to cart</h2>
                    <div className="flex flex-col md:flex-row gap-4 text-black items-center mb-6">
                        <div>
                            <label className="block mb-1">Access Period</label>
                            <select className="border-2 rounded-md px-4 py-2 w-full">
                                {course.courseDetails.accessPeriod.map((period) => (
                                    <option key={period._id}>
                                        {period.days} Days - ₹{period.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                className="border-2 rounded-md px-4 py-2 w-24"
                            />
                        </div>

                        <button className="bg-teal-400 text-white font-semibold px-6 py-2 rounded-full mt-4 md:mt-6">
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
        </div>
    </>
    );
};

export default Evasion_Lab;