"use client";
import React, { useState } from "react";
import Beginner from "./Beginner";
import Intermediate from "./Intermediate";
import Advanced from "./Advanced";
const levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];

export default function LevelTabs() {
    const [activeTab, setActiveTab] = useState("BEGINNER");

    const renderContent = () => {
        switch (activeTab) {
            case "BEGINNER":
                return <Beginner />;
            case "INTERMEDIATE":
                return <Intermediate />;
            case "ADVANCED":
                return <Advanced />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#001836] p-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-px">
                {levels.map((level) => (
                    <button
                        key={level}
                        onClick={() => setActiveTab(level)}
                        className={`py-3 text-sm font-semibold tracking-wide text-center ${activeTab === level
                            ? "bg-[#4BB2AC] text-white"
                            : "bg-[#eeeeee] text-black"
                            }`}
                    >
                        {level}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <div className="mt-6">{renderContent()}</div>
        </div>
    );
}
