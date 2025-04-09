"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TopWave from "@/components/TopWave";
const AboutText = () => {
    return (<>
        <section className="bg-[#01142D] text-white py-16 px-6 md:px-20">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Image with Motion */}

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="md:w-1/2"
                >
                    <Image
                        src="/Assets/abouttext.avif"
                        alt="Teaching session"
                        width={700}
                        height={350}
                        className="rounded-3xl shadow-lg w-[100%] h-[90%]"
                    />
                </motion.div>

                {/* Text */}
                <div className="md:w-1/2 text-[17px] leading-relaxed space-y-4">
                    <p>
                        Altered Security is an edtech with focus on hands-on learning through its red team training platform and cyber ranges. It has offices in India and Singapore.We are experts in red team training, InfoSec education platform and cyber ranges. We pioneered affordable red team labs and have trained more than 25000+ information security professionals from more than 130+ countries across the globe through our in person and online trainings.​Our hands-on certifications are industry-recognized and are very popular with professionals and organizations to demonstrate skills.​Led by Nikhil Mittal, a world renowned expert in Red Team, Active Directory Security, Azure Security and PowerShell, our team consists of seasoned red teamers, penetration testers, bug bounty hunters and developers. Members of the team regularly release open source security tools, speak at conferences, local security meetups and hunt for bugs in well-known applications.​Our team members have spoken at top hacker conferences like BlackHat USA, DEF CON, BruCON and many more.
                    </p>
                </div>

            </div>
        </section >
    </>
    );
};

export default AboutText;
