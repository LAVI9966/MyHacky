"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Course {
    title: string,
    description: string,
    image: string,
    date: string,
    instructorName: string,
    instructorImage: string,

}
interface CourseCardProps {
    courseData: Course[]; // Array of Course
}
const CourseCard = ({ courseData }: CourseCardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20">
            {courseData.map((course, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true });

                const slideDirection = index % 2 === 0 ? -100 : 100; // left for even, right for odd

                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, x: slideDirection }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <div className="bg-[#0c111b] rounded-3xl p-4 text-white mx-auto shadow-xl">
                            {/* Image */}
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={768}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-center mt-6 text-[#0EC9AC] text-[20px] font-semibold underline underline-offset-2 hover:text-teal-300 transition-all">
                                <a href="#">{course.title}</a>
                            </h2>

                            {/* Description */}
                            <p className="mt-4 text-[18px] text-center text-gray-200 px-2 leading-relaxed">
                                {course.description}
                            </p>

                            {/* Instructor Info */}
                            <div className="mt-6 flex flex-col items-center justify-center text-center">
                                <p className="text-[#0EC9AC] text-xs mb-1">{course.date}</p>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={course.instructorImage}
                                        alt={course.instructorName}
                                        width={40}
                                        height={40}
                                        className="rounded-full border border-white"
                                    />
                                    <span className="text-[#0EC9AC] font-semibold text-[18px]">
                                        {course.instructorName}
                                    </span>
                                </div>
                            </div>

                            {/* Enroll Button */}
                            <div className="mt-5 flex justify-center">
                                <button className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold px-6 py-2 rounded-full transition">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default CourseCard;
