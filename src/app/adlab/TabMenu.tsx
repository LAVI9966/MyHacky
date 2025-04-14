'use client';

import { useState } from 'react';
import Evasion_Lab from './Evasion_Lab';
import What_will_you_Learn from './What_will_you_Learn';
import Certification from './Certification';
import Author from './Author';
import Purchase_Options from './Purchase_Options';
import Contact from './Contact';

const tabs = [
    {
        component: <Evasion_Lab />,
        tab: 'Evasion Lab'
    },
    {
        component: <What_will_you_Learn />,
        tab: 'What will you Learn?'
    },
    {
        component: <Certification />,
        tab: 'Certification'
    },
    {
        component: <Author />,
        tab: 'Author'
    },
    {
        component: <Purchase_Options />,
        tab: 'Purchase Options'
    },
    {
        component: <Contact />,
        tab: 'Contact'
    },
];

export default function TabMenu() {
    const [activeTab, setActiveTab] = useState('Evasion Lab');

    let activeTabContent;

    // Implementing a switch case to render content based on the active tab
    switch (activeTab) {
        case 'Evasion Lab':
            activeTabContent = <Evasion_Lab />;
            break;
        case 'What will you Learn?':
            activeTabContent = <What_will_you_Learn />;
            break;
        case 'Certification':
            activeTabContent = <Certification />;
            break;
        case 'Author':
            activeTabContent = <Author />;
            break;
        case 'Purchase Options':
            activeTabContent = <Purchase_Options />;
            break;
        case 'Contact':
            activeTabContent = <Contact />;
            break;
        default:
            activeTabContent = <Evasion_Lab />;
    }

    return (
        <div className='bg-[#E8E6E5] py-20'>
            <div className="bg-white p-4 max-w-4xl mx-auto">
                <div className="flex flex-wrap gap-2 justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab.tab}
                            onClick={() => setActiveTab(tab.tab)}
                            className={`px-4 py-2 rounded-t-lg font-bold text-sm ${activeTab === tab.tab
                                ? 'bg-white border-t-2 border-l-2 border-r-2 border-[#0EC9AC] text-[#0EC9AC]'
                                : 'bg-[#0a1d3b] text-[#0EC9AC]'
                                }`}
                        >
                            {tab.tab}
                        </button>
                    ))}
                </div>

                {/* TAB CONTENT */}
                <div className="bg-white p-4 mt-2 rounded-b-lg">
                    {activeTabContent}
                </div>
            </div>
        </div>
    );
}
