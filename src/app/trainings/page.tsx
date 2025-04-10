import React from 'react'
import TrainingBanner from './TrainingBanner'
import FeedList from './FeedList'
import FeedList2 from './FeedList2'
import TrainingCalendar from './TrainingCalendar'
import ContactForm from './ContactForm'

const page = () => {
    return (
        <div>
            <TrainingBanner></TrainingBanner>
            <FeedList></FeedList>
            <FeedList2></FeedList2>
            <TrainingCalendar></TrainingCalendar>
            <ContactForm></ContactForm>
        </div>
    )
}

export default page