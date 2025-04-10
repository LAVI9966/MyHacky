"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TestimonialsBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden ">
            {/* Background Image */}
            <Image
                src="/Assets/certifications.avif"
                alt="Background"
                fill
                className="object-cover brightness-30"
                priority
            />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                {/* Heading animates from top to bottom */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[#0EC9AC] text-4xl mb-4"
                >
                    What Students Have To Say About Us
                </motion.h1>


            </div>
        </div>
    );
};

export default TestimonialsBanner;
