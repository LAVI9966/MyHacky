'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';


const sponsorships = [
    {
        date: "2024/09/07",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Cybersecurity Event at Gujarat University",
    },
    {
        date: "2024/09/02",
        imgSrc: '/Assets/logo.png',
        text: "Enrollments are now open for October 2024 batches for three of our popular bootcamps",
    },
    {
        date: "2024/08/31",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor H7Tex International CTF",
    },
    {
        date: "2024/08/20",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Red Team Space EKOPARTY",
    },
    {
        date: "2024/08/11",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor HackTheBox Kerala",
    },
    {
        date: "2024/08/01",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Cyberonites Club's Cybersecurity Capture The Flag (CTF) Event",
    },
    {
        date: "2024/07/31",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor BSides Dehradun",
    },
    {
        date: "2024/07/21",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor CYBERGON_2024CTF",
    },
    {
        date: "2024/07/18",
        imgSrc: '/Assets/logo.png',
        text: "Join Altered Security at DEF CON 32! Find us at Booth # 4 in the Exhibitors area and get some cool swag. We are also running two in-person trainings DEF CON",
    },
    {
        date: "2024/07/18",
        imgSrc: '/Assets/logo.png',
        text: "​Join us for In-person DEF CON Training x 2 - August 12th and August 13th Active Directory Attacks for Red and Blue Teams - Advanced Edition",
    },
    {
        date: "2024/07/16",
        imgSrc: '/Assets/logo.png',
        text: "Join us virtually for Active Directory Attacks for Red and Blue Teams - Advanced Edition from 3-4 August 2024 and 5-6 August 2024 at BlackHAT USA",
    },
    {
        date: "2024/07/07",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor OSCTF",
    },
    {
        date: "2024/07/01",
        imgSrc: '/Assets/logo.png',
        text: "Avail 20% OFF on all the on-demand courses and lab extensions during Hacker Summer",
    },
    {
        date: "2024/06/20",
        imgSrc: '/Assets/logo.png',
        text: "Enrollments are now open for our July 2024 Bootcamps",
    },
    {
        date: "2024/06/19",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor DeadSec CTF",
    },
    {
        date: "2024/06/17",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor ShunyaCTF",
    },
    {
        date: "2024/05/25",
        imgSrc: '/Assets/logo.png',
        text: "​Altered Security is proud to sponsor CTF Event | RVCE bangalore | YCF Team | IITB Trust Lab",
    },
    {
        date: "2024/05/21",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor BSides Mumbai",
    },
    {
        date: "2024/02/27",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Cyber Conclave at VIT Bhopal University",
    },
    {
        date: "2024/05/15",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor VULNCON 2024",
    },
    {
        date: "2024/05/08",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor NahamCon 2024",
    },
    {
        date: "2024/04/26",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor OWASP Bhopal",
    },
    {
        date: "2024/04/23",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor",
    },
    {
        date: "2024/04/19",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor SecuriNets Tunisia",
    },
    {
        date: "2024/09/07",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Cybersecurity Event at Gujarat University",
    },
    {
        date: "2024/04/02",
        imgSrc: '/Assets/logo.png',
        text: "Enrollments are now open for our June 2024 Bootcamps",
    },
    {
        date: "2024/09/07",
        imgSrc: '/Assets/logo.png',
        text: "Altered Security is proud to sponsor Cybersecurity Event at Gujarat University",
    },
];

const NewsList = () => {
    return (
        <div className="bg-[#1e293b] px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {sponsorships.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="relative overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}

                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="relative z-10 flex items-start gap-4 border-b-2 border-[#0EC9AC] pb-6 bg-[#1e293b]"
                            >
                                <div className="min-w-[80px]">
                                    <Image
                                        src={item.imgSrc}
                                        alt="News Logo"
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="text-[#0EC9AC] font-bold text-lg mb-1">{item.date}</p>

                                    <p className="text-white text-sm">{item.text}</p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsList;
