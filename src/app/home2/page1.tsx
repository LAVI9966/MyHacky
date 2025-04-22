"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const COUNTDOWN_TARGET = new Date("2025-01-31T00:00:00Z").getTime();

// Dummy product data
type Lab = {
    id: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    title: string;
    subtitle?: string;
    image: string;
    price: string;
    reviews?: number;
    description: string;
};

const labs: Lab[] = [
    {
        id: "crtp",
        level: "Beginner",
        title: "CRTP : Attacking and Defending Active Directory Lab",
        subtitle: "Beginner",
        image: '/Assets/Home_bg.png',
        price: "₹199.00 – ₹499.00",
        reviews: 0,
        description:
            "This lab is designed to provide a platform for security professionals to understand, analyze and practice threats and attacks in a modern Active Directory environment. The lab is beginner friendly and comes with multiple learning aids that include video course, slides and multiple lab manuals.",
    },
    {
        id: "cetp",
        level: "Intermediate",
        title: "(Pre-Launch) CETP : Certified Evasion Techniques Professional",
        subtitle: "Intermediate",
        image: '/Assets/Home_bg.png',
        price: "₹199.00 – ₹499.00",
        reviews: 0,
        description: "",
    },
    {
        id: "crte",
        level: "Intermediate",
        title: "CRTE : Windows Red Team Lab",
        subtitle: "Intermediate",
        image: '/Assets/Home_bg.png',
        price: "₹199.00 – ₹499.00",
        reviews: 0,
        description: "",
    },
    {
        id: "crte-adv",
        level: "Intermediate",
        title:
            "[March 2025] BootCamp CRTE : Attacking and Defending Active Directory : Advanced Edition",
        subtitle: "Intermediate",
        image: '/Assets/Home_bg.png',
        price: "₹199.00 – ₹499.00",
        reviews: 0,
        description: "",
    },
    {
        id: "crtm",
        level: "Advanced",
        title: "CRTM : Global Central Bank",
        subtitle: "Advanced",
        image: '/Assets/Home_bg.png',
        price: "₹199.00 – ₹499.00",
        reviews: 0,
        description: "",
    },
];

const tabLevels = ["Beginner", "Intermediate", "Advanced"];

function useCountdown(target: number) {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const tick = () => {
            const now = new Date().getTime();
            const distance = target - now;
            if (distance < 0) return;
            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        };
        tick();
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, [target]);

    return countdown;
}

export default function HackyHome2() {
    const [activeTab, setActiveTab] = useState("Beginner");
    const countdown = useCountdown(COUNTDOWN_TARGET);

    return (
        <main className="min-h-screen bg-[#05152b] flex flex-col items-center">
            {/* Hero/Promo Section */}
            <div className="w-full max-w-5xl mt-8 mb-4 bg-[#05253c] rounded-xl shadow-xl border border-[#3b5561] relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between p-6 pb-3 border-b border-[#2c3e53]">
                    <div className="flex-1 flex flex-col gap-2 min-w-[210px]">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-[#3db1aa] p-2 mb-1">
                                    {/* Place icon here */}
                                    <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff" /></svg>
                                </div>
                                <span className="text-xs text-[#ebeeee]/80">Start Your Journey</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-[#3db1aa] p-2 mb-1">
                                    <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff" /></svg>
                                </div>
                                <span className="text-xs text-[#ebeeee]/80">Upgrade Skills</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="rounded-full bg-[#3db1aa] p-2 mb-1">
                                    <svg width="28" height="28" fill="none"><circle cx="14" cy="14" r="14" fill="#fff" /></svg>
                                </div>
                                <span className="text-xs text-[#ebeeee]/80">Get Certified</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Image src='/Assets/Home_bg.png' alt="Spartan Helmet" width={120} height={90} className="object-contain" />
                    </div>
                </div>
                {/* Sale Banner */}
                <div className="bg-[#11254a] px-5 py-6 flex flex-col gap-3 items-center relative">
                    <div className="absolute -left-2 top-3">
                        <Image src='/Assets/Home_bg.png' alt="Sale Tag" width={42} height={42} />
                        <span className="absolute text-xs bg-[#d4433d] text-white rounded px-1 py-0.5 left-3 top-5 rotate-[-15deg]">20% OFF</span>
                    </div>
                    <div className="text-white text-2xl md:text-3xl font-extrabold tracking-wide text-center">
                        MONTH OF ON-PREM RED TEAMING - JAN 2025
                    </div>
                    <div className="text-[#ebeeee] text-center text-sm">
                        – Apply coupon code <b>RED20OFF</b> (Stripe)
                        <br />– Flat 20% OFF on our On-Prem Red Team Courses
                    </div>
                    {/* Countdown */}
                    <div className="flex gap-5 mt-4">
                        <div className="flex flex-col items-center">
                            <span className="text-[#3db1aa] text-3xl font-bold">{countdown.days}</span>
                            <span className="text-xs text-[#ebeeee]">Days</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[#3db1aa] text-3xl font-bold">{countdown.hours}</span>
                            <span className="text-xs text-[#ebeeee]">Hours</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[#3db1aa] text-3xl font-bold">{countdown.minutes}</span>
                            <span className="text-xs text-[#ebeeee]">Minutes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[#3db1aa] text-3xl font-bold">{countdown.seconds}</span>
                            <span className="text-xs text-[#ebeeee]">Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Red Team Labs Section */}
            <div className="w-full max-w-5xl bg-[#08203a] mt-4 rounded-lg p-6 shadow-lg border border-[#2c3e53]">
                <div className="text-[#3db1aa] text-2xl font-bold text-center mb-2">OUR RED TEAM LABS</div>
                <div className="text-[#ebeeee] text-sm text-center mb-4">
                    Learn and practice on-prem and Azure Red team and enterprise security skills! Based on our years of experience in designing, running and maintaining some of the most popular Enterprise Red Team labs and certifications!
                </div>
                <div className="text-[#ebeeee] text-xs mb-2">
                    Choose from the following purchase options:
                    <ul className="list-decimal ml-6 mt-1">
                        <li>Individual Course: Select any course of your choice.</li>
                        <li>On-Prem Red Team or Azure Red Team Learning Path: Enjoy a 10% discount.</li>
                        <li>Create Your Own Learning Path: Select three or more courses and enjoy up to 10% discount.</li>
                    </ul>
                </div>
                <div className="text-[#ebeeee] text-xs text-center mt-2 mb-6">
                    Contact us (or write to <a className="text-[#3db1aa] underline" href="mailto:contact@alteredsecurity.com">contact@alteredsecurity.com</a>) for business inquiries and bulk purchases.
                </div>
                <div className="flex flex-col gap-3 sm:flex-row justify-center">
                    <button className="bg-[#21345e] text-[#3db1aa] rounded px-4 py-2 font-medium hover:bg-[#3db1aa] hover:text-white transition">Explore the on-prem red team Learning Path</button>
                    <button className="bg-[#21345e] text-[#3db1aa] rounded px-4 py-2 font-medium hover:bg-[#3db1aa] hover:text-white transition">Explore the azure red team Learning Path</button>
                </div>
            </div>
            {/* Tabs */}
            <div className="w-full max-w-5xl mt-8">
                <div className="flex bg-[#cedbe2]/10 rounded-t-lg overflow-hidden">
                    {tabLevels.map((level) => (
                        <button
                            key={level}
                            className={`flex-1 text-center py-3 text-base font-semibold ${activeTab === level ? "bg-[#ebeeee] text-[#05152b]" : "bg-transparent text-[#ebeeee] hover:bg-[#21345e]"
                                } transition-all duration-200`}
                            onClick={() => setActiveTab(level)}
                        >
                            {level.toUpperCase()}
                        </button>
                    ))}
                </div>
                {/* Lab Cards */}
                <div className="flex flex-col gap-6 bg-[#08203a] pb-10 px-2 rounded-b-lg shadow-lg border-x border-b border-[#2c3e53]">
                    {labs.filter((lab) => lab.level === activeTab).map((lab) => (
                        <div
                            key={lab.id}
                            className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-md mt-6 md:mt-4 p-4 gap-6 border border-[#e0e8ef]"
                        >
                            <div className="flex-1 flex flex-col gap-4 min-w-[220px]">
                                <span className="text-xs text-[#36598c]/80 font-medium uppercase">
                                    {lab.subtitle}
                                </span>
                                <h3 className="text-xl font-bold text-[#05152b] leading-tight">
                                    {lab.title}
                                </h3>
                                {lab.description && (
                                    <p className="text-[#606d81] text-sm leading-snug">{lab.description}</p>
                                )}
                                <div className="text-sm text-[#20292f] mt-2">
                                    {lab.price}
                                </div>
                                <button className="mt-2 w-fit bg-[#b28f42] text-white rounded px-5 py-2 font-bold shadow hover:bg-[#8f6f32] transition">Access Now</button>
                            </div>
                            <div className="md:w-64 w-full md:h-36 h-40 relative flex items-center justify-center">
                                <Image
                                    src={lab.image}
                                    alt={lab.title}
                                    fill
                                    className="object-contain rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
