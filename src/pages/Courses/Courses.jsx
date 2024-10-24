import PropTypes from 'prop-types';
import { FaFlask, FaDollarSign, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Course data
const courses = [
    {
        "id": 1,
        "title": "Chemistry 1st Paper - Chapter 02",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "14+",
        "status": "stat",
        "description": "Introduction to Qualitative Chemistry.",
        "image": "/images/chapter02.png",
        "bgColor": "bg-green-100"
    },
    {
        "id": 2,
        "title": "Chemistry 1st Paper - Chapter 03",
        "fee": "1200 BDT",
        "duration": "1 month+",
        "lectures": "16+",
        "status": "ongoing",
        "description": "Periodic Properties and Chemical Bonding.",
        "image": "/images/chapter03.png",
        "bgColor": "bg-blue-100"
    },
    {
        "id": 3,
        "title": "Chemistry 1st Paper - Chapter 04",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "14+",
        "status": "upcoming",
        "description": "Chemical Changes and Reactions.",
        "image": "/images/chapter04.png",
        "bgColor": "bg-yellow-100"
    },
    {
        "id": 4,
        "title": "Chemistry 1st Paper - Chapter 01 and 02",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "14+",
        "status": "stat",
        "description": "Safe Use in Laboratory and Qualitative Chemistry.",
        "image": "/images/chapter01-02.png",
        "bgColor": "bg-red-100"
    },
    {
        "id": 5,
        "title": "Chemistry 2nd Paper - Chapter 01",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "14+",
        "status": "stat",
        "description": "Understanding Environmental Chemistry.",
        "image": "/images/chapter01_2ndPaper.png",
        "bgColor": "bg-pink-100"
    },
    {
        "id": 6,
        "title": "Chemistry 2nd Paper - Chapter 03",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "12+",
        "status": "upcoming",
        "description": "Quantitative Analysis in Chemistry.",
        "image": "/images/chapter03_2ndPaper.png",
        "bgColor": "bg-purple-100"
    },
    {
        "id": 7,
        "title": "Chemistry 2nd Paper - Chapter 04 and 05",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "12+",
        "status": "stat",
        "description": "Exploring Electrochemistry and Economic Chemistry.",
        "image": "/images/chapter04-05_2ndPaper.png",
        "bgColor": "bg-indigo-100"
    },
    {
        "id": 8,
        "title": "Chemistry 2nd Paper - Chapter 02",
        "fee": "2500 BDT",
        "duration": "2 months +",
        "lectures": "14+",
        "status": "ongoing",
        "description": "In-depth study of Organic Chemistry.",
        "image": "/images/chapter02_2ndPaper.png",
        "bgColor": "bg-teal-100"
    }
];

// Course Card component
const CourseCard = ({ course }) => {
    return (
        <motion.div
            className={`course-card ${course.bgColor} rounded-lg shadow-lg p-4 m-2 flex flex-col h-72 justify-between`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <div className="flex justify-between mt-2">
                <p className="text-sm flex items-center">
                    <FaDollarSign className="mr-1" /> {course.fee}
                </p>
                <p className="text-sm flex items-center">
                    <FaClock className="mr-1" /> {course.duration}
                </p>
            </div>
            <p className="text-sm">Lectures: {course.lectures}</p>
            <FaFlask className="text-2xl text-blue-500 mt-2" />
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
    const allCourses = courses; // Show all courses

    return (
        <div className="course-list p-4">
            <h2 className="text-2xl font-bold mb-4">Ongoing Courses</h2>
            <div className="flex flex-wrap">
                {ongoingCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Upcoming Courses</h2>
            <div className="flex flex-wrap">
                {upcomingCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">All Courses</h2>
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
    return (
        <div>
            <h1 className="text-5xl font-bold font-serif text-center pt-24 pb-10 ">Courses</h1>
            <CourseList courses={courses} />
        </div>
    );
};

export default Courses;