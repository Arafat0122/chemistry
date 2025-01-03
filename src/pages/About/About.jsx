import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <div className="pt-36 lg:pt-24 px-6 pb-10">
            {/* Header Section */}
            <motion.h1
                className="text-5xl font-bold text-center my-10 font-playfair"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>

            {/* Profile Picture */}
            <motion.div
                className="flex justify-center mb-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <img
                    src="/Arafat0122.jpg"
                    alt="Profile"
                    className="w-60 h-60 rounded-full border-4 border-blue-600 shadow-lg"
                />
            </motion.div>

            {/* Introduction */}
            <motion.div
                className="text-lg text-center mb-10 lg:w-[800px] mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p>
                    Hi! My name is Soyeb Ahmed Arafat. I am a dedicated chemistry teacher with over 5 years of experience. I specialize in helping students who find the subject challenging. My teaching approach is tailored to meet the individual needs of each student, ensuring they gain a solid understanding of chemistry concepts.
                </p>
            </motion.div>

            {/* Skills Section */}
            <motion.h2
                className="text-4xl text-center my-6 font-playfair"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                Skills
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-around gap-5 mb-10">
                <motion.div
                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-72 lg:w-1/4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <FaGraduationCap className="text-4xl text-blue-500 mb-2" />
                    <h3 className="font-bold">Education</h3>
                    <p>Bachelor of Mathematics</p>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-72 lg:w-1/4"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <FaChalkboardTeacher className="text-4xl text-green-500 mb-2" />
                    <h3 className="font-bold">Teaching</h3>
                    <p>4+ years experience in Chemistry</p>
                </motion.div>
                <motion.div
                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-72 lg:w-1/4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <FaUsers className="text-4xl text-red-500 mb-2" />
                    <h3 className="font-bold">Student-Centered</h3>
                    <p>Focus on individual learning needs</p>
                </motion.div>
            </div>

            {/* My Education Section */}
            <motion.h2
                className="text-4xl text-center my-6 font-playfair"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
            >
                My Education
            </motion.h2>

            <div className="flex flex-col items-center">
                <motion.div
                    className="bg-blue-100 p-4 rounded-lg shadow-md mb-4 w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                >
                    <h3 className="font-bold">Carmichael College</h3>
                    <p>2022 - Present</p>
                    <p>Bachelor of Mathematics</p>
                </motion.div>

                <motion.div
                    className="bg-green-100 p-4 rounded-lg shadow-md mb-4 w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                >
                    <h3 className="font-bold">Govt. Jasmuddin Kazi Abdul Gani College, Patgram</h3>
                    <p>2020 - 2021</p>
                    <p>Higher Secondary Certificate</p>
                    <p>GPA: 5.00 / 5.00</p>
                </motion.div>

                <motion.div
                    className="bg-yellow-100 p-4 rounded-lg shadow-md mb-4 w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                >
                    <h3 className="font-bold">Islami Adarsha Biddyanikaton High School, Patgram</h3>
                    <p>2020 - 2021</p>
                    <p>Secondary School Certificate</p>
                    <p>GPA: 5.00 / 5.00</p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;