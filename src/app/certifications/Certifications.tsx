import React from 'react'
import CertificationCard from './CerificationsCard';

const certifications = [
    {
        title: 'CRTP Certification',
        image: '/Assets/crtp.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A certificate holder has demonstrated the understanding of AD security. They can identify and enumerate interesting information and execute variety of attack techniques like local & domain privilege escalation, persistence, trust abuse & antivirus evasion with minimal chances of detection.`,
    },
    {
        title: 'CRTE Certification',
        image: '/Assets/crte.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A certificate holder has demonstrated an expert level understanding of red team and enterprise security. They can customize open source tools and can abuse other built-in tools to perform enumeration, local privileges escalation, impersonation, pivoting, allowlisting bypasses as well as identify sensitive data in a highly secure environment`,
    },
    {
        title: 'CRTM  Certification',
        image: '/Assets/crtm.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A CRTM holder is a master in enterprise AD security. They have the ability to identify, exploit, demonstrate and fix security issues in an enterprise. They have demonstrated the ability to understand and secure the modern enterprise network by executing a silent red team operation starting from a beachhead leading to compromise of multiple forests`,
    },
    {
        title: 'CETP Certification',
        image: '/Assets/cetp.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A CETP certificate holder has demonstrated a deep understanding of Windows internals and the techniques required to bypass advanced detection mechanisms. They are equipped to reverse-engineer EDR solutions, identify and exploit vulnerabilities in order to weaponize them for evasion purposes.`,
    },
    {
        title: 'CARTP Certification',
        image: '/Assets/cartp.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A Certified Az Red Team Professional (CARTP) holder has demonstrated the skills to understand and assess security of an Azure environment. A certificate holder would have practical knowledge of assessing security of Azure infrastructure of an enterprise spread across multiple tenants and hybrid identity..`,
    },
    {
        title: 'CARTE Certification',
        image: '/Assets/carte.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A Certified Az Red Team Expert (CARTE) certificate holder has demonstrated expertise in running a red team operation against a highly secure enterprise-like Azure environment with focus on opsec and evading detection. They can assess security controls, analyze their efficacy & recommend mitigations against misconfigurations.`,
    },
    {
        title: 'CAWSP Certification',
        image: '/Assets/cawasp.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A certification holder demonstrates hands-on knowledge of app security in Azure. They have knowledge of executing security assessments of various web application technologies in Azure (like Enterprise Apps, App Services, Functions, OAuth Permissions, Databases etc.) and understanding of security controls (WAF, MDCA, MDC, etc.)`,
    },
    {
        title: 'CESP ADCS Certification',
        image: '/Assets/cesp-adcs.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A certificate holder has demonstrated the understanding of AD CS security. They can execute attacks against an enterprise environment containing AD CS. They are ready to integrate AD CS attacks in their TTPs and attack methodology`,
    },
    {
        title: 'Linux AD Certification',
        image: '/Assets/linuxad.avif', // Make sure you place your image in the public folder
        name: 'Monika',
        date: 'April 5, 2019',
        studentId: 'ADLID00001',
        description: `A certification holder demonstrates the understanding of active directory based attacks and holds the skills to test the most prevalent mis-configurations in enterprise active directory environments. They can use popular open source tools to run security assessments and penetration tests of an enterprise environment.`,
    },

]

const Certifications = () => {
    return (
        <div className="grid gap-6 p-4 md:grid-cols-3 bg-[#DBDBDB] max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
            ))}
        </div>
    )
}

export default Certifications