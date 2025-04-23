"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function CourseCard() {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Add the keyframes for the shine animation to the document
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shine {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            // Clean up the style element when component unmounts
            document.head.removeChild(style);
        };
    }, []);

    const course = {
        level: "Beginner",
        title: "CRTP : Attacking and Defending Active Directory Lab",
        image: "/Assets/AAD.avif",
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
            {/* Image with shine effect */}
            <div className="relative w-full overflow-hidden rounded-md">
                {/* Shine overlay - only appears when hovered */}
                {hovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 z-10 
                        -translate-x-full animate-shine"
                        style={{
                            animation: "shine 1s ease forwards"
                        }} />
                )}

                {/* Next.js Image component */}
                <div className="relative w-full ">
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={100}
                        height={100}
                        className="h-80 w-full object-cover rounded-md"
                        priority
                    />
                </div>
            </div>

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