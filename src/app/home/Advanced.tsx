import React, { useMemo } from 'react'
import CourseGallery from './CourseGallery'
import CourseCard from './CourseCard'
import { useFilter } from '@/Context/FilterContext'

const Advanced = () => {
    const { allProducts } = useFilter();

    // Filter courses to get only Advanced level courses
    const advancedCourses = useMemo(() => {
        return allProducts.filter(course => course.category === "advanced");
    }, [allProducts]);

    return (
        <div>
            <div className="space-y-8 my-8">
                {advancedCourses.length > 0 ? (
                    advancedCourses.map(course => (
                        <CourseCard key={course._id} course={course} />
                    ))
                ) : (
                    <div className="text-center text-gray-500">No advanced courses available at the moment.</div>
                )}
            </div>
            <CourseGallery />
        </div>
    )
}

export default Advanced