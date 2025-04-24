import React from 'react';

interface CourseData {
    _id: string;
    title: string;
    category: string;
    prices: string;
    bootcampAvailability: string;
    courseDetails: {
        overview: string;
        accessPeriod: {
            days: string;
            price: string;
            _id: string;
        }[];
        gcbLab: {
            image: string;
            labs: {
                title: string;
                description: string;
                imageUrl: string;
                _id: string;
            }[];
        };
        onDemandLab: {
            title: string;
            price: string;
            _id: string;
        }[];
    };
    author: {
        title: string;
        description: string;
        imageUrl: string;
    };
    termsAndConditions: string[];
    howLearn: {
        title: string;
        points: string[];
        _id: string;
    }[];
    certification: {
        title: string;
        description: string;
        image: string;
        _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface ProductComparisonPopupProps {
    isOpen: boolean;
    selectedCourses: CourseData[];
    onClose: () => void;
    onRemoveCourse: (courseId: string) => void;
}

const defaultCourse = {
    price: "₹199.00 - ₹499.00"
};

const ProductComparisonPopup: React.FC<ProductComparisonPopupProps> = ({
    isOpen,
    selectedCourses,
    onClose,
    onRemoveCourse
}) => {
    if (!isOpen) return null;

    const getPriceRange = (course: CourseData): string => {
        if (!course.prices) return defaultCourse.price;
        if (course.prices.includes("-")) return course.prices;

        if (course?.courseDetails?.accessPeriod && course.courseDetails.accessPeriod.length > 0) {
            const prices = course.courseDetails.accessPeriod
                .map(period => parseFloat(period.price.replace(/[^\d.]/g, "")))
                .filter(price => !isNaN(price));
            if (prices.length > 0) {
                const minPrice = Math.min(...prices);
                const maxPrice = Math.max(...prices);
                return minPrice === maxPrice ? `₹${minPrice}` : `₹${minPrice} - ₹${maxPrice}`;
            }
        }
        return course.prices;
    };

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 z-50 flex items-center justify-center overflow-auto">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-7xl mx-4 my-10 max-h-[80vh] overflow-y-auto">
                <div className="bg-blue-900 text-white p-4 flex justify-between items-center rounded-t-lg sticky top-0 z-10">
                    <h2 className="text-xl font-bold">COMPARE PRODUCTS</h2>
                    <button
                        onClick={onClose}
                        className="text-white text-2xl hover:text-gray-300 focus:outline-none"
                    >
                        ×
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200 border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="w-1/5 py-4 px-6 text-left text-gray-700 font-medium bg-white border border-gray-200"></th>
                                {selectedCourses.map((course) => (
                                    <th key={course._id} className="w-1/5 py-4 px-6 text-center bg-white border border-gray-200 relative">
                                        <button
                                            onClick={() => onRemoveCourse(course._id)}
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                                        >
                                            ×
                                        </button>
                                        <div className="flex  flex-col items-center mb-2">
                                            <div className="h-full w-full relative mb-4 bg-gray-100 flex items-center justify-center">
                                                <img
                                                    src={course.courseDetails.gcbLab.image}
                                                    alt={course.title}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <div className="text-gray-700 font-semibold">{course.category}</div>
                                            <div className="text-blue-600 text-base font-bold mt-2">
                                                {getPriceRange(course)}
                                            </div>
                                            <button
                                                className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-1.5 px-3 rounded-full text-xs"
                                                onClick={() => {
                                                    localStorage.setItem('selectedCourse', JSON.stringify(course));
                                                    window.location.href = '/product';
                                                }}
                                            >
                                                Select options
                                            </button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                            <tr className="bg-gray-50 font-medium">
                                <td className="py-3 px-6 border border-gray-200">Description</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 border border-gray-200">
                                        {course.courseDetails.overview ? course.courseDetails.overview.substring(0, 100) + "..." : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-3 px-6 border border-gray-200 bg-gray-50 font-medium">Availability</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 text-center border border-gray-200">
                                        {course.bootcampAvailability || "In Stock"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-3 px-6 border border-gray-200 bg-gray-50 font-medium">Access Period</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 text-center border border-gray-200">
                                        {course.courseDetails.accessPeriod.length > 0
                                            ? `${course.courseDetails.accessPeriod[0].days} days`
                                            : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-3 px-6 border border-gray-200 bg-gray-50 font-medium">Author</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 text-center border border-gray-200">
                                        {course.author?.title || "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-3 px-6 border border-gray-200 bg-gray-50 font-medium">Category</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 text-center border border-gray-200">
                                        {course.category || "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-3 px-6 border border-gray-200 bg-gray-50 font-medium">Price</td>
                                {selectedCourses.map((course) => (
                                    <td key={course._id} className="py-3 px-6 text-center text-blue-600 font-bold border border-gray-200">
                                        {getPriceRange(course)}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductComparisonPopup;
