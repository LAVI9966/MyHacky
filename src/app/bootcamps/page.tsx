import BootcampBanner from './BootcampBanner'
import LiveBootcamps from './LiveBootcamps'
import PastBootcamp from './PastBootcamp'
import TeachingMethodology from './TeachingMethodology'

const page = () => {
    return (
        <div>
            <BootcampBanner />
            <LiveBootcamps />
            <PastBootcamp />
            <TeachingMethodology />
        </div>
    )
}

export default page