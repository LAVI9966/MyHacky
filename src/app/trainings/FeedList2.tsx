'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const courseData = [
    {
        image: '/Assets/Image-by-Charles-Deluvio.avif',
        title: 'Active Directory Attacks for Red and Blue Teams - Basic Edition',
        buttonLabel: 'Read More',
    },
    {
        image: '/Assets/Image-by-Gabriel-Heinzer.avif',
        title: 'Active Directory Attacks for Red and Blue Teams - Basic Edition',
        buttonLabel: 'Access this course',
    },
    {
        image: '/Assets/Image-by-James-Harrison.avif',
        title: 'Active Directory Attacks for Red and Blue Teams - Basic Edition',
        buttonLabel: 'Read More',
    },
];

const getAnimationProps = (index: number) => {
    switch (index) {
        case 0:
            return {
                initial: { opacity: 0, x: -100 },
                whileInView: { opacity: 1, x: 0 },
            };
        case 1:
            return {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
            };
        case 2:
            return {
                initial: { opacity: 0, x: 100 },
                whileInView: { opacity: 1, x: 0 },
            };
        default:
            return {};
    }
};

const FeedList2: React.FC = () => {
    return (
        <div className="w-full bg-[#1C2A3A]">
            <div className="p-8 flex flex-wrap justify-center max-w-7xl mx-auto">
                {courseData.map((course, index) => {
                    const animationProps = getAnimationProps(index);

                    return (
                        <motion.div
                            key={index}
                            {...animationProps}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-[#1C2A3A] text-white w-full sm:w-72 max-w-7xl mx-auto mb-6"
                        >
                            <Image
                                width={100}
                                height={100}
                                src={course.image}
                                alt={course.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 bg-[#072540] mt-4 text-center">
                                <h3 className="font-bold text-lg mb-4">{course.title}</h3>
                                <button className="bg-[#0EC9AC] text-white font-semibold px-6 py-2 rounded hover:opacity-90 transition">
                                    {course.buttonLabel}
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeedList2;
