import React from 'react'

const Purchase_Options = () => {
    const cards = [
        {
            title: "On Demand Lab",
            duration: "30 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$249"
        },
        {
            title: "On Demand Lab",
            duration: "60 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$379"
        },
        {
            title: "On Demand Lab",
            duration: "90 DAYS LAB ACCESS",
            extras: ["LIFE TIME ACCESS TO COURSE MATERIAL", "ONE CERTIFICATION EXAM ATTEMPT"],
            price: "$499"
        },
        {
            title: "Extension",
            duration: "30 DAYS LAB EXTENSION",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$199"
        },
        {
            title: "Reattempt",
            duration: "EXAM REATTEMPT",
            extras: [],
            price: "$99"
        },
        {
            title: "",
            duration: "Exam Reattempt is only for existing or past students of this course who have already purchased this course in the past.",
            extras: [],
            price: ""
        }
    ];
    const cards2 = [
        {
            title: "Extension",
            duration: "30 DAYS LAB ACCESS FOR CERT RENEWAL",
            extras: ["ONE COMPLEMENTARY EXAM ATTEMPT"],
            price: "$149"
        },
        {
            title: "Reattempt",
            duration: "ADDITIONAL RENEWAL EXAM",
            extras: [],
            price: "$29"
        },
    ];
    return (
        <div>
            <div className="flex flex-col items-center justify-center md:p-6 p-2 bg-gray-100 space-y-10">
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Purchase On-Demand Lab</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {cards.map((card, index) => (
                        <div key={index} className="border-2  border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                            {card.title && (
                                <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                    {card.title}
                                </div>
                            )}
                            <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                <p>{card.duration}</p>
                                {card.extras.map((item, i) => (
                                    <p key={i}>+ <br />{item}</p>
                                ))}
                            </div>
                            {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Certificate Renewal - Only For Existing CRTP Certified Student</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {cards2.map((card, index) => (
                        <div key={index} className="border-2  border-[#2A0345] rounded-xl p-6 bg-gray-100 relative flex flex-col items-center text-center">
                            {card.title && (
                                <div className="absolute -top-5 px-4 py-2 bg-[#2A0345] text-white font-bold rounded-t-lg">
                                    {card.title}
                                </div>
                            )}
                            <div className="mt-6 md:text-xs text-base space-y-2 font-semibold text-[#2A0345]">
                                <p>{card.duration}</p>
                                {card.extras.map((item, i) => (
                                    <p key={i}>+ <br />{item}</p>
                                ))}
                            </div>
                            {card.price && <p className="text-red-600 font-bold md:text-xs text-base mt-4">{card.price}</p>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 max-w-3xl md:text-xs text-base ">
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">Add to cart</h2>
                <div className="flex flex-col md:flex-row gap-4 text-black items-center mb-6">
                    <div>
                        <label className="block mb-1">Access Period</label>
                        <select className="border-2 rounded-md px-4 py-2 w-full">
                            <option>120 Days - ₹499.00</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Quantity</label>
                        <input type="number" value="1" className="border-2 rounded-md px-4 py-2 w-24" />
                    </div>

                    <button className="bg-teal-400 text-white font-semibold px-6 py-2 rounded-full mt-4 md:mt-6">
                        Add to Cart
                    </button>
                </div>

                <div>
                    <h3 className="text-black mb-2">Terms of Purchase and Use:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>You can start your lab access anytime within 90 days (180 days in case you have purchased the lab on Diwali / Black Friday sale) of purchase</li>
                        <li>One Certification Exam attempt is included in the pricing. Additional exam attempts will be $99 each</li>
                        <li>Once connected over VPN, consider the lab to be a hostile environment and you are responsible for your computer’s security</li>
                        <li>The above lab is a shared environment and certain pre-specified machines will be off-limits</li>
                        <li>If you want a dedicated lab just for yourself, please use the form in the Contact-Us tab</li>
                    </ul>
                </div>
            </div></div>
    )
}

export default Purchase_Options