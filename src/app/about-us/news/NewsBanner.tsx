"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const NewsBanner = () => {
    return (
        <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
            {/* Background Image */}
            <Image
                src="/Assets/news.avif"
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
                    Newsroom
                </motion.h1>


            </div>
        </div>
    );
}

export default NewsBanner