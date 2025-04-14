import React from 'react';

const What_will_you_Learn = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                23 Learning Objectives, 59 Tasks, {'>'}120 Hours of Torture
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md text-sm text-gray-800 space-y-6 max-w-4xl mx-auto">
                {/* I–III Already Present Sections (omitted here for brevity) */}

                {/* IV. Local Privilege Escalation */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        IV. Local Privilege Escalation
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn and practice different local privilege escalation techniques on a Windows machine.</li>
                        <li>Hunt for local admin privileges on machines in the target domain using multiple methods.</li>
                        <li>Abuse enterprise applications to execute complex attack paths that involve bypassing antivirus and pivoting to different machines.</li>
                    </ul>
                </div>

                {/* V. Domain Privilege Escalation */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        V. Domain Privilege Escalation
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn to find credentials and sessions of high privilege domain accounts like Domain Administrators, extracting their credentials and then using credential replay attacks to escalate privileges.</li>
                        <li>Learn to extract credentials from a restricted environment where application whitelisting is enforced. Abuse derivative local admin privileges and pivot to other machines to escalate privileges to domain level.</li>
                        <li>Understand the classic Kerberoast and its variants to escalate privileges.</li>
                        <li>Enumerate the domain for objects with unconstrained delegation and abuse it to escalate privileges.</li>
                        <li>Find domain objects with constrained delegation enabled. Understand and execute the attacks against such objects to escalate privileges to a single service on a machine and to the domain administrator using alternate tickets.</li>
                        <li>Learn how to abuse privileges of Protected Groups to escalate privileges.</li>
                    </ul>
                </div>

                {/* VI. Domain Persistence and Dominance */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        VI. Domain Persistence and Dominance
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Abuse Kerberos functionality to persist with DA privileges. Forge tickets to execute attacks like Golden ticket, Silver ticket and Diamond ticket to persist.</li>
                        <li>Subvert the authentication on the domain level with Skeleton key and custom SSP.</li>
                        <li>Abuse the DC safe mode Administrator for persistence.</li>
                        <li>Abuse the protection mechanism like AdminSDHolder for persistence.</li>
                        <li>Abuse minimal rights required for attacks like DCSync by modifying ACLs of domain objects.</li>
                        <li>Learn to modify the host security descriptors of the domain controller to persist and execute commands without needing DA privileges.</li>
                    </ul>
                </div>

                {/* VII. Cross Trust Attacks */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        VII. Cross Trust Attacks
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn to elevate privileges from Domain Admin of a child domain to Enterprise Admin on the forest root by abusing Trust keys and krbtgt account.</li>
                        <li>Execute intra-forest trust attacks to access resources across forest.</li>
                        <li>Abuse SQL Server database links to achieve code execution across forest by just using the databases.</li>
                    </ul>
                </div>

                {/* VIII. Abusing AD CS */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        VIII. Abusing AD CS
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn about Active Directory Certificate Services and execute some of the most popular attacks.</li>
                        <li>Execute attacks across Domain trusts to escalate privileges to Enterprise Admins.</li>
                    </ul>
                </div>

                {/* IX. Defenses and bypass – MDE/EDR */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        IX. Defenses and bypass – MDE/EDR
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn about Microsoft’s EDR – Microsoft Defender for Endpoint.</li>
                        <li>Understand the telemetry and components used by MDE for detection.</li>
                        <li>Execute an entire chain of attacks across forest trust without triggering any alert by MDE.</li>
                        <li>Use Security 365 dashboard to verify MDE bypasses.</li>
                    </ul>
                </div>

                {/* X. Defenses and bypass – MDI */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        X. Defenses and bypass – MDI
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn about Microsoft Identity Protection (MDI).</li>
                        <li>Understand how MDI relies on anomaly to spot an attack.</li>
                        <li>Bypass various MDI detections throughout the course.</li>
                    </ul>
                </div>

                {/* XI. Defenses and bypass – Architecture and Work Culture Changes */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        XI. Defenses and bypass – Architecture and Work Culture Changes
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                            Learn briefly about architecture and work culture changes required in an organization to avoid the discussed attacks.
                            We discuss Temporal group membership, ACL Auditing, LAPS, SID Filtering, Selective Authentication, credential guard, device guard, Protected Users Group, PAW, Tiered Administration and ESAE or Red Forest.
                        </li>
                    </ul>
                </div>

                {/* XII. Defenses – Monitoring */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        XII. Defenses – Monitoring
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Learn about useful events logged when the discussed attacks are executed.</li>
                    </ul>
                </div>

                {/* XIII. Defenses and Bypass – Deception */}
                <div>
                    <div className="inline-block bg-[#2A0345] text-white px-3 py-1 rounded-md font-semibold md:text-xs text-base mb-2">
                        XIII. Defenses and Bypass – Deception
                    </div>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Understand how Deception can be effective deployed as a defense mechanism in AD.</li>
                        <li>Deploy decoy user objects, which have interesting properties set, which have ACL rights over other users and have high privilege access in the domain along with available protections.</li>
                        <li>Deploy computer objects and Group objects to deceive an adversary.</li>
                        <li>Learn how adversaries can identify decoy objects and how defenders can avoid the detection.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default What_will_you_Learn;
