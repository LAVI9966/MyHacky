import React from 'react'
import Image from 'next/image'
// Define the Course type to match the one from the parent component
type Course = {
    _id: string
    title: string
    category: string
    prices: string
    bootcampAvailability: string
    courseDetails: {
        overview: string
        accessPeriod: {
            days: string
            price: string
            _id: string
        }[]
        gcbLab: {
            image: string
            labs: {
                title: string
                description: string
                imageUrl: string
                _id: string
            }[]
        }
        onDemandLab: {
            title: string
            price: string
            _id: string
        }[]
    }
    author: {
        title: string
        description: string
        imageUrl: string
    }
    termsAndConditions: string[]
    howLearn: {
        title: string
        points: string[]
        _id: string
    }[]
    certification: {
        title: string
        description: string
        image: string
        _id: string
    }[]
    createdAt: string
    updatedAt: string
    __v: number
}

// Define props interface for TabMenu
interface TabMenuProps {
    course: Course
}

const Author = ({ course }: TabMenuProps) => {
    const videos = [
        {
            id: 1,
            title: 'Evading Microsoft ATA for Active Directory Domination ',
            bracket: '(BlackHat USA 2017 and BruCON 2017)',
            youtubeId: 'VIDEO_ID_1',
        },
        {
            id: 2,
            title: 'AMSI: How Windows 10 Plans to Stop Script-Based Attacks and How Well it Does it ',
            bracket: '(BlackHat USA 2016)',
            youtubeId: 'VIDEO_ID_2',
        },
        {
            id: 3,
            title: 'PowerShell for Practical Purple Teaming',
            bracket: '(x33fcon 2017)',
            youtubeId: 'VIDEO_ID_2',
        },
        {
            id: 4,
            title: ' PowerShell for Practical Purple Teaming  ',
            bracket: '(DEF CON 21)',
            youtubeId: 'VIDEO_ID_2',
        },
        {
            id: 5,
            title: 'RACE - Minimal Rights and ACE for Active Directory Dominance  ',
            bracket: '(DEF CON 2019)',
            youtubeId: 'VIDEO_ID_2',
        },
        {
            id: 6,
            title: 'Own-premises: Bypassing Microsoft Defender for Identity  ',
            bracket: '(BruCON 2022)',
            youtubeId: 'VIDEO_ID_2',
        },
        // Add more as needed...
    ];
    return (
        <div>
            <div className="p-2">
                <h2 className="text-3xl font-bold bg-gray-300 px-2 py-1 rounded-xl text-gray-800 mb-4">
                    {course.author.title}
                </h2>

                <div className="flex text-black flex-col md:text-xs text-base md:flex-row gap-4 items-start">
                    <div className="w-full md:w-40 flex-shrink-0">
                        <Image
                            src={course.author.imageUrl}
                            alt="Author Image"
                            width={160}
                            height={160}
                            className="w-full"
                        />
                    </div>

                    <div className="flex-1 md:text-sm text-base space-y-4">
                        {course.author.description.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white border rounded-lg shadow-sm p-4 space-y-4"
                        >
                            <div className="flex items-start space-x-2">
                                <div className="bg-purple-700 text-white font-bold px-2 py-1 md:text-xs text-base rounded">
                                    {video.id}
                                </div>
                                <h3 className="text-red-600 font-semibold text-sm">
                                    {video.title} <span className='text-blue-600'>{video.bracket}</span>
                                </h3>

                            </div>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-150 rounded"
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Author