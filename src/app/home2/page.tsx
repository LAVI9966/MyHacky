import React from 'react'
import Image from 'next/image'

import LevelTabs from './LevelTabs'
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

            <LevelTabs></LevelTabs>
        </div>

    )
}

export default page