'use client';

import { useState } from 'react';
import Evasion_Lab from './Evasion_Lab';
import What_will_you_Learn from './What_will_you_Learn';
import Certification from './Certification';
import Author from './Author';
import Purchase_Options from './Purchase_Options';
import Contact from './Contact';

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

export default function TabMenu({ course }: TabMenuProps) {
    const [activeTab, setActiveTab] = useState('Evasion Lab');
    console.log("gfd ", course)
    const tabs = [
        {
            component: <Evasion_Lab course={course} />,
            tab: 'Evasion Lab'
        },
        {
            component: <What_will_you_Learn course={course} />,
            tab: 'What will you Learn?'
        },
        {
            component: <Certification course={course} />,
            tab: 'Certification'
        },
        {
            component: <Author course={course} />,
            tab: 'Author'
        },
        {
            component: <Purchase_Options course={course} />,
            tab: 'Purchase Options'
        },
        {
            component: <Contact course={course} />,
            tab: 'Contact'
        },
    ];

    let activeTabContent;

    // Implementing a switch case to render content based on the active tab
    switch (activeTab) {
        case 'Evasion Lab':
            activeTabContent = <Evasion_Lab course={course} />;
            break;
        case 'What will you Learn?':
            activeTabContent = <What_will_you_Learn course={course} />;
            break;
        case 'Certification':
            activeTabContent = <Certification course={course} />;
            break;
        case 'Author':
            activeTabContent = <Author course={course} />;
            break;
        case 'Purchase Options':
            activeTabContent = <Purchase_Options course={course} />;
            break;
        case 'Contact':
            activeTabContent = <Contact course={course} />;
            break;
        default:
            activeTabContent = <Evasion_Lab course={course} />;
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