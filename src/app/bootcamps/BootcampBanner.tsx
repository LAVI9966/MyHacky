"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const BootcampBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden ">
            {/* Background Image */}
            <Image
                src="/Assets/bootcamp.avif"
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
                    className="text-[#0EC9AC] md:text-5xl text-base font-bold mb-4"
                >
                    Pick from our live Bootcamps
                </motion.h1>

                {/* Description animates from bottom to top */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-200 text-lg md:w-[90%] w-full px-10"
                >
                    Our popular bootcamps run for 4 weeks and provide instructor-led training and hands-on labs where you can learn with fellow students from the comfort of your home.
                </motion.p>
            </div>
        </div>
    );
};

export default BootcampBanner;
