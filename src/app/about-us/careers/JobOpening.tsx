'use client';

import { motion } from 'framer-motion';

const jobList = [
    {
        id: "01",
        title: "Security Researcher",
        description:
            "We are looking for Security Researchers! If you would like to research on new threats and create challenges on Windows, this is the right opportunity!",
    },
    {
        id: "02",
        title: "Security Engineer",
        description:
            "We are looking for Security Engineers who are passionate about information security & with demonstrated experience in Windows and Active Directory security.",
    },
];

const JobOpenings = () => {
    return (
        <div className="bg-[#111c2e] px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {jobList.map((job, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className="relative overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col justify-between border-b-4 border-teal-400 pb-6 bg-[#111c2e]"
                            >
                                <div>
                                    <h2 className="text-4xl font-bold text-[#0EC9AC] mb-2">
                                        {job.id}.
                                    </h2>
                                    <h3 className="text-xl font-semibold text-[#0EC9AC]">
                                        {job.title}
                                    </h3>
                                    <p className="text-white mt-2 text-sm leading-relaxed">
                                        {job.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="bg-[#0EC9AC] hover:bg-white hover:text-black text-white font-semibold px-5 py-2 rounded-md text-sm">
                                        View Job
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default JobOpenings;
