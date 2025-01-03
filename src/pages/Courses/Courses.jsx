import PropTypes from 'prop-types';
import { FaFlask, FaDollarSign, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Course data
const courses = [
    {
        "id": 9,
        "title": "HSC-25 Chemistry Saviour Batch",
        "fee": "2500 + 2500 BDT",
        "duration": "4 months +",
        "lectures": "50+",
        "status": "ongoing",
        "description": "A dedicated program designed for students who feel left behind in Chemistry. Join us to acquire better results and build your confidence in the subject.",
        "image": "https://static1.squarespace.com/static/5df1487b820f5e45bef493b9/t/5df4bfab3b2bfa139fe3a951/1726311499142/",
        "bgColor": "bg-blue-200"
    },
    {
        "id": 1,
        "title": "Chemistry 1st Paper - Chapter 02",
        "fee": "1200 BDT",
        "duration": "1 month",
        "lectures": "14+",
        "status": "stat",
        "description": "Introduction to Qualitative Chemistry.",
        "image": "https://www.reagent.co.uk/wp-content/uploads/chem/ca/chemicals-used-in-a-colour-change-test-scaled-1.jpg",
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
        "image": "https://png.pngtree.com/background/20230618/original/pngtree-visualizing-basic-chemical-bonds-within-cells-and-molecules-3d-render-of-picture-image_3710902.jpg",
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1vIEFf3jqAQh8d7l5xVzmGcWLPH8Li2mnQ&s",
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
        "image": "https://btsoft.com/wp-content/uploads/2023/12/20231212_BTS_ModernLaboratory_SupportImage.png",
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
        "image": "https://www.reagent.co.uk/wp-content/uploads/2022/07/sustainable-chemistry-scaled-1.webp",
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
        "image": "https://www.reagent.co.uk/wp-content/uploads/scie/ti/scientist-working-in-a-lab-scaled-1.webp",
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
        "image": "https://gaskatel.de/wp-content/uploads/Gaskatel-Halfcell-Danielelement-1024x621.png",
        "bgColor": "bg-indigo-100"
    },
    {
        "id": 8,
        "title": "Chemistry 2nd Paper - Chapter 02",
        "fee": "2500 BDT",
        "duration": "2 months +",
        "lectures": "24+",
        "status": "ongoing",
        "description": "In-depth study of Organic Chemistry.",
        "image": "https://www.chemicals.co.uk/wp-content/uploads/2021/09/chalkboard-sign-saying-organic-chemistry-scaled-e1654607124262.jpg",
        "bgColor": "bg-teal-100"
    }
];

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
    return (
        <div>
            <h1 className="text-5xl font-extrabold font-serif text-center pt-36 lg:pt-24 pb-10 text-gray-700">Courses</h1>
            <CourseList courses={courses} />
        </div>
    );
};

export default Courses;