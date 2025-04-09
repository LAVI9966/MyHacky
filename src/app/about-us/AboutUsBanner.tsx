"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
            {/* Background Image */}
            <Image
                src="/Assets/aboutus.jpg"
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
                    About Us
                </motion.h1>

                {/* Description animates from bottom to top */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-200 text-lg w-[90%] px-10"
                >
                    Hacky Security is a rapidly growing Information Security Services organization focused on providing top-notch training and security services. We build intellectual capital with customers around the world.
                </motion.p>
            </div>
        </div>
    );
}

export default AboutUsBanner