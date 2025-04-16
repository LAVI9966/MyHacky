import React from 'react';
import Image from 'next/image';
// Define the Course type to match the one from the parent component
type Course = {
    _id: string
    title: string
    category: string
    prices: string
    bootcampAvailability: string
    courseDetails: {
        overview: string
        accessPeriod: {
            days: string
            price: string
            _id: string
        }[]
        gcbLab: {
            image: string
            labs: {
                title: string
                description: string
                imageUrl: string
                _id: string
            }[]
        }
        onDemandLab: {
            title: string
            price: string
            _id: string
        }[]
    }
    author: {
        title: string
        description: string
        imageUrl: string
    }
    termsAndConditions: string[]
    howLearn: {
        title: string
        points: string[]
        _id: string
    }[]
    certification: {
        title: string
        description: string
        image: string
        _id: string
    }[]
    createdAt: string
    updatedAt: string
    __v: number
}

// Define props interface for TabMenu
interface TabMenuProps {
    course: Course
}

const Evasion_Lab = ({ course }: TabMenuProps) => {
    const cards = [
        {
            title: "On Demand Lab",
            duration: "30 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$249"
        },
        {
            title: "On Demand Lab",
            duration: "60 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$379"
        },
        {
            title: "On Demand Lab",
            duration: "90 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$499"
        },
        {
            title: "Extension",
            duration: "30 DAYS LAB EXTENSION",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$199"
        },
        {
            title: "Reattempt",
            duration: "EXAM REATTEMPT",
            extras: [],
            price: "$99"
        },
        {
            title: "",
            duration: "Exam Reattempt is only for existing or past students of this course who have already purchased this course in the past.",
            extras: [],
            price: ""
        }
    ];
    const cards2 = [
        {
            title: "Extension",
            duration: "30 DAYS LAB ACCESS FOR CERT RENEWAL",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$149"
        },
        {
            title: "Reattempt",
            duration: "ADDITIONAL RENEWAL EXAM",
            extras: [],
            price: "$29"
        },
    ];
    return (<>
        <div className="flex flex-col items-center justify-center  bg-gray-100 space-y-10">
            <div className="max-w-6xl w-full">
                <Image
                    src="/Assets/AAD.avif"
                    alt="Network Architecture Diagram"
                    width={1200}
                    height={600}
                    className="rounded-lg shadow-lg w-full"
                />
            </div>

            <div className="max-w-6xl w-full bg-white p-2 md:p-8 rounded-xl shadow-md gap-6">
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    Certified Red Team Professional Lab Objective:
                </h2>

                <div className="flex flex-col md:flex-row">
                    <p className="text-black md:text-xs text-base p-1 pt-3 md:mr-2">
                        The importance of Active Directory in an enterprise cannot be stressed enough. Used by more than 90% of Fortune 1000 companies,
                        the all-pervasive AD is the focal point for adversaries. Still, when it comes to AD security, there is a large gap of knowledge
                        which security professionals and administrators struggle to fill. Over the years, we have taught numerous professionals in real
                        world trainings on AD security and always found that there is a lack of quality material and specially, dearth of practice lab
                        where one can practice AD attacks in a controlled environment.
                    </p>
                    <div className="flex-shrink-0 p-1 m-2 flex justify-center">
                        <Image
                            src="/Assets/Spartan.avif"
                            alt="Spartan Red Team Logo"
                            width={150}
                            height={150}
                            className="h-35"
                        />
                    </div>
                </div>

                <p className="text-black md:text-xs text-base mb-4 p-1">
                    Attacking and Defending Active Directory (Certified Red Team Professional) Lab is designed to provide a platform for security
                    professionals to understand, analyze and practice threats and attacks in a modern Active Directory environment. The lab is beginner
                    friendly and comes with a complete video course and lab manual. The course and the lab are based on our years of experience of making
                    and breaking Windows and AD environments and teaching security professionals.
                </p>

                <p className="text-black p-1 md:text-xs text-base">
                    The lab is tightly integrated with the course and is designed as a practice lab rather than a challenge lab. We cover topics like AD
                    enumeration, trusts mapping, domain privilege escalation, domain persistence, Kerberos based attacks (Golden ticket, Silver ticket and more),
                    ACL issues, SQL server trusts, Defenses and bypasses of defenses.
                </p>

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                        Certified Red Team Professional Lab Objective:
                    </h2>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className='px-8'>
                            <Image src={"/Assets/Shield.avif"}
                                alt='shield'
                                width={150}
                                height={150}
                                className="h-40 w-70 mx-auto"
                            />
                        </div>
                        <div className="bg-white">
                            <ul className="list-disc md:text-xs text-base p-2 list-inside text-gray-800 space-y-1">
                                <li>Access to a lab environment (One/Two/Three months) with updated Server 2022 machines. Lab can be accessed using a web browser or VPN.</li>
                                <li>A ready to use student VM in the cloud that has all the tools pre-installed.</li>
                                <li>Life time access to all the learning material (including course updates).</li>
                                <li>14+ hours of video course</li>
                                <li>Course slides.</li>
                                <li>Lab manual.</li>
                                <li>Walk-through videos.</li>
                                <li>One Certification Exam attempt for Certified Evasion Techniques Professional (CETP) certification.</li>
                                <li>Support on email and Discord.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">What will you Learn?</h2>
                    <div className='flex flex-col md:flex-row justify-center items-center'>
                        <div className="bg-white">
                            <p className='text-black md:text-xs text-base font-bold mb-3'>The Attacking and Defending Active Directory Lab enables you to:</p>
                            <ul className="list-disc md:text-xs text-base p-2 list-inside text-gray-800 space-y-1">
                                <li>Practice various attacks in a fully patched realistic Windows environment with Server 2022 and SQL Server 2017 machine.</li>
                                <li>Multiple domains and forests to understand and practice cross trust attacks.</li>
                                <li>Learn and understand concepts of well-known Windows and Active Directory attacks.</li>
                                <li>Learn to use Windows as an attack platform and using trusted features of the OS like .NET, PowerShell and others for attacks.</li>
                                <li>Bypassing defenses like Windows Defender, Microsoft Defender for Endpoint (MDE) and Microsoft Defender for Identity (MDI).</li>
                            </ul>
                        </div>
                        <div className='px-8'>
                            <Image src={"/Assets/manwithgun.avif"}
                                alt='man with gun'
                                width={150}
                                height={150}
                                className="h-40 w-70 mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Prerequisites for the course</h2>
                    <div className='flex flex-col md:flex-row'>
                        <div className="bg-white text-left">
                            <ul className="list-disc md:text-xs text-base p-2 list-inside text-gray-800 space-y-1">
                                <li>Basic understanding of Active Directory.</li>
                                <li>Ability to use command line tools on Windows.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Purchase On-Demand Lab</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {cards.map((card, index) => (
                            <div key={index} className="border-2  border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                                {card.title && (
                                    <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                        {card.title}
                                    </div>
                                )}
                                <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                    <p>{card.duration}</p>
                                    {card.extras.map((item, i) => (
                                        <p key={i}>+ <br />{item}</p>
                                    ))}
                                </div>
                                {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Certificate Renewal - Only For Existing CRTP Certified Student</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                        {cards2.map((card, index) => (
                            <div key={index} className="border-2  border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                                {card.title && (
                                    <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                        {card.title}
                                    </div>
                                )}
                                <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                    <p>{card.duration}</p>
                                    {card.extras.map((item, i) => (
                                        <p key={i}>+ <br />{item}</p>
                                    ))}
                                </div>
                                {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-6 max-w-3xl md:text-xs text-base mx-auto">
                    <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Add to cart</h2>
                    <div className="flex flex-col md:flex-row gap-4 text-black items-center mb-6">
                        <div>
                            <label className="block mb-1">Access Period</label>
                            <select className="border-2 rounded-md px-4 py-2 w-full">
                                <option>120 Days - ₹499.00</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Quantity</label>
                            <input type="number" value="1" className="border-2 rounded-md px-4 py-2 w-24" />
                        </div>

                        <button className="bg-teal-400 text-white font-semibold px-6 py-2 rounded-full mt-4 md:mt-6">
                            Add to Cart
                        </button>
                    </div>

                    <div>
                        <h3 className="text-black mb-2">Terms of Purchase and Use:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                            <li>You can start your lab access anytime within 90 days (180 days in case you have purchased the lab on Diwali / Black Friday sale) of purchase</li>
                            <li>One Certification Exam attempt is included in the pricing. Additional exam attempts will be $99 each</li>
                            <li>Once connected over VPN, consider the lab to be a hostile environment and you are responsible for your computer’s security</li>
                            <li>The above lab is a shared environment and certain pre-specified machines will be off-limits</li>
                            <li>If you want a dedicated lab just for yourself, please use the form in the Contact-Us tab</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Evasion_Lab;