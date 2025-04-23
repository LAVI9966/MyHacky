'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import TabMenu from './TabMenu'

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

const Page = () => {
    const { id } = useParams()
    const [course, setCourse] = useState<Course | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!id) return;  // Add early return if ID is not present
        const fetchCourse = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`
                )
                const courseData = response.data.data || null
                console.log("cccccc ", courseData)
                setCourse(courseData)
            } catch (error) {
                console.error('Failed to fetch course:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchCourse()
    }, [id])

    useEffect(() => {
        if (course) {
            console.log('Updated course state:', course)
        }
    }, [course])

    if (loading) return <p className="p-4 text-center">Loading...</p>
    if (!course) return <p className="p-4 text-center text-red-600">Course not found.</p>

    return (
        <div>
            <TabMenu course={course} />
        </div>
    )
}

export default Page
