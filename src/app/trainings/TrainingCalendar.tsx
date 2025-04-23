'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TrainingCalendar: React.FC = () => {
    return (
        <div className="bg-black text-white py-16 flex flex-col items-center px-4">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="md:text-4xl text-2xl font-bold text-[#0EC9AC] mb-4 text-center"
            >
                Training Calendar
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                className="text-center text-lg mb-2"
            >
                <p>Only public trainings are listed below.</p>
                <p className="mt-2">Email us for a Private Class –</p>
                <p className="font-semibold mt-2 mb-10">contact@alteredsecurity.com</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                className="bg-[#d4d0d0] text-black p-6 rounded-md w-full max-w-md shadow-md"
            >
                <p className="mb-6 text-lg leading-relaxed">
                    Azure Cloud Attacks for Red and Blue Teams
                    <br /><br />
                    In-Person Training<br />
                    at NULLCON Goa<br />
                    26-28 February 2025
                </p>
                <button className="bg-[#0EC9AC] cursor-pointer text-white font-semibold px-6 py-3 rounded w-full hover:opacity-90 transition">
                    Contact Us
                </button>
            </motion.div>
        </div>
    );
};

export default TrainingCalendar;
