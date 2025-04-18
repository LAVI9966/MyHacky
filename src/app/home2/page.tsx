import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div>
            <div>
                <Image
                    width={1000}
                    height={1000}
                    src='/Assets/Home_bg.png'
                    alt='Hero Bg'
                    className='w-full'
                />
            </div>
        </div>
    )
}

export default page