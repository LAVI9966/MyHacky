"use client";
import React, { useState } from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin, FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false); // mobile dropdown

    return (
        <div className="bg-black text-gray-400 w-full z-15 ">
            <nav className="flex items-center justify-between px-6  md:justify-center relative">
                {/* Mobile Logo */}
                <div className="text-xl font-bold md:hidden text-white">
                    <Link href={'/'}>
                        <Image src='/Assets/logo.png' alt='logo' width={90} height={90} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 text-base items-center justify-center relative">
                    <li className="text-lg font-bold transform transition-transform duration-200 hover:scale-110 hover:text-white">
                        <Link href={'/'}>
                            <Image src='/Assets/logo.png' alt='logo' width={100} height={100} />
                        </Link>
                    </li>
                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/home">Courses</a></li>
                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/bootcamps">Bootcamps</a></li>
                    <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/certifications">Certifications</a>

                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/trainings">Trainings</a></li>
                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="#">Blog</a></li>
                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/resources">Resources</a></li>
                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/testimonials">Testimonials</a></li>

                    {/* About with dropdown */}
                    <li className="relative group transform transition-transform duration-200 hover:scale-110">
                        <div className="flex items-center cursor-pointer z-15 text-gray-400 hover:text-white transition">
                            <a href="/about-us" className="block px-4 py-2 ">About</a>
                            <RiArrowDropDownLine size={25} />
                        </div>
                        <ul className="absolute top-full left-0 mt-2 w-40 bg-gray-900 rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-[999]">
                            <li><a href="/about-us/careers" className="block px-4 py-2 hover:bg-gray-700 border-t-4 border-blue-400">Careers</a></li>
                            <li><a href="/about-us/news" className="block px-4 py-2 hover:bg-gray-700">News</a></li>
                        </ul>
                    </li>

                    <li className='transform transition-transform duration-200 hover:scale-110'><a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/contact">Contact Us</a></li>

                    {/* Social Icons */}
                    <li className="bg-white rounded-full p-1 transition duration-200 hover:bg-black">
                        <a className="text-black hover:text-white text-lg flex items-center justify-center" href="#"><IoLogoTwitter /></a>
                    </li>
                    <li className="bg-white rounded-full p-1 transition duration-200 hover:bg-black">
                        <a className="text-black hover:text-white text-lg flex items-center justify-center" href="#"><FaLinkedin /></a>
                    </li>
                    <li className="bg-white rounded-full p-1 transition duration-200 hover:bg-black">
                        <a className="text-black hover:text-white text-lg flex items-center justify-center" href="#"><FaDiscord /></a>
                    </li>
                </ul>

                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center space-y-4 py-6 md:hidden z-10 border-t border-gray-700">
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/home">Courses</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/bootcamps">Bootcamps</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/certifications">Certifications</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/trainings">Trainings</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="#">Blog</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/resources">Resources</a>
                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/testimonials">Testimonials</a>

                        {/* About Mobile Toggle */}
                        <div className="flex flex-col items-center">
                            <button
                                className="transform transition-transform duration-200 hover:scale-110 hover:text-white cursor-pointer"
                                onClick={() => setAboutOpen(!aboutOpen)}
                            >
                                About
                            </button>
                            {aboutOpen && (
                                <div className="flex flex-col space-y-2 mt-2 text-base">
                                    <a className="hover:text-white" href="#">Our Team</a>
                                    <a className="hover:text-white" href="#">Mission</a>
                                    <a className="hover:text-white" href="#">Careers</a>
                                </div>
                            )}
                        </div>

                        <a className="transform transition-transform duration-200 hover:scale-110 hover:text-white" href="/contact">Contact Us</a>

                        <div className="flex space-x-4 text-lg">
                            <a className="bg-white rounded-full p-2 text-black hover:text-white hover:bg-black transition" href="#"><IoLogoTwitter /></a>
                            <a className="bg-white rounded-full p-2 text-black hover:text-white hover:bg-black transition" href="#"><FaLinkedin /></a>
                            <a className="bg-white rounded-full p-2 text-black hover:text-white hover:bg-black transition" href="#"><FaDiscord /></a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
