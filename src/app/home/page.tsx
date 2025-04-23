import React from 'react'
import Image from 'next/image'

import LevelTabs from './LevelTabs'
import TimerCard from './TimerCard'
import AllUsers from './Allusers'
const page = () => {
    return (
        <div className='w-full bg-[#01152C]'>
            <div className='relative w-full bg-[#01152C]'>
                <Image
                    width={1000}
                    height={1000}
                    src='/Assets/Home_bg.png'
                    alt='Hero Bg'
                    className='w-full'
                />
                <div className='absolute max-w-4xl  md:top-40 left-1/2 transform -translate-x-1/2'>
                    <TimerCard></TimerCard>
                </div>

            </div>
            <div className=' w-full bg-[#01152C] md:mt-[35rem] mt-[78rem]'>

                <LevelTabs></LevelTabs>
            </div>

        </div>

    )
}

export default page