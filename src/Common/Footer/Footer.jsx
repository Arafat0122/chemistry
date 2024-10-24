import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTelegramPlane, FaLocationArrow } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer bg-gray-200 text-gray-800 px-10 pt-10 flex flex-col justify-around md:flex-row">
                <aside className="flex flex-col items-start">
                    <div className="flex flex-col items-center gap-2">
                        <img className='w-12' src="/logo.png" alt="Chemistry Not Chemistry Logo" />
                        <a className="text-2xl font-cursive text-blue-600">Chemistry <strike className="text-red-500">Chemistry</strike></a>
                    </div>
                    <p>HSC Academic and Admission Preparation</p>
                    <div className="mt-4 md:mt-2 md:ml-10">
                        <div className="flex space-x-4 text-2xl">
                            <a href="https://wa.me/+8801608318553" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">
                                <FaWhatsapp className="mr-1 text-green-700" />
                            </a>
                            <a href="https://t.me/soyebarafat0122" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">
                                <FaTelegramPlane className="mr-1 text-blue-700" />
                            </a>
                            <a href="tel:+8801317110122" className="link link-hover flex items-center">
                                <FaPhoneAlt className="mr-1 text-green-500" />
                            </a>
                            <a href="mailto:soyebarafat0122@gmail.com" className="link link-hover flex items-center">
                                <FaEnvelope className="mr-1" />
                            </a>
                        </div>
                    </div>
                </aside>
                <div className="mt-4 md:mt-0 md:ml-10">
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/courses'} className="link link-hover">Courses</Link>
                    <Link to={'/about'} className="link link-hover">About</Link>
                </div>
                <div className="mt-4 md:mt-0 md:ml-10">
                    <h6 className="footer-title">Find Us</h6>
                    <a href="tel:+8801317110122" className="link link-hover flex items-center">
                        <FaPhoneAlt className="mr-2 text-green-500" /> +8801317110122
                    </a>
                    <p className="flex items-center">
                        <FaLocationArrow className="mr-2 text-red-500" />
                        Behind Rangpur Government Girls High School, Rangpur
                    </p>
                    <p>
                        <a href="https://maps.app.goo.gl/f5xTQELUzYoNeGYh6" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">
                            <FaMapLocation className="mr-2 text-blue-500" />
                            View on Google Maps
                        </a>
                    </p>
                </div>
            </footer>
            <footer className='bg-gray-200 text-gray-800'>
                <div className="md:ml-auto text-xs md:text-base py-3">
                    <p className="text-center">&copy; {new Date().getFullYear()} Chemistry Not Chemistry. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;