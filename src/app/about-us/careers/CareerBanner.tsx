"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CareerBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden ">
            {/* Background Image */}
            <Image
                src="/Assets/careers.avif"
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
                    className="text-[#0EC9AC] text-5xl font-bold mb-4"
                >
                    Careers
                </motion.h1>

                {/* Description animates from bottom to top */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-200 text-lg w-[90%] px-10"
                >
                    Join our Team & Grow with us !
                </motion.p>
            </div>
        </div>
    );
}

export default CareerBanner