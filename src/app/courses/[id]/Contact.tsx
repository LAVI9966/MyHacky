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

const Contact = ({ course }: TabMenuProps) => {
    return (
        <div className="contact-container max-w-4xl mx-auto p-2 md:p-6">
            {/* <h1 className="text-2xl font-bold mb-6">Hacky Security Course</h1> */}

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeGnRaj1yVju88VxvdjBo8owrPVCuiOnvhvvhMEiYjSzmju6Q/formResponse?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default Contact;