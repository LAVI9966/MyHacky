"use client";
import React, { useState } from "react";
import Image from "next/image";

const CourseCard = () => {
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState("120 Days - ₹499.00");

    return (
        <section className="px-4 md:px-6 lg:px-8 py-10 bg-white text-[#0e0e32]">
            <div className="max-w-4xl mx-auto border border-teal-300 rounded-xl p-6 shadow-md bg-white space-y-6">
                {/* 🔹 1st DIV: Title Section */}
                <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Intermediate</p>
                    <h2 className="text-2xl font-bold leading-snug">
                        (Pre-Launch) CETP : Certified Evasion Techniques Professional
                    </h2>
                </div>

                {/* 🔹 2nd DIV: Flex Row: Text + Image */}
                <div className="flex flex-col lg:flex-row gap-3">
                    {/* LEFT TEXT */}
                    <div className="w-full lg:w-1/2 space-y-3">
                        <p className="text-sm text-gray-600">
                            Access to be sent from March 2025
                        </p>
                        <p className="text-gray-700 text-base leading-relaxed">
                            This course delves deep into the techniques and methodologies used to bypass endpoint countermeasures.
                            You will learn about Windows Internals, reversing EDRs, bypassing Microsoft Defender for Endpoint (MDE),
                            Elastic EDR, Sysmon, weaponizing kernel exploits for defense evasion and bypassing security controls like
                            Protected Processes (PP), Process Protection Light (PPL), Digital Signature Enforcement (DSE), Attack Surface
                            Reduction (ASR) rules and incapacitating Event Tracing for Windows (ETW) telemetry and a lot more.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/course-diagram.png"
                            alt="Course diagram"
                            width={600}
                            height={300}
                            className="rounded-lg w-full object-contain"
                        />
                    </div>
                </div>

                {/* 🔹 3rd DIV: Action Buttons & Inputs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                    {/* More Details Button */}
                    <button className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap">
                        More Details
                    </button>

                    {/* Access Period Selector */}
                    <div className="flex flex-col flex-grow min-w-[100px] gap-2">
                        <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Access Period</label>
                        <select
                            value={accessPeriod}
                            onChange={(e) => setAccessPeriod(e.target.value)}
                            className="border border-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none w-full"
                        >
                            <option>120 Days - ₹499.00</option>
                            <option>180 Days - ₹699.00</option>
                            <option>365 Days - ₹999.00</option>
                        </select>
                    </div>

                    {/* Quantity Input */}
                    <div className="flex flex-col flex-grow min-w-[90px] gap-2">
                        <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Quantity</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="border border-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none w-full"
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap">
                        Add to Cart
                    </button>
                </div>


            </div>
        </section>
    );
};

export default CourseCard;
