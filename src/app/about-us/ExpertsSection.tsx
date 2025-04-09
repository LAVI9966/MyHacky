'use client'
import ExpertCard from "./ExpertCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const experts = [
    "/Assets/1-150x150.avif",
    "/Assets/2-150x150.avif",
    "/Assets/3-150x150.avif",
    "/Assets/4-150x150.avif",
    "/Assets/5-150x150.avif",
    "/Assets/6-150x150.avif",
    "/Assets/7-150x150.avif",
    "/Assets/8-150x150.avif",
];

export default function ExpertsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="bg-black py-6 text-center">
            <div ref={ref}>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[#0EC9AC] pb-15 pt-10  text-center text-5xl font-bold mb-2"
                >
                    Meet Our Experts
                </motion.h1>
            </div>
            {/* <h2 className="text-5xl font-bold text-[#0EC9AC] mb-10"></h2> */}
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
                {experts.map((img, index) => (
                    <ExpertCard key={index} image={img} />
                ))}
            </div>
        </div>
    );
}
