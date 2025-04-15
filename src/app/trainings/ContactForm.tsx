'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({ name: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = { name: '', email: '' };

        if (!formData.name.trim()) newErrors.name = 'This field is required.';
        if (!formData.email.trim()) newErrors.email = 'This field is required.';

        setErrors(newErrors);

        if (!newErrors.name && !newErrors.email) {
            alert('Form submitted!');
        }
    };

    return (
        <div className="bg-black text-white py-16 px-4 flex flex-col items-center">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="md:text-4xl text-2xl font-bold text-[#0EC9AC] text-center mb-10"
            >
                Contact Us For More Details on Training
            </motion.h1>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="bg-[#e6e6e6] text-black w-full max-w-2xl rounded p-6 space-y-6"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="font-semibold block mb-1">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded ${errors.name ? 'border-red-500' : 'border-black'}`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <label className="font-semibold block mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-black'}`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-[#0EC9AC] text-white font-semibold w-full py-3 rounded hover:opacity-90 transition"
                >
                    Submit
                </button>
            </motion.form>
        </div>
    );
};

export default ContactForm;
