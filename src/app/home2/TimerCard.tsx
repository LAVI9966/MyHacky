"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function TimerCard() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [targetDate] = useState(() => {
        // Persist target date when component mounts
        const now = new Date();
        const future = new Date(now);
        future.setDate(future.getDate() + 7);
        return future;
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };
            }
        };

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="md:max-w-4xl w-full relative top-0 md:mx-auto text-white">
            {/* Upper Countdown Section with Background Image */}
            <div
                className="text-center max-w-4xl bg-[#001836] px-4 py-12 relative"
                style={{
                    backgroundImage: "url('/Assets/homesalebg.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 "></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
                        MONTH OF ON-PREM RED TEAMING - LIMITED TIME OFFER
                    </h1>
                    <p className="text-sm md:text-lg mb-2">– Apply coupon code <span className="text-[#00FFD1] font-semibold">RED20OFF</span> (Stripe)</p>
                    <p className="text-sm md:text-lg mb-6">– Flat 20% OFF on our On-Prem Red Team Courses</p>

                    <div className="flex justify-center gap-6 text-[#00FFD1] text-3xl md:text-4xl font-bold">
                        <div className="flex flex-col items-center">
                            <span>{timeLeft.days}</span>
                            <span className="text-sm text-white">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>{timeLeft.hours}</span>
                            <span className="text-sm text-white">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>{timeLeft.minutes}</span>
                            <span className="text-sm text-white">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span>{timeLeft.seconds}</span>
                            <span className="text-sm text-white">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Red Team Labs Section */}
            <div className="bg-[#001836] text-white px-6 py-12 text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold text-[#00FFD1] mb-6 uppercase">OUR RED TEAM LABS</h2>

                <p className="max-w-3xl text-sm text-left text-gray-300 mb-4">
                    Learn and practice on-prem and Azure Red team and enterprise security skills! Based on our years of experience in designing, running and maintaining some of the most popular Enterprise Red Team labs and certifications!
                </p>

                <div className="max-w-3xl text-sm text-left text-gray-300 mb-6">
                    <p className="mb-2 text-sm max-w-3xl">Choose from the following purchase options:</p>
                    <ul className="list-decimal text-sm max-w-3xl list-inside space-y-1">
                        <li>Individual Course : Select any course of our choice.</li>
                        <li>On-Prem Red Team or Azure Red Team Learning Path : Enjoy a 10% discount.</li>
                        <li>Create Your Own Learning Path : Select three or more courses and enjoy up to 10% discount.</li>
                    </ul>
                </div>

                <p className="text-gray-300 text-sm mb-6">
                    Contact us (or write to <span className="text-white">contact@alteredsecurity.com</span>) for business inquiries and bulk purchases.
                </p>

                <div className="w-5/6 max-w-3xl border-t border-gray-300 mb-8" />

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#00FFD1] text-[#001123] font-semibold px-6 py-3 rounded hover:opacity-90 transition">
                        Explore the on-prem red team Learning Path
                    </button>

                    <button className="border border-[#00FFD1] text-[#00FFD1] font-semibold px-6 py-3 rounded hover:bg-[#00FFD1] hover:text-[#001123] transition">
                        Explore the azure red team Learning Path
                    </button>
                </div>
            </div>
        </div>
    );
}
