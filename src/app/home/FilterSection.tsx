"use client";
import React, { useState } from "react";
import AzureContent from "./AzureContent";
import OnPremContent from "./OnPremContent";
const RedTeamFilterSection = () => {
    const [activeTab, setActiveTab] = useState<"onPrem" | "azure" | null>("onPrem");

    return (
        <section className="px-4 py-16 bg-white text-[#0e0e32]">
            <div className="max-w-4xl mx-auto">
                {/* BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <button
                        className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeTab === "onPrem"
                            ? "bg-[#0e0e32] text-white border-[#0e0e32]"
                            : "bg-transparent text-[#0e0e32] border-[#0e0e32]"
                            }`}
                        onClick={() => setActiveTab("onPrem")}
                    >
                        Explore the on-prem red team Learning Path
                    </button>
                    <button
                        className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeTab === "azure"
                            ? "bg-[#0e0e32] text-white border-[#0e0e32]"
                            : "bg-transparent text-[#0e0e32] border-[#0e0e32]"
                            }`}
                        onClick={() => setActiveTab("azure")}
                    >
                        Explore the azure red team Learning Path
                    </button>
                </div>

                {/* TOGGLED CONTENT */}
                <div className="mb-10">
                    {activeTab === "onPrem" && (
                        <OnPremContent />
                    )}
                    {activeTab === "azure" && (
                        <AzureContent />
                    )}
                </div>

                {/* FILTERS */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1 font-semibold">Filter by Certification / LabName</label>
                        <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
                            <option>All Products</option>
                            <option>Untitled Product</option>
                            <option>Advanced</option>
                            <option>Intermediate</option>
                            <option>Beginner</option>
                            <option>CRT M : Global Central Bank</option>
                            <option>(Pre-Launch) CETP : Certified Evasion Techniques Professional</option>
                            <option>[March 2025] Bootcamp CRTE : Attacking and Defending Active Directory: Advanced Edition</option>
                            <option>CRT E : Windows Red Team Lab</option>
                            <option>CRT P : Attacking and Defending Active Directory Lab</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Filter by Difficulty Level</label>
                        <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
                            <option>All Categories</option>
                            <option>Uncategorized</option>
                            <option>Advanced</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Filter by Discount Offer</label>
                        <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
                            <option>All Prices</option>
                            <option>Discounted Only</option>

                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-semibold">Filter by Bootcamp Availability</label>
                        <select className="w-full border border-gray-300 px-4 py-2 rounded-md">
                            <option>All Bootcamps</option>
                            <option>Bootcamp Availability</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 sm:col-span-1 flex items-end">
                        <button className="w-full border border-teal-400 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50 transition-all duration-200">
                            Clear All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RedTeamFilterSection;
