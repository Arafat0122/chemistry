import { FaHome, FaBook, FaInfoCircle } from 'react-icons/fa'; // Importing React Icons
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gray-200 bg-opacity-60 text-gray-800 fixed top-0 left-0 w-full z-50'>
            <div className="p-2 md:navbar">
                <Link to={'/'} className="navbar-start">
                    <div className='flex items-center gap-2'>
                        <img className='w-12' src="/logo.png" alt="Chemistry Not Chemistry Logo" />
                        <p className="text-[22px] md:text-2xl font-cursive text-blue-600">Chemistry <strike className="text-red-500">Chemistry</strike></p>
                    </div>
                </Link>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a href="/"><FaHome className="inline mr-1" /> Home</a></li>
                        <li><a href="/courses"><FaBook className="inline mr-1" /> Courses</a></li>
                        <li><a href="/about"><FaInfoCircle className="inline mr-1" /> About</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end flex flex-row lg:hidden justify-center items-center w-full"> {/* Show this row for large and medium screens */}
                <ul className="menu menu-horizontal px-1 text-2xl items-center">
                    <li><a href="/"><FaHome className="inline mr-1" /></a></li>
                    <li><a className='text-4xl'>|</a></li>
                    <li><a href="/courses"><FaBook className="inline mr-1" /></a></li>
                    <li><a className='text-4xl'>|</a></li>
                    <li><a href="/about"><FaInfoCircle className="inline mr-1" /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
