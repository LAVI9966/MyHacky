import React from 'react'
import CareerBanner from './CareerBanner'
import JobOpenings from './JobOpening'
import ContactForm from './ContactForm'

const page = () => {
    return (
        <div>
            <CareerBanner />
            <JobOpenings />
            <ContactForm />
        </div>
    )
}

export default page