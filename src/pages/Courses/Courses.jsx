import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaFlask, FaDollarSign, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Course Card component
const CourseCard = ({ course }) => {
    return (
        <motion.div
            className={`relative ${course.bgColor} p-4 m-2 w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-md transition-shadow hover:shadow-xl flex flex-col h-[22rem] justify-between overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Card Image */}
            <div className="relative h-36 w-full overflow-hidden rounded-lg">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Course Info */}
            <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 my-2 line-clamp-3">{course.description}</p>

                <div className="flex items-center justify-between mt-2">
                    <p className="text-sm flex items-center text-gray-800">
                        <FaDollarSign className="mr-1 text-green-600" /> {course.fee}
                    </p>
                    <p className="text-sm flex items-center text-gray-800">
                        <FaClock className="mr-1 text-blue-600" /> {course.duration}
                    </p>
                </div>

                <p className="text-sm text-gray-700 mt-1">Lectures: {course.lectures}</p>
            </div>

            {/* Flask Icon */}
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <FaFlask className="text-2xl text-blue-500" />
            </div>
        </motion.div>
    );
};

// Prop Types validation for CourseCard
CourseCard.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        fee: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        lectures: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bgColor: PropTypes.string.isRequired,
    }).isRequired,
};

// Course List component
const CourseList = ({ courses }) => {
    const ongoingCourses = courses.filter(course => course.status === "ongoing");
    const upcomingCourses = courses.filter(course => course.status === "upcoming");
    const allCourses = courses;

    return (
        <div className="course-list p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ongoing Courses</h2>
            <div className="flex flex-wrap">
                {ongoingCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Upcoming Courses</h2>
            <div className="flex flex-wrap">
                {upcomingCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">All Courses</h2>
            <div className="flex flex-wrap">
                {allCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

// Prop Types validation for CourseList
CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            fee: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            lectures: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            bgColor: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Main Courses component
const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/courses.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load courses');
                }
                return response.json();
            })
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-xl font-bold text-gray-600">Loading courses...</p>;
    }

    if (error) {
        return <p className="text-center text-xl font-bold text-red-600">Error: {error}</p>;
    }

    return (
        <div>
            <h1 className="text-5xl font-extrabold font-serif text-center pt-36 lg:pt-24 pb-10 text-gray-700">Courses</h1>
            <CourseList courses={courses} />
        </div>
    );
};

export default Courses;