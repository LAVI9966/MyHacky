import React from 'react'
import AboutUsBanner from './AboutUsBanner'
import AboutText from './AboutText'
import ExpertsSection from './ExpertsSection'
import TopWave from '@/components/TopWave'

const page = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <AboutText></AboutText>
            <ExpertsSection></ExpertsSection>
        </div>
    )
}

export default page