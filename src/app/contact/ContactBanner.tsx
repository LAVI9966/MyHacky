import React from 'react'
import Image from 'next/image'
import ContactUs from './Contact' // Keep importing from the same file

const ContactBanner = () => {
    return (
        <div className="relative w-full mb-3 h-full bg-black">
            {/* Background Image */}
            <div className="relative w-full h-[300px]">
                <Image
                    src="/Assets/ContactBg.jpg"
                    alt="Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
            </div>

            {/* ContactUs in the center overlapping the image and black bg */}
            <div className="relative z-10 -mt-50">
                <ContactUs />
            </div>
        </div>
    )
}

export default ContactBanner