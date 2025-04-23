'use client';

import Image from "next/image";
import { useState } from "react";

export default function Product() {
    const [quantity, setQuantity] = useState(1);
    const [accessPeriod, setAccessPeriod] = useState("");
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div className="w-full pt-5 bg-white">
            <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 w-full max-w-6xl mx-auto">
                {/* Left - Image */}
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src="/Assets/gcb.avif"
                        alt="CRTM Global Central Bank"
                        width={800}
                        height={600}
                        className="object-contain rounded "
                    />
                </div>

                {/* Right - Product Details */}
                <div className="flex-1 space-y-6">
                    <nav className="text-sm text-gray-500">
                        Home / Advanced / CRTM : Global Central Bank
                    </nav>
                    <h2 className="text-purple-700 ">Advanced</h2>
                    <h1 className="text-2xl text-black font-semibold">CRTM : Global Central Bank</h1>
                    <p className="text-2xl font-bold text-gray-500">₹199.00 – ₹499.00</p>

                    <div className="space-y-2">
                        <label className="block text-black font-semibold">Access Period</label>
                        <select
                            value={accessPeriod}
                            onChange={(e) => setAccessPeriod(e.target.value)}
                            className="border border-gray-300 text-gray-500 rounded px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <option value="">Choose an option</option>
                            <option value="1month">1 Month</option>
                            <option value="3months">3 Months</option>
                            <option value="6months">6 Months</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-16 border border-gray-300 rounded px-2 py-1"
                        />
                        <button className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-semibold">
                            Add to cart
                        </button>
                    </div>

                    <div className="text-sm flex gap-3 text-gray-500">
                        <p>SKU: N/A</p>
                        <p>
                            Category: <span className="text-purple-700 font-medium">Advanced</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="max-w-6xl mx-auto px-6 mt-10">
                {/* Fixed: Changed flex-col to flex-row for desktop, but keeping flex-col for mobile using flex-col sm:flex-row */}
                <div className="flex flex-col sm:flex-row border-b border-gray-300">
                    {[
                        { key: "description", label: "Description" },
                        { key: "additional", label: "Additional information" },
                        { key: "reviews", label: "Reviews (0)" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            className={`pb-2 px-4 text-left mb-2 sm:mb-0 font-semibold text-sm transition-colors duration-200 ${activeTab === tab.key
                                    ? "border-b-2 border-purple-800 text-gray-800"
                                    : "border-transparent text-gray-600 hover:text-blue-600"
                                }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 text-gray-700">
                    {activeTab === "description" && <p>Global Central Bank (GCB) is a one of a kind Enterprise Windows and Active Directory Cyber Range. It helps enterprises test capabilities of both their Red and Blue teams in an Enterprise Windows network. GCB is a true multi-forest environment that mimics a financial institution's network.</p>}

                    {activeTab === "additional" && (
                        <table className="w-full text-left">
                            <tbody>
                                <tr className="border-t">
                                    <th className="py-2 px-4 font-medium">Access Period</th>
                                    <td className="py-2 px-4">
                                        1 Month, 3 Months, 6 Months
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )}

                    {activeTab === "reviews" && (
                        <div className="space-y-4">
                            <p>There are no reviews yet.</p>
                            <div className="border p-6 space-y-4 bg-white rounded shadow-sm">
                                <h3 className="text-lg font-semibold">
                                    Be the first to review "CRTM : Global Central Bank"
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Your email address will not be published. Required fields are marked *
                                </p>
                                <form className="space-y-4">
                                    <div>
                                        <label className="font-bold block">Your rating *</label>
                                        <div className="flex space-x-1 text-xl text-yellow-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star}>☆</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-bold block">Your review *</label>
                                        <textarea
                                            rows={4}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block">Name *</label>
                                            <input className="w-full border border-gray-300 rounded px-3 py-2" />
                                        </div>
                                        <div>
                                            <label className="block">Email *</label>
                                            <input
                                                type="email"
                                                className="w-full border border-gray-300 rounded px-3 py-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" />
                                            <span>
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-semibold"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}