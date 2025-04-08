import React from 'react'
import ReadTeamLabs from './ReadTeamLabs'
import FilterSection from './FilterSection'
import CourseCard from './CourseCard'
const page = () => {
    return (
        <div>
            <ReadTeamLabs />
            <FilterSection />
            <CourseCard />
        </div>
    )
}

export default page