'use client';

export default function LiveSessionSchedule() {
    return (
        <section className="bg-[#172133] text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Live Session Schedule
                </h2>
                <p className="text-base text-white/80 mb-12">
                    Weekly 4 hours sessions start at <span className="font-semibold text-white">09:00am</span> ET and end at
                    <span className="font-semibold text-white">01:00pm</span> ET.
                </p>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-[#4A45A1] text-white text-left text-base">
                                <th className="py-3 px-6 font-semibold">Table Header</th>
                                <th className="py-3 px-6 font-semibold">Table Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-[#f2f2f2] text-black text-left text-sm ">
                                <td className="py-4 px-6">18 March 2025</td>
                                <td className="py-4 px-6">Content</td>
                            </tr>
                            {/* You can map more rows here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}