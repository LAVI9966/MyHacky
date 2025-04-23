import React from 'react'

const ReadTeamLabs = () => {
    return (
        <section className="bg-white py-16 px-4 text-center text-gray-800">
            <div className="max-w-4xl md:mx-auto mx-3">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0e0e32] mb-6 uppercase tracking-wide">
                    Our Red Team Labs
                </h2>
                <p className="text-base leading-relaxed text-left mb-8">
                    Learn and practice on-prem and Azure Red team and enterprise security skills! Based on our years of experience in designing, running and maintaining some of the most popular Enterprise Red Team labs and certifications!
                </p>

                <div className="text-left  mx-auto space-y-4 text-base md:text-base">
                    <p>Choose from the following purchase options:</p>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>
                            Individual Course : Select any course of our choice.
                        </li>
                        <li>
                            On-Prem Red Team or Azure Red Team Learning Path : Enjoy a 10% discount.
                        </li>
                        <li>
                            Create Your Own Learning Path : Select three or more courses and enjoy up to 10% discount.
                        </li>
                    </ul>

                    <p>
                        Contact us (or write to <a href="mailto:info@hackysecurity.com" >info@hackysecurity.com</a>) for business inquiries and bulk purchases.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReadTeamLabs