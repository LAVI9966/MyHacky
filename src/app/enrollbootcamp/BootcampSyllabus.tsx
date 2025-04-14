'use client';

const syllabus = [
    {
        title: 'Module 1',
        items: [
            'Introduction to OPSEC followed in the course and focus on stealth',
            'Introduction to Active Directory, attack methodology and tradecraft',
            'Domain Enumeration (Attacks and Defense)',
            'Enumerating information that would be useful in attacks with leaving minimal footprint on the endpoints',
            'Understand and practice what properties and information to look for when preparing attack paths to avoid detection',
            'Enumerate trust relationships within and across forests to map cross trust attack paths',
            'Learn and practice escalating to local administrator privileges in the domain by abusing OU Delegation, Restricted Groups, LAPS, Nested group membership and hunting for privileges using remote access protocols',
            'Credential Replay Attacks',
        ],
    },
    {
        title: 'Module 2',
        items: [
            'Introduction to OPSEC followed in the course and focus on stealth',
            'Introduction to Active Directory, attack methodology and tradecraft',
            'Domain Enumeration (Attacks and Defense)',
            'Enumerating information that would be useful in attacks with leaving minimal footprint on the endpoints',
            'Understand and practice what properties and information to look for when preparing attack paths to avoid detection',
            'Enumerate trust relationships within and across forests to map cross trust attack paths',
            'Learn and practice escalating to local administrator privileges in the domain by abusing OU Delegation, Restricted Groups, LAPS, Nested group membership and hunting for privileges using remote access protocols',
            'Credential Replay Attacks',
        ],
    },
    {
        title: 'Module 3',
        items: [
            'Introduction to OPSEC followed in the course and focus on stealth',
            'Introduction to Active Directory, attack methodology and tradecraft',
            'Domain Enumeration (Attacks and Defense)',
            'Enumerating information that would be useful in attacks with leaving minimal footprint on the endpoints',
            'Understand and practice what properties and information to look for when preparing attack paths to avoid detection',
            'Enumerate trust relationships within and across forests to map cross trust attack paths',
            'Learn and practice escalating to local administrator privileges in the domain by abusing OU Delegation, Restricted Groups, LAPS, Nested group membership and hunting for privileges using remote access protocols',
            'Credential Replay Attacks',
        ],
    },
    {
        title: 'Module 4',
        items: [
            'Introduction to OPSEC followed in the course and focus on stealth',
            'Introduction to Active Directory, attack methodology and tradecraft',
            'Domain Enumeration (Attacks and Defense)',
            'Enumerating information that would be useful in attacks with leaving minimal footprint on the endpoints',
            'Understand and practice what properties and information to look for when preparing attack paths to avoid detection',
            'Enumerate trust relationships within and across forests to map cross trust attack paths',
            'Learn and practice escalating to local administrator privileges in the domain by abusing OU Delegation, Restricted Groups, LAPS, Nested group membership and hunting for privileges using remote access protocols',
            'Credential Replay Attacks',
        ],
    },
];

export default function BootcampSyllabus() {
    return (
        <section className="bg-[#1E283A] text-white py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold">Bootcamp Syllabus</h2>
            </div>
            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
                {syllabus.map((module, idx) => (
                    <div key={idx} className="bg-white text-[#3a3a3a] rounded-xl overflow-hidden shadow-md">
                        <div className="bg-[#ED3237] text-white font-bold px-6 py-4 text-xl">
                            {module.title}
                        </div>
                        <ul className="p-6 space-y-4 text-[15px] leading-relaxed">
                            {module.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
