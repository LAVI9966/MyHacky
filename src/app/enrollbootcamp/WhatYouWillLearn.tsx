'use client';
import Image from 'next/image';

export default function WhatYouWillLearn() {
    return (
        <section className="bg-[#1E283A] text-white py-16 px-4 max-w-5xl mx-auto">
            <div className="max-w-5xl mx-auto md:text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">What will you learn ?</h2>
                <p className="max-w-4xl mx-auto text-sm  text-left leading-relaxed">
                    This advanced bootcamp is designed to help security professionals understand, analyze and practice threats and attacks in a modern, multi-forest Active Directory environment with fully patched Server 2019 machines.
                </p>
                <p className="max-w-4xl mx-auto mt-4 text-sm  text-left leading-relaxed">
                    In addition to learning the popular tactics, techniques and procedures (TTPs), you will also see how they change for attacks across forest trusts. You will also learn how to abuse or bypass modern Windows defenses like Advanced Threat Analytics, Local Administrator Password Solution (LAPS), Just Enough Administration (JEA), Resource-Based Constrained Delegation (RBCD), Windows Defender Application Control (WDAC), Application Whitelisting (AWL), Constrained Language Mode (CLM), virtualization and more.
                </p>
                <p className="mt-4 max-w-4xl mx-auto text-left text-sm   font-medium">
                    Attacking & Defending Active Directory: Advanced Edition (CRTE)
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
                {/* Left - Image */}
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/Assets/CRTE-Advance.avif" // Update with your saved image path
                        alt="Course Overview"
                        width={600}
                        height={400}
                        className="rounded shadow-lg w-full h-auto object-contain"
                    />
                </div>

                {/* Right - Bullet Points */}
                <div className="w-full lg:w-1/2 text-left space-y-4 text-sm ">
                    {[
                        '4 Live Sessions',
                        '4 Hrs Per Session',
                        '4 Weeks Access',
                        '60 Flags To Be Collected',
                        '29 Lab Exercises',
                        '1 CRTE Attempt',
                        'Recordings Of Live Sessions',
                    ].map((point, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <span className="text-green-400 text-lg">▶</span>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
