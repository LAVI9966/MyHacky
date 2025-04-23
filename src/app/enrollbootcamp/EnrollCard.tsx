'use client';
import Image from 'next/image';

export default function EnrollCard() {
    return (
        <section className="relative w-full h-auto bg-black ">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Assets/enrollbootcamp.jpg" // Update the path if needed
                    alt="Azure Training Background"
                    fill
                    className="object-cover brightness-30"
                    priority
                />
            </div>

            {/* Content Layer */}
            <div className='max-w-5xl mx-auto'>
                <div className='max-w-5xl py-16 mx-auto'>

                    <h1 className="relative text-2xl text-center sm:text-3xl md:text-3xl font-bold z-15">
                        Attacking and Defending Azure Cloud: Advanced Edition [February 2025]
                    </h1>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-10 text-white">

                    {/* Left - Text */}
                    <div className="flex-1 space-y-6 md:text-center lg:text-left">
                        <p className="text-base text-left md:text-sm sm:text-lg leading-relaxed">
                            Take your Azure Red Team skills to the next level. Get trained in Azure pentesting, Red Teaming and Defense against an enterprise-like live Azure environment with focus on OPSEC and bypassing defenses. Earn the Certified Azure Red Team Expert (CARTE) certification.
                            <br /><br />
                            <strong>Starts:</strong> 1st February 2025 <strong>Duration:</strong> 4 weeks<br />
                            Recordings of live sessions included!
                        </p>
                        <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-semibold px-6 py-3 rounded shadow-lg transition">
                            Enroll Now
                        </button>
                    </div>

                    {/* Right - Certificate Image */}
                    <div className="flex-1 md:max-w-md w-full">
                        <div className="rounded-lg overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="/Assets/crte.avif" // Use the same certificate image
                                alt="CRTE Certificate"
                                width={500}
                                height={400}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
