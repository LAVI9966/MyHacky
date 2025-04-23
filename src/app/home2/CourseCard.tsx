"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CourseCard() {
    const [hovered, setHovered] = useState(false);

    const course = {
        level: "Beginner",
        title: "CRTP : Attacking and Defending Active Directory Lab",
        image: "/Assets/AAA.avif",
        reviews: 0,
        description:
            "This lab is designed to provide a platform for security professionals to understand, analyze and practice threats and attacks in a modern Active Directory environment. The lab is beginner friendly and comes with multiple learning aids that include video course, slides and multiple lab manuals.",
    };

    return (
        <div
            className="bg-[#001123] flex flex-col items-center gap-3 text-white p-4 rounded-md max-w-6xl mx-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-md"
            />

            {/* Level */}
            <div className="text-sm text-gray-300 mt-3 underline">
                {course.level}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-1 underline">{course.title}</h2>

            {/* Reviews */}
            <p className="text-sm mt-1 text-gray-300">
                ({course.reviews} Reviews)
            </p>

            {/* Description */}
            <p className="text-sm mt-4 text-gray-200">{course.description}</p>

            {/* Flip Button */}
            <div className="mt-6 [perspective:1000px] w-40 h-12">
                <motion.div
                    className="relative w-full h-full [transform-style:preserve-3d]"
                    animate={{ rotateX: hovered ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Front Side */}
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white font-semibold rounded [backface-visibility:hidden]">
                        SELECT OPTIONS
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 flex items-center justify-center bg-transparent text-white font-semibold rounded [transform:rotateX(180deg)] [backface-visibility:hidden]">
                        ₹499
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
