'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const PopupModal = ({
    isVisible,
    onClose,
    onGoToCart,
}: {
    isVisible: boolean;
    onClose: () => void;
    onGoToCart: () => void;
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent  backdrop-brightness-50 bg-opacity-40">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm w-full">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ✔
                    </div>
                    <p className="text-gray-700 font-medium">Product added to cart successfully!</p>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="bg-[#007BBA] text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                    >
                        OK
                    </button>
                    <button
                        onClick={onGoToCart}
                        className="bg-[#007BBA] text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
                    >
                        Go to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
// courseData.ts
type Course = {
    id: number;
    level: string;
    title: string;
    accessInfo: string;
    description: string;
    image: string;
    accessOptions: string[];
};

const courseData: Course[] = [
    {
        id: 1,
        level: "Intermediate",
        title: "(Pre-Launch) CETP : Certified Evasion Techniques Professional",
        accessInfo: "Access to be sent from March 2025",
        description: `This course delves deep into the techniques and methodologies used to bypass endpoint countermeasures.
  You will learn about Windows Internals, reversing EDRs, bypassing Microsoft Defender for Endpoint (MDE),
  Elastic EDR, Sysmon, weaponizing kernel exploits for defense evasion and bypassing security controls like
  Protected Processes (PP), Process Protection Light (PPL), Digital Signature Enforcement (DSE), Attack Surface
  Reduction (ASR) rules and incapacitating Event Tracing for Windows (ETW) telemetry and a lot more.`,
        image: "/Assets/Diagram-01.avif",
        accessOptions: [
            "120 Days - ₹499.00",
            "180 Days - ₹699.00",
            "365 Days - ₹999.00",
        ],
    },
    {
        id: 2,
        level: "Beginner",
        title: "CRTP : Attacking and Defending Active Directory Lab",
        accessInfo: "",
        description: `This lab is designed to provide a platform for security professionals to understand, analyze and practice threats and attacks in a modern Active Directory environment. The lab is beginner friendly and comes with multiple learning aids that include video course, slides and multiple lab manuals.`,
        image: "/Assets/activedirectorylab.avif",
        accessOptions: [
            " 120 Days - ₹499.OO",
            "30 Days - Lab Extension - ₹199.00",
            "60 Days - ₹379.00",
            "30 Days - ₹249.OO"
        ],
    },
    {
        id: 3,
        level: "Intermediate",
        title: "CRTE : Windows Red Team Lab",
        accessInfo: "",
        description: `This lab requires you to start with a non-admin user account in the domain and work your way up to enterprise admin in a true multi-forest environment. The focus is on abusing features and functionality and not on exploiting vulnerabilities. This lab is for intermediate/advanced users and comes with multiple learning aids like video course, slides, video walk-through and lab manuals.`,
        image: "/Assets/ads-removebg.avif",
        accessOptions: [
            " 120 Days - ₹499.OO",
            "30 Days - Lab Extension - ₹199.00",
            "60 Days - ₹379.00",
            "30 Days - ₹249.OO"
        ],
    },
    {
        id: 4,
        level: "Intermediate",
        title: "[March 2025] Bootcamp CRTE : Attacking and Defending Active Directory: Advanced Edition",
        accessInfo: "",
        description: `A deep dive into Red Teaming – Practice attacks with focus on OpSec, Living Off the Land and bypassing security controls like MDI, WDAC and more in a secure multi-forest active directory lab environment.Earn the CRTE certification.​

Starts: 8th March 2025

Duration: 4 weeks

Recordings of live sessions included!`,
        image: "/Assets/CRTE-Advance.avif",
        accessOptions: [
            " 120 Days - ₹499.OO",
            "30 Days - Lab Extension - ₹199.00",
            "60 Days - ₹379.00",
            "30 Days - ₹249.OO"
        ],
    },
    {
        id: 5,
        level: "Advanced",
        title: "CRTM : Global Central Bank",
        accessInfo: "",
        description: `Global Central Bank (GCB) is a one of a kind Enterprise Windows and Active Directory Cyber Range. It helps enterprises test capabilities of both their Red and Blue teams in an Enterprise Windows network. GCB is a true multi-forest environment that mimics a financial institution's network.`,
        image: "/Assets/gcb.avif",
        accessOptions: [
            " 120 Days - ₹499.OO",
            "30 Days - Lab Extension - ₹199.00",
            "60 Days - ₹379.00",
            "30 Days - ₹249.OO"
        ],
    },

];

const CourseCard = () => {

    return (
        <>
            <section className="px-4 md:px-6 lg:px-8 py-10 bg-white text-[#0e0e32]">

                {courseData.map((course) => (
                    <SingleCourseCard key={course.id} course={course} />
                ))}
            </section>
        </>
    );
};

const SingleCourseCard = ({ course }: { course: Course }) => {
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState(course.accessOptions[0]);
    const [showModal, setShowModal] = useState(false);

    const handleAddToCart = () => {
        // simulate add to cart logic here
        setShowModal(true);
    };

    const handleGoToCart = () => {
        // redirect to cart page
        window.location.href = "/cart"; // change path if needed
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="max-w-4xl mx-auto border border-teal-300 rounded-xl p-6 shadow-md bg-white space-y-6 mb-8">
            {/* Title */}
            <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">{course.level}</p>
                <h2 className="text-2xl font-bold leading-snug">{course.title}</h2>
            </div>

            {/* Text + Image */}
            <div className="flex flex-col lg:flex-row gap-3">
                <div className="w-full lg:w-1/2 space-y-3">
                    <p className="text-sm text-gray-600">{course.accessInfo}</p>
                    <p className="text-gray-700 text-base leading-relaxed">{course.description}</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <Image
                        src={course.image}
                        alt="Course diagram"
                        width={600}
                        height={300}
                        className="rounded-lg w-full object-contain"
                    />
                </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link href={"/adlab"} className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap">
                    More Details
                </Link>

                <div className="flex flex-col flex-grow min-w-[100px] gap-2">
                    <label className="text-sm font-medium text-gray-600 whitespace-nowrap">Access Period</label>
                    <select
                        value={accessPeriod}
                        onChange={(e) => setAccessPeriod(e.target.value)}
                        className="border border-gray-400 rounded-lg px-4 py-2 text-sm focus:outline-none w-full"
                    >
                        {course.accessOptions.map((option, i) => (
                            <option key={i}>{option}</option>
                        ))}
                    </select>
                </div>

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

                <button
                    onClick={handleAddToCart}
                    className="bg-teal-500 text-white font-medium px-10 py-2 mt-7 rounded-full hover:bg-teal-600 transition text-sm whitespace-nowrap"
                >
                    Add to Cart
                </button>

            </div>
            <PopupModal
                isVisible={showModal}
                onClose={handleClose}
                onGoToCart={handleGoToCart}
            />

        </div>
    );
};

export default CourseCard;
