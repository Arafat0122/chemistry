import { motion } from 'framer-motion';

const HeroSection = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://eduauraapublic.s3.amazonaws.com/webassets/images/blogs/simple-chemistry-hacks-in-daily-life.jpg)' }}>
                <div className="bg-black opacity-70 w-full h-full"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 text-white text-center p-4">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4 font-playfair"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to
                    <br />
                    <span className="font-cursive text-blue-600 mt-4">
                        Chemistry <strike className="text-red-500">Chemistry</strike>
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Your go-to platform for HSC Academic and Admission Preparation.
                </motion.p>

                <motion.a
                    href="/courses"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Get Started
                </motion.a>
            </div>
        </section>
    );
};

export default HeroSection;