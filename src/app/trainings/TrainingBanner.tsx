"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const TrainingBanner = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/contact');
    }
    return (
        <div className="relative w-full h-[400px] overflow-hidden ">
            {/* Background Image */}
            <Image
                src="/Assets/training.jpg"
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
                    Trainings
                </motion.h1>

                {/* Description animates from bottom to top */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                    className="text-gray-200 text-base md:w-[90%] w-full px-10 mb-5"
                >
                    Our coveted trainings are fully hands-on and are taught by world renowned experts who have spoken and trained at DEF CON, BlackHat and more.
                    All trainings available on-site and virtual!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                >
                    <button onClick={handleClick} className="bg-[#0EC9AC] cursor-pointer rounded-lg px-3 py-3">
                        Contact us
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default TrainingBanner