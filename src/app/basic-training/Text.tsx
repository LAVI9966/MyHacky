import React from 'react';

const Text = () => {
    return (
        <div className='w-full bg-[#1F283B]'>
            <div className="w-full bg-[#1F283B] px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
                <p className="text-white leading-relaxed text-sm sm:text-xl">
                    Enterprises are managed using Active Directory (AD) and it often forms the backbone of the complete enterprise network. Therefore, to secure an enterprise from an adversary, it is inevitable to secure its AD environment. To secure AD, you must understand different techniques and attacks used by adversaries against it. Often burdened with maintaining backward compatibility and interoperability with a variety of products, AD environments lack ability to tackle latest threats.
                    <br /><br />
                    This training is aimed towards attacking modern AD Environment using built-in tools like PowerShell and other trusted OS resources. The training is based on real world penetration tests and Red Team engagements for highly secured environments.
                    <br /><br />
                    <strong>Some of the techniques (see the course content for details), used in the course:</strong>
                    <ul className="list-disc list-inside mt-2 ml-4">
                        <li>Extensive AD Enumeration</li>
                        <li>Active Directory trust mapping and abuse</li>
                        <li>Privilege Escalation (User Hunting, Delegation issues and more)</li>
                        <li>Kerberos Attacks and Defense</li>
                        <li>Cross forest trust abuse</li>
                        <li>Credentials Replay Attacks (Over-PTH, Token Replay etc.)</li>
                        <li>Abusing trusts for MS products</li>
                        <li>Persistence (DCShadow, WMI, GPO, Domain and Host ACLs and more)</li>
                        <li>Monitoring Active Directory</li>
                        <li>Defenses</li>
                        <li>Bypassing defenses</li>
                    </ul>
                    <br />
                    The course is a mixture of fun, demos, exercises, hands-on and lecture. You start from compromise of a user desktop and work your way up to multiple forest pwnage. The training focuses more on methodology and techniques than tools.
                    <br /><br />
                    Attendees will get free one month access to an Active Directory environment comprising of multiple domains and forests, during and after the training. This training aims to change how you test an Active Directory Environment.
                    <br /><br />
                    <strong>Course Content</strong>
                    <ul className="list-disc list-inside mt-2 ml-4">
                        <li>Introduction to Active Directory and Kerberos</li>
                        <li>Introduction to PowerShell</li>
                        <li>Domain Enumeration (Attacks and Defense)</li>
                        <li>Trust and Privileges Mapping</li>
                        <li>Local Privilege Escalation</li>
                        <li>Credential Replay Attacks (Over-PTH, Token Replay etc.)</li>
                        <li>Domain Privilege Escalation (Attacks and Defense)</li>
                        <li>Dumping System and Domain Secrets</li>
                        <li>Kerberos Attacks and Defense (Golden, Silver tickets and more)</li>
                        <li>Cross Forest Trust abuse (Attacks and Defense)</li>
                        <li>Delegation Issues</li>
                        <li>Abusing trusts for MS products</li>
                        <li>Attacking Azure integration and components</li>
                        <li>Persistence Techniques</li>
                        <li>Monitoring AD</li>
                        <li>Defenses</li>
                        <li>Bypassing Defenses</li>
                    </ul>
                    <br />
                    <strong>What would the attendees gain?</strong>
                    <ol className="list-decimal list-inside mt-2 ml-4">
                        <li>One month access to the online Lab, solutions to exercises and Lab manual.</li>
                        <li>The attendees would learn powerful attack techniques which could be applied from day one after the training.</li>
                        <li>The attendees would understand that it is not always required to use third party executables, non-native code or memory corruption exploits on the targets in AD.</li>
                    </ol>
                    <br />
                    <strong>Prerequisites</strong>
                    <ol className="list-decimal list-inside mt-2 ml-4">
                        <li>Basic understanding of how penetration tests are done.</li>
                        <li>Basic understanding of Active Directory.</li>
                        <li>An open mind.</li>
                    </ol>
                    <br />
                    <strong>System Requirements</strong>
                    <ol className="list-decimal list-inside mt-2 ml-4">
                        <li>System with 4 GB RAM and ability to install OpenVPN client and RDP to Windows boxes.</li>
                    </ol>
                </p>
            </div>
        </div>
    );
};

export default Text;
