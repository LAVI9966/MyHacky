import React from 'react'
import EnrollCard from './EnrollCard'
import WhatYouWillLearn from './WhatYouWillLearn'
import CybersecurityCredentials from './CybersecurityCredentials'
import LiveSessionSchedule from './LiveSessionSchedule'
import Prerequisites from './Prerequisites'
import BootcampSyllabus from './BootcampSyllabus'

const page = () => {
    return (
        <div className='bg-[#1E283A]'>
            <EnrollCard ></EnrollCard>
            <WhatYouWillLearn></WhatYouWillLearn>
            <CybersecurityCredentials></CybersecurityCredentials>
            <LiveSessionSchedule></LiveSessionSchedule>
            <Prerequisites></Prerequisites>
            <BootcampSyllabus></BootcampSyllabus>
        </div>
    )
}

export default page