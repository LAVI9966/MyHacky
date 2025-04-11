// app/contact/page.tsx or wherever you need it
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
export default function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', { fullName, email });
        // Handle form submission logic here
    };

    return (
        <div className="p-8 bg-black flex items-center justify-center pt-[22px]">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-5xl space-y-6"
            >
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative z-10 flex flex-col justify-between  pb-6 "
                >
                    <h2 className="text-4xl font-bold text-[#0EC9AC]">Contact Us</h2>
                    <p className="text-white text-lg mt-2">
                        Fill the details & we will get back to you !!!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-white font-semibold mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="bg-[#0A0A0A] border border-gray-700 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0EC9AC]"
                        />
                    </div>

                    <div className="flex flex-col relative">
                        <label className="text-white font-semibold mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#0A0A0A] border border-gray-700 text-white rounded px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#0EC9AC]"
                        />

                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#0EC9AC] text-white py-3 rounded hover:bg-[#0db99c] transition-all font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
