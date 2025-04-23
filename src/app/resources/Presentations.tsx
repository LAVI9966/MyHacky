'use client';
import React from 'react';
import { motion } from 'framer-motion';

const presentations = [
    {
        title: 'BruCON 2022',
        description: 'Own-premises: Bypassing Microsoft Defender for Identity',
        buttonLabel: 'Slide Deck',
        link: 'https://www.slideshare.net/slideshow/0wnpremises-bypassing-microsoft-defender-for-identity/253345513',
    },
    {
        title: 'DEF CON 2019',
        description: 'RACE - Minimal Rights and ACE for Active Directory Dominance',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/race-minimal-rights-and-ace-for-active-directory-dominance/165870547',
    },
    {
        title: 'BruCON 2018',
        description: 'Forging Trusts for Deception in Active Directory',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/forging-trusts-for-deception-in-active-directory/118474725',
    },
    {
        title: 'IT Defense 2018',
        description: 'Hacked? Pray that the Attacker used PowerShell',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/hacked-pray-that-the-attacker-used-powershell/87635740',
    },
    {
        title: '44CON 2017',
        description: 'Red Team Revenge - Attacking Microsoft ATA',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/red-team-revenge-attacking-microsoft-ata/87704762',
    },
    {
        title: 'BlackHat USA 2017 and BruCON 2017',
        description: 'Evading Microsoft ATA for Active Directory Domination',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/evading-microsoft-ata-for-active-directory-domination/78325318',
    },
    {
        title: 'x33fcon 2017',
        description: 'PowerShell for Practical Purple Teaming',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/nikhil_mittal/powershell-for-practical-purple-teaming',
    },
    {
        title: 'BlackHat USA 2016',
        description: 'AMSI: How Windows 10 Plans to Stop Script-Based Attacks',
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/nikhil_mittal/amsi-how-windows-10-plans-to-stop-scriptbased-attacks-and-how-well-it-does-it',
    },
    {
        title: 'BlackHat Europe and DeepSec 2015',
        description: "Continuous Intrusion: Why CI tools are an Attacker's Best Friends",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/evading-microsoft-ata-for-active-directory-domination/78325318',
    },
    {
        title: 'HITB, Amsterdam 2015',
        description: "Workshop:PowerShellfor PenetrationTesters",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/nikhil_mittal/workshop-powershell-for-penetration-testers',
    },
    {
        title: 'Deepsec 2014',
        description: "Lethal ClientSide Attacks using PowerShell",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/client-side-attacks-using-powershell/42137658',
    },
    {
        title: 'DEF CON 21',
        description: "Powerpreter:Post Exploitationlike a Boss",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/powerpreter-post-exploitation-like-a-boss/24904115',
    },
    {
        title: 'BlackHat Europe 2013',
        description: "PowerShellfor PenetrationTesters",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/power-shell-forpenetrationtesters/17229375',
    },
    {
        title: 'EuSec West 12',
        description: "Owning Windows 8 with Human Interface Devices",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/owning-windows-8-with-human-interface-devices/16502468',
    },
    {
        title: 'RSA China 12',
        description: "Hacking thefuture withUSB HID",
        buttonLabel: 'View More',
        link: 'https://www.slideshare.net/slideshow/hacking-the-future-with-usb-hid/16502644',
    },
];

const getAnimationVariant = (index: number) => {
    const col = index % 3;
    if (col === 0) {
        return {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
        };
    } else if (col === 1) {
        return {
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
        };
    } else {
        return {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
        };
    }
};

const Presentations: React.FC = () => {
    return (
        <div className='bg-[#1C2A3A]'>
            <div className="bg-[#1C2A3A] py-12 px-4 overflow-x-hidden max-w-6xl mx-auto">
                <h2 className="text-center text-[#0EC9AC] font-bold text-3xl mb-10">
                    Presentations and Videos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {presentations.map((item, index) => {
                        const variants = getAnimationVariant(index);
                        return (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                variants={variants}
                                className="bg-white border-2 border-[#0EC9AC] rounded-xl p-6 text-center text-white"
                            >
                                <h3 className="text-xl font-semibold text-[#0EC9AC] mb-2">
                                    {item.title}
                                </h3>
                                <p className="mb-6 text-black">{item.description}</p>
                                <a
                                    href={item.link}
                                    className=" bg-[#0EC9AC] text-white hover:text-black hover:bg-white  font-bold px-6 py-2 rounded-full hover:opacity-90 transition w-fit mx-auto inline-block"
                                >
                                    {item.buttonLabel} &nbsp;›
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Presentations;
