"use client"
import React from 'react'
import CourseCard from './CourseCard'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const courseData = [
    {
        image: "/Assets/AAA.avif",
        title:
            "Attacking and Defending Azure AD Cloud: Beginner's Edition - January '25 Batch",
        description:
            "Upgrade to one of the most coveted Cloud skills – Azure AD Security. Train in Azure pentesting, Red Teaming and defense in multiple live Azure tenants and hybrid infrastructure. Earn the CARTP certification.",
        date: "10th January 2025",
        instructorImage: "/Assets/Nikhil.avif",
        instructorName: "NIKHIL MITTAL",
    },
    {
        image: "/Assets/ADA.avif",
        title:
            "Attacking and Defending Active Directory - Advanced Edition - March '25 Batch",
        description:
            "A deep dive into Red Teaming – Practice attacks with focus on OpSec, Living Off the Land and bypassing security controls like MDI, WDAC and more in a secure multi-forest active directory lab environment.Earn the CRTE certification.",
        date: "11th January 20255",
        instructorImage: "/Assets/Nikhil.avif",
        instructorName: "NIKHIL MITTAL",
    },
    {
        image: "/Assets/AAD.avif",
        title:
            "Attacking and Defending Active Directory: Advanced Edition - July '24 Batch",
        description:
            "A deep dive into Red Teaming – Practice attacks with focus on OpSec, Living Off the Land and bypassing security controls like MDI, WDAC and more in a secure multi-forest active directory lab environment.Earn the CRTE certification.",
        date: "10th March 2024",
        instructorImage: "/Assets/Nikhil.avif",
        instructorName: "NIKHIL MITTAL",
    },
    {
        image: "/Assets/AART.avif",
        title:
            "Attacking and Defending Azure Cloud - Advanced Edition - October '24 Batch",
        description:
            "Take your Azure Red Team skills to the next level. Get trained in Azure pentesting, Red Teaming and Defense against an enterprise-like live Azure environment with focus on OPSEC and bypassing defenses. Earn the Certified Azure Red Team Expert (CARTE) certification.",
        date: "5th October 2024",
        instructorImage: "/Assets/Keanu.avif",
        instructorName: "KEANU NYS",
    },
    // Add more cards if needed
];
const PastBootcamp = () => {
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
                    className="text-[#0EC9AC] pb-10 pt-20 text-center text-5xl font-bold mb-2"
                >
                    Past Bootcamps
                </motion.h1>
            </div>

            <CourseCard courseData={courseData} />
        </div>
    );

}

export default PastBootcamp