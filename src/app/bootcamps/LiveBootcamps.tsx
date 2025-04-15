"use client"
import React from 'react'
import CourseCard from './CourseCard'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const courseData = [
    {
        image: "/Assets/AART.avif",
        title:
            "Attacking and Defending Azure Cloud - Advanced Edition - February '25 Batch",
        description:
            "Take your Azure Red Team skills to the next level. Get trained in Azure pentesting, Red Teaming and Defense against an enterprise-like live Azure environment with focus on OPSEC and bypassing defenses. Earn the Certified Azure Red Team Expert (CARTE) certification",
        date: "1st February 2025",
        instructorImage: "/Assets/keanu.avif",
        instructorName: "KEANU NYS",
    },
    {
        image: "/Assets/AAD.avif",
        title:
            "Attacking and Defending Active Directory - Advanced Edition - March '25 Batch",
        description:
            "A deep dive into Red Teaming – Practice attacks with focus on OpSec, Living Off the Land and bypassing security controls like MDI, WDAC and more in a secure multi-forest active directory lab environment.Earn the CRTE certification.",
        date: "8th March 2025",
        instructorImage: "/Assets/Nikhil.avif",
        instructorName: "NIKHIL MITTAL",
    },
    // Add more cards if needed
];
const LiveBootcamps = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="bg-[#1F293A] pb-10">
            {/* ⬇️ Attach ref here */}
            <div ref={ref}>
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="text-[#0EC9AC] pb-10 pt-20 text-center md:text-5xl text-base font-bold mb-2"
                >
                    Upcoming Live Bootcamps
                </motion.h1>
            </div>

            <CourseCard courseData={courseData} />
        </div>
    );
};


export default LiveBootcamps