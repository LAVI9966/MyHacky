"use client";
import React, { useEffect, useState } from "react";
import AzureContent from "./AzureContent";
import OnPremContent from "./OnPremContent";
import axios from "axios";
import { useFilter } from "@/Context/FilterContext";

const RedTeamFilterSection = () => {
    const [activeTab, setActiveTab] = useState<"onPrem" | "azure" | null>("onPrem");
    const [value, setvalue] = useState(false);
    const [productTitles, setProductTitles] = useState<string[]>([]);

    const {
        selectedTitle,
        setSelectedTitle,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedDiscount,
        setSelectedDiscount,
        selectedBootcamp,
        setSelectedBootcamp,
        resetFilters,
        filteredProducts, // now available here
        loading,
        error,
    } = useFilter();

    // Fetch product titles on mount
    useEffect(() => {
        const fetchTitles = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`);
                if (response.data?.data && Array.isArray(response.data.data)) {
                    const titles = response.data.data.map((product: { title: string }) => product.title);
                    setProductTitles(titles);
                }
            } catch (error) {
                console.log("Error fetching titles:", error);
            }
        };
        fetchTitles();
    }, []);

    return (
        <section className="px-4 py-16 bg-white text-[#0e0e32]">
            <div className="max-w-4xl mx-auto">
                {/* TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    <button
                        className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeTab === "onPrem"
                                ? "bg-[#0e0e32] text-white border-[#0e0e32]"
                                : "bg-transparent text-[#0e0e32] border-[#0e0e32]"
                            }`}
                        onClick={() => {
                            setActiveTab("onPrem");
                            setvalue(true);
                        }}
                    >
                        Explore the on-prem red team Learning Path
                    </button>
                    <button
                        className={`px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 ${activeTab === "azure"
                                ? "bg-[#0e0e32] text-white border-[#0e0e32]"
                                : "bg-transparent text-[#0e0e32] border-[#0e0e32]"
                            }`}
                        onClick={() => {
                            setActiveTab("azure");
                            setvalue(true);
                        }}
                    >
                        Explore the azure red team Learning Path
                    </button>
                </div>

                {/* TOGGLED CONTENT */}
                <div className="mb-10">
                    {activeTab === "onPrem" && value && <OnPremContent />}
                    {activeTab === "azure" && value && <AzureContent />}
                </div>

                {/* FILTERS */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {/* Title Filter */}
                    <div>
                        <label className="block mb-1 font-semibold">Filter by Certification / LabName</label>
                        <select
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            value={selectedTitle}
                            onChange={(e) => setSelectedTitle(e.target.value)}
                        >
                            <option>All Products</option>
                            {productTitles.map((title, index) => (
                                <option key={index}>{title}</option>
                            ))}
                        </select>
                    </div>

                    {/* Difficulty Filter */}
                    <div>
                        <label className="block mb-1 font-semibold">Filter by Difficulty Level</label>
                        <select
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            value={selectedDifficulty}
                            onChange={(e) => setSelectedDifficulty(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>

                    {/* Discount Filter */}
                    <div>
                        <label className="block mb-1 font-semibold">Filter by Discount Offer</label>
                        <select
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            value={selectedDiscount}
                            onChange={(e) => setSelectedDiscount(e.target.value)}
                        >
                            <option value="all_prices">All Prices</option>
                            <option value="discount_only">Discounted Only</option>
                        </select>
                    </div>

                    {/* Bootcamp Filter */}
                    <div>
                        <label className="block mb-1 font-semibold">Filter by Bootcamp Availability</label>
                        <select
                            className="w-full border border-gray-300 px-4 py-2 rounded-md"
                            value={selectedBootcamp}
                            onChange={(e) => setSelectedBootcamp(e.target.value)}
                        >
                            <option value="all_bootcamps">All Bootcamps</option>
                            <option value="bootcamp_availability">Bootcamp Availability</option>
                        </select>
                    </div>

                    {/* Clear All */}
                    <div className="md:col-span-2 sm:col-span-1 flex items-end">
                        <button
                            className="w-full border border-teal-400 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50 transition-all duration-200"
                            onClick={resetFilters}
                        >
                            Clear All
                        </button>
                    </div>
                </div>

                {/* Optional: show data status */}
                {loading && <p className="mt-6 text-center text-sm text-gray-500">Loading filtered products...</p>}
                {error && <p className="mt-6 text-center text-sm text-red-500">{error}</p>}
            </div>
        </section>
    );
};

export default RedTeamFilterSection;
