import Image from 'next/image';
import React from 'react';
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

const Certification = ({ course }: TabMenuProps) => {
    return (
        <div className="bg-white md:p-2 p-2 rounded-lg  text-gray-800 space-y-10 max-w-4xl mx-auto text-sm">
            {course.certification.map((cert) => (
                <div key={cert._id}>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                        {cert.title}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="flex-1 space-y-4 md:text-sm text-base">
                            <p>{cert.description}</p>
                        </div>

                        {cert.image && (
                            <div className="w-full md:w-40 flex-shrink-0">
                                <Image
                                    src={cert.image}
                                    alt={`${cert.title} Badge`}
                                    width={160}
                                    height={160}
                                    className="rounded-md object-contain"
                                />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Certification;
