"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const TeachingMethodology = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-20">
            <h2 className="text-[#0EC9AC] pb-10 pt-20 text-center text-5xl font-bold mb-2">
                Teaching Methodology
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="md:w-1/2 text-[24px] leading-relaxed space-y-4">
                    <p>
                        Our teaching methodology is designed around hands-on learning. With this approach,
                        students will retain the topics for longer and apply what they have learned in a tangible
                        way in their jobs.

                        We do not restrict lab access based on hours and actively encourage students to solve
                        the labs multiple times using different sets of tools and techniques.

                        The bootcamps also enable group learning by having dedicated Discord channels. This
                        helps the students to collaborate and learn from each other. It also helps in learning
                        from professionals across the globe and exchange notes with them!

                        We have designed and teach classes to mimic real-world environments so that you gain the
                        knowledge and experience required to sharpen your skills and protect your enterprise.
                    </p>
                </div>

                {/* Image */}

                {/* Image with Motion */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="md:w-1/2"
                >
                    <Image
                        src="/Assets/Teaching.avif"
                        alt="Teaching session"
                        width={700}
                        height={350}
                        className="rounded-3xl shadow-lg w-[90%] h-[90%"
                    />
                </motion.div>

            </div>
        </section >
    );
};

export default TeachingMethodology;
