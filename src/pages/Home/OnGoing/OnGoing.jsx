import { useState, useEffect } from 'react';
import { FaDollarSign, FaClock, FaFlask } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OnGoing = () => {
    const [ongoingCourses, setOngoingCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')  // Make sure the file path is correct
            .then(response => response.json())
            .then(data => {
                const filteredCourses = data.filter(course => course.status === "ongoing");
                setOngoingCourses(filteredCourses);
            })
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <div className="py-16 px-6">
            <h1 className="text-5xl font-audiowide font-extrabold text-center text-gray-800 mb-12">Ongoing Courses</h1>
            <div className="container mx-auto flex gap-6 flex-col lg:flex-row justify-center items-center">
                {ongoingCourses.length > 0 ? (
                    ongoingCourses.map(course => (
                        <motion.div
                            key={course.id}
                            className={`relative md:w-96 bg-${course.bgColor} p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-[24rem] justify-center overflow-hidden`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative h-40 w-full overflow-hidden rounded-lg">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 flex-grow flex flex-col justify-between">
                                <h3 className="text-lg font-bold text-gray-900 font-playfair">{course.title}</h3>
                                <p className="text-gray-700 my-2 line-clamp-3 font-merriweather">{course.description}</p>
                                <div className="md:flex items-center justify-between mt-2 font-roboto">
                                    <p className="flex items-center text-green-800 font-bold mt-2">
                                        <FaDollarSign className="mr-1 text-green-600" />
                                        <span>{course.fee}</span>
                                    </p>
                                    <p className="flex items-center text-gray-800 mt-2">
                                        <FaClock className="mr-1 text-blue-600" />
                                        <span>{course.duration}</span>
                                    </p>
                                </div>
                                <p className="flex items-center text-gray-800 mt-2 font-bold font-roboto">
                                    <FaClock className="mr-1 text-blue-600" />
                                    <span>Lectures: {course.lectures}</span>
                                </p>
                            </div>
                            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                                <FaFlask className="text-2xl text-blue-500" />
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 text-lg">No ongoing courses available.</p>
                )}
            </div>
        </div>
    );
};

export default OnGoing;