import Image from 'next/image';
import React from 'react';
// Define the Course type to match the one from the parent component
type Course = {
    _id: string
    title: string
    category: string
    prices: string
    bootcampAvailability: string
    courseDetails: {
        overview: string
        accessPeriod: {
            days: string
            price: string
            _id: string
        }[]
        gcbLab: {
            image: string
            labs: {
                title: string
                description: string
                imageUrl: string
                _id: string
            }[]
        }
        onDemandLab: {
            title: string
            price: string
            _id: string
        }[]
    }
    author: {
        title: string
        description: string
        imageUrl: string
    }
    termsAndConditions: string[]
    howLearn: {
        title: string
        points: string[]
        _id: string
    }[]
    certification: {
        title: string
        description: string
        image: string
        _id: string
    }[]
    createdAt: string
    updatedAt: string
    __v: number
}

// Define props interface for TabMenu
interface TabMenuProps {
    course: Course
}

const Certification = ({ course }: TabMenuProps) => {
    return (
        <div className="bg-white md:p-6 p-2 rounded-lg shadow-md text-gray-800 space-y-10 max-w-4xl mx-auto text-sm">
            {/* Section 1: CRTP Overview */}
            <div>
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    Certified Red Team Professional (CRTP)
                </h2>


                <div className="flex flex-col md:text-xs text-base md:flex-row gap-4 items-start">
                    <div className="flex-1 space-y-4">
                        <p>
                            The Certified Red Team Professional is a completely hands-on certification. To be certified, a student
                            must solve practical and realistic challenges in our fully patched Windows infrastructure labs containing
                            multiple Windows domains and forests. The certification challenges a student to compromise Active
                            Directory by abusing features and functionalities without relying on patchable exploits. Students will
                            have 24 hours for the hands-on certification exam.
                        </p>
                        <p>
                            A certification holder has the skills to understand and assess security of an Active Directory environment.
                        </p>
                        <p>
                            In case you have to retake the exam, a re-attempt fee of $99 is applicable. There is a cool down period
                            of one month before a student can appear in the exam again. The student will get an exam environment
                            from the pool of our different exam labs. After total 3 attempts (1 included with the lab and two
                            additional attempts), a student must wait for a cool down period of 6 months.
                        </p>
                    </div>

                    <div className="w-full md:w-40 flex-shrink-0">
                        <Image
                            src="/Assets/BADGE-FINAL.avif" // make sure this is the badge image on the right
                            alt="CRTP Badge"
                            width={160}
                            height={160}
                            className="rounded-md object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2: Certificate Expiry and Renewal */}
            <div>
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    Certificate Expiry and Renewal
                </h2>
                <p className="mb-2 md:text-xs text-base">
                    To keep the certificate updated with changing skills and technologies, there is an expiry time of three
                    years for it. The renewal exam is FREE before the certificate expires. CRTP can also be renewed by taking
                    CRTE or CRTM. Please take a look at this blog post for more details:
                </p>
                <a
                    href="https://www.alteredsecurity.com/post/renewal-process-for-altered-security-certifications"
                    className="text-blue-600 underline break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://www.alteredsecurity.com/post/renewal-process-for-altered-security-certifications
                </a>
            </div>

            {/* Section 3: Exam Structure */}
            <div>
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    Exam Structure
                </h2>
                <div className="space-y-4 md:text-xs text-base">
                    <p>
                        The students are provided access to an individual Windows environment, which is fully patched and contains
                        the latest Windows operating systems with configurations and privileges like a real enterprise environment.
                    </p>
                    <p>
                        To be successful, students must solve the challenges by enumerating the environment and carefully
                        constructing attack paths. The students will need to understand how Windows domains work, as most exploits
                        cannot be used in the target network.
                    </p>
                    <p>
                        At the end of the exam, students need to submit the detailed solutions to challenges along with practical
                        mitigations.
                    </p>
                </div>
            </div>

            {/* Section 4: Certificate Benefits */}
            <div>
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    Certificate Benefits
                </h2>
                <div className="space-y-4 md:text-xs text-base">
                    <p>
                        Over the years, CRTP has been established itself as an industry-recognized certification as a Red Team
                        certification for beginners. CRTP is a prerequisite for numerous job postings and is recognized by several
                        industrial bodies and governments across the globe.
                    </p>
                    <p>
                        A certificate holder has demonstrated the understanding of AD security. She can identify and enumerate
                        interesting information and execute variety of attack techniques like local and domain privilege
                        escalation, persistence, trust abuse and antivirus evasion with minimal chances of detection.
                    </p>
                    <p>
                        The certificate holder is ready for the next level that is Certified Red Team Expert:{' '}
                        <a
                            href="https://www.alteredsecurity.com/redteamlab"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.alteredsecurity.com/redteamlab
                        </a>
                    </p>

                    <div className="mt-4 flex items-center justify-center">
                        <Image
                            src="/Assets/crtp.avif" // this should be the full cert image
                            alt="CRTP Certificate"
                            width={600}
                            height={400}
                            className="rounded-md h-70 w-100 shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
