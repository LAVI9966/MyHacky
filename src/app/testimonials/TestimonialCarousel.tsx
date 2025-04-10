'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Jay Sharma',
        role: 'Student of AD Attacks - Advanced Bootcamp (CRTE)',
        text: `The bootcamp is led by experienced instructors who have real-world experience in dealing with cyber threats...`,
    },
    {
        name: 'Aditi Verma',
        role: 'Cyber Security Analyst',
        text: `Hands-on labs and real case scenarios helped me elevate my red teaming skills significantly.`,
    },
    {
        name: 'Rohan Mehta',
        role: 'Security Consultant',
        text: `A perfect blend of theory and practicals. Every concept is broken down clearly and effectively.`,
    },
    {
        name: 'Sneha Kapoor',
        role: 'Penetration Tester',
        text: `Excellent mentorship! The instructors were extremely helpful throughout.`,
    },
];

export default function TestimonialCarousel() {
    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640); // Tailwind's sm: breakpoint
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const getIndex = (i: number) => (i + testimonials.length) % testimonials.length;

    const visibleOffsets = isMobile ? [0] : [-1, 0, 1];

    return (
        <div className="w-full bg-[#1e293b] py-6 overflow-hidden px-4">
            <div className="max-w-6xl mx-auto flex justify-center items-center gap-6">
                {visibleOffsets.map((offset) => {
                    const index = getIndex(active + offset);
                    const testimonial = testimonials[index];
                    const isCenter = offset === 0;

                    return (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, scale: 0.9, x: offset * 300 }}
                            animate={{ opacity: 1, scale: isCenter ? 1.05 : 0.95, x: 0 }}
                            exit={{ opacity: 0, scale: 0.9, x: offset * -300 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                duration: 0.6,
                            }}
                            className={`flex flex-col bg-[#1e293b] text-white p-6 rounded-2xl shadow-lg w-[90%] sm:w-[300px] h-[260px] justify-center ${isCenter ? 'z-10' : 'opacity-80'
                                }`}
                        >
                            <p className="text-sm mb-4 text-center">{testimonial.text}</p>
                            <p className="font-bold text-teal-400 text-center">{testimonial.name}</p>
                            <p className="text-sm text-gray-400 text-center">{testimonial.role}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-4 gap-2">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-3 h-3 rounded-full transition ${i === active ? 'bg-teal-400 scale-110' : 'bg-gray-500'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}
