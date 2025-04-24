import React, { useMemo } from 'react'
import CourseGallery from './CourseGallery'
import CourseCard from './CourseCard'
import { useFilter } from '@/Context/FilterContext'

const Intermediate = () => {
    const { allProducts } = useFilter();

    // Filter courses to get only Intermediate level courses
    const intermediateCourses = useMemo(() => {
        return allProducts.filter(course => course.category === "intermediate");
    }, [allProducts]);

    return (
        <div>
            <div className="space-y-8 my-8">
                {intermediateCourses.length > 0 ? (
                    intermediateCourses.map(course => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <div className="text-center text-gray-500">No intermediate courses available at the moment.</div>
                )}
            </div>
            <CourseGallery />
        </div>
    )
}

export default Intermediate