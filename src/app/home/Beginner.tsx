import React, { useMemo } from 'react'
import CourseGallery from './CourseGallery'
import CourseCard from './CourseCard'
import { useFilter } from '@/Context/FilterContext'

const Beginner = () => {
    const { allProducts } = useFilter();

    // Filter courses to get only Beginner level courses
    const beginnerCourses = useMemo(() => {
        return allProducts.filter(course => course.category === "beginner");
    }, [allProducts]);

    return (
        <div>
            <div className="space-y-8 my-8">
                {beginnerCourses.length > 0 ? (
                    beginnerCourses.map(course => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <div className="text-center text-gray-500">No beginner courses available at the moment.</div>
                )}
            </div>
            <CourseGallery />
        </div>
    )
}

export default Beginner