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

const What_will_you_Learn = ({ course }: TabMenuProps) => {
    return (
        <div>
            <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                What You’ll Learn
            </h2>

            <div className="bg-white md:p-2 p-2 rounded-lg  text-sm text-gray-800 space-y-6 max-w-4xl mx-auto">
                {course.howLearn.map((item, index) => (
                    <div key={item._id}>
                        <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                            {index + 1}. {item.title}
                        </div>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {item.points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default What_will_you_Learn;
