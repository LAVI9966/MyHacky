import React from 'react'
import ReadTeamLabs from './ReadTeamLabs'
import FilterSection from './FilterSection'
import CourseCard from './CourseCard'
import Image from 'next/image'
import CartButton from '@/components/CartButton'
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
            <ReadTeamLabs />
            <FilterSection />
            <CourseCard />
            {/* <CartButton /> */}
        </div>
    )
}

export default page