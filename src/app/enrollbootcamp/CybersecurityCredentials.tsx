'use client';
import Image from 'next/image';

export default function CybersecurityCredentials() {
    return (
        <section className="bg-[#070b23] text-white py-20 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-2xl sm:text-4xl font-bold md:text-center mb-16">
                    Build Your Cybersecurity Credentials
                </h2>

                {/* Content Layout */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left: Text Content */}
                    <div className="lg:w-1/2 space-y-6 text-base sm:text-lg">
                        <div>
                            <p className="font-semibold">Become a Certified Red Team Expert (CRTE)</p>
                            <p className="mt-2">
                                A certificate holder has demonstrated the capability of enumerating and understanding an unknown
                                Windows network and can identify misconfigurations, functionality abuse and trusts abuse. She
                                can use, write and modify open source tools and can abuse other built-in tools to perform
                                enumeration, local privileges escalation, impersonation, pivoting, whitelisting bypasses, and
                                antivirus evasion as well as identify sensitive data with minimal chances of detection.
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold">Bootcamp Completion Certificate</p>
                            <p className="mt-2">
                                Attendees will also get a course completion certificate after completing Learning Objectives
                                covered during the course.
                            </p>
                        </div>
                    </div>

                    {/* Right: Certificate Image */}
                    <div className="lg:w-1/2 flex justify-center">
                        <Image src="/Assets/crte.avif"  // Update path based on your file location
                            alt="CRTE Certificate"
                            width={600} height={400} className="rounded shadow-lg w-full max-w-md" />
                    </div>
                </div>
            </div>
        </section>
    );
}