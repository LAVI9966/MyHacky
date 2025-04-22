"use client";
import React from "react";

export default function CourseCard() {
    const course = {
        level: "Beginner",
        title: "CRTP : Attacking and Defending Active Directory Lab",
        image: "/Assets/AAA.avif", // public folder mein image hona chahiye
        reviews: 0,
        description:
            "This lab is designed to provide a platform for security professionals to understand, analyze and practice threats and attacks in a modern Active Directory environment. The lab is beginner friendly and comes with multiple learning aids that include video course, slides and multiple lab manuals.",
    };

    return (
        <div className="bg-[#001123] text-white p-4 rounded-md max-w-6xl mx-auto">
            {/* Image */}
            <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-md"
            />

            {/* Level */}
            <div className="text-sm text-blue-300 mt-3 underline">
                {course.level}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-1 underline">
                {course.title}
            </h2>

            {/* Reviews */}
            <p className="text-sm mt-1 text-gray-300">({course.reviews} Reviews)</p>

            {/* Description */}
            <p className="text-sm mt-4 text-gray-200">{course.description}</p>

            {/* Button */}
            <div className="mt-6">
                <button className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
                    SELECT OPTIONS
                </button>
            </div>
        </div>
    );
}
