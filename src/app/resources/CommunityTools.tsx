'use client';
import React from 'react';
import { motion } from 'framer-motion';

const tools = [
    {
        title: 'Red Labs (BETA)',
        description: 'FREE labs to sharpen your skills',
        buttonLabel: 'Try It',
        buttonLink: '#',
        bgBlack: false,
    },
    {
        title: 'Nishang',
        description: 'Using PowerShell for Penetration Testing',
        buttonLabel: 'View More',
        buttonLink: '#',
        bgBlack: true,
    },
    {
        title: 'RACE',
        description: 'Execute ACL attacks and backdoors',
        buttonLabel: 'View More',
        buttonLink: '#',
        bgBlack: false,
    },
    {
        title: 'Deploy-Deception',
        description: 'Deploy active directory decoy objects',
        buttonLabel: 'View More',
        buttonLink: '#',
        bgBlack: true,
    },
    {
        title: 'Kautilya',
        description: 'Pwnage with Human Interface Devices',
        buttonLabel: 'View More',
        buttonLink: '#',
        bgBlack: false,
    },
    {
        title: '365-Stealer',
        description: 'Check user awareness for Illicit Consent Grant attacks',
        buttonLabel: 'View More',
        buttonLink: '#',
        bgBlack: true,
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

const CommunityTools: React.FC = () => {
    return (<div className='bg-[#1C2A3A]'>
        <div className="bg-[#1C2A3A] py-12 px-4 overflow-x-hidden max-w-6xl mx-auto">
            <h2 className="text-center text-[#0EC9AC] font-bold text-3xl mb-10">
                Open Source Tools and Community Labs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 ">
                {tools.map((tool, index) => {
                    const variants = getAnimationVariant(index);

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            variants={variants}
                            className={`border-2 rounded-xl p-6 text-center flex flex-col justify-between ${tool.bgBlack
                                ? 'bg-black border-[#0EC9AC]'
                                : 'bg-transparent border-[#0EC9AC]'
                                }`}
                        >
                            <h3 className="text-xl font-semibold text-[#0EC9AC] mb-2">
                                {tool.title}
                            </h3>
                            <p className="text-white mb-6">{tool.description}</p>
                            <a
                                href={tool.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0EC9AC] text-black font-bold px-6 py-2 rounded hover:opacity-90 transition w-fit mx-auto"
                            >
                                {tool.buttonLabel} &nbsp;›
                            </a>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

export default CommunityTools;
