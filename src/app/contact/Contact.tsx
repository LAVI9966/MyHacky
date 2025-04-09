import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ContactUs() {
    return (
        <div className="bg-white w-[80%] mx-auto text-black py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left - Info Section */}
                <div>
                    <h1 className="text-[60px] font-bold mb-4">Contact us</h1>
                    <p className="text-gray-600 mb-6 text-[18px]">
                        Want to get in touch? We’d love to hear from you.<br />
                        Here’s how you can reach us…
                    </p>

                    <h2 className="text-lg  mb-2">Our Email</h2>
                    <p className="text-lg  mb-6 break-all">contact@alteredsecurity.com</p>

                    <h2 className="text-lg  mb-2">Follow Us on our Social Media</h2>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="text-white bg-[#3b5998] p-3 rounded-full">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white bg-[#1da1f2] p-3 rounded-full">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white bg-[#ff0000] p-3 rounded-full">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                {/* Right - Form Section */}
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium text-sm">Full Name <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-sm">Phone Number</label>
                            <div className="flex items-center border border-gray-300 rounded-md p-2">
                                <span className="mr-2 text-sm">+91</span>
                                <input
                                    type="tel"
                                    className="w-full outline-none text-sm"
                                    placeholder="Your number"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Email Address <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Message <span className="text-red-500">*</span></label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
