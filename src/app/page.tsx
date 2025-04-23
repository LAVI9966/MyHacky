'use client'
import Image from 'next/image'
import CourseCard from './CourseCard'
import FilterSection from './FilterSection'
import ReadTeamLabs from './ReadTeamLabs'

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