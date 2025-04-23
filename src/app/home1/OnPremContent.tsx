import Image from 'next/image';

const plans = [
    {
        title: 'BEGINNER',
        price: '\u20B910.00',
        buttonLabel: 'Add to cart',
    },
    {
        title: 'INTERMEDIATE',
        price: '\u20B911.00',
        buttonLabel: 'Add to cart',
    },
    {
        title: 'ADVANCED',
        price: '\u20B945.00',
        buttonLabel: 'Add to cart',
    },
];

export default function OnPremContent() {
    return (
        <div className="p-10 bg-white  rounded-xl shadow-md max-w-6xl mx-auto">
            <div className="text-center mb-6">
                <Image
                    src="/Assets/red-team.avif"
                    alt="On-Prem Red Team"
                    width={500}
                    height={100}
                    className="w-full"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-blue-900 text-white rounded-xl p-6 text-center">
                        <h2 className="text-xl font-bold mb-4">{plan.title}</h2>

                        <div className="space-y-4">
                            {['CARTP Access', 'CAWASP Access', 'CARTE Access'].map((label, idx) => (
                                <div key={idx}>
                                    <label className="block mb-1 text-sm">{label}</label>
                                    <select className="w-full p-2 rounded bg-white text-black">
                                        <option>30 Days</option>
                                    </select>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4 text-sm">Total bundle amount payable</p>
                        <p className="text-lg font-semibold">{plan.price}</p>

                        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full w-full">
                            {plan.buttonLabel}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
