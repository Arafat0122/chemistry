import { FaHome, FaBook, FaInfoCircle } from 'react-icons/fa'; // Importing React Icons
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gray-200 bg-opacity-60 text-gray-800 fixed top-0 left-0 w-full z-50'>
            <div className="p-2 md:navbar">
                <NavLink to={'/'} className="navbar-start">
                    <div className='flex items-center gap-2'>
                        <img className='w-12' src="/logo.png" alt="Chemistry Not Chemistry Logo" />
                        <p className="text-[22px] md:text-2xl font-cursive text-blue-600">Chemistry <strike className="text-red-500">Chemistry</strike></p>
                    </div>
                </NavLink>
                <div className="navbar-end hidden lg:flex font-semibold text-gray-700">
                    <ul className="menu menu-horizontal px-5 text-lg gap-5">
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gray-900 border-b-4 border-blue-600 px-3 transition-colors flex items-center"
                                    : "text-gray-500 px-3 hover:text-blue-700 hover:animate-bounce border-gray-500 transition-colors flex items-center"
                            }
                        >
                            <FaHome className="mr-2" />
                            Home
                        </NavLink>
                        <NavLink
                            to={"/courses"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gray-900 border-b-4 border-blue-600 px-3 transition-colors flex items-center"
                                    : "text-gray-500 px-3 hover:text-blue-700 hover:animate-bounce border-gray-500 transition-colors flex items-center"
                            }
                        >
                            <FaBook className="mr-2" />
                            Courses
                        </NavLink>
                        <NavLink
                            to={"/about"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-gray-900 border-b-4 border-blue-600 px-3 transition-colors flex items-center"
                                    : "text-gray-500 px-3 hover:text-blue-700 hover:animate-bounce border-gray-500 transition-colors flex items-center"
                            }
                        >
                            <FaInfoCircle className="mr-2" />
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-end flex flex-row lg:hidden justify-center items-center w-full"> {/* Show this row for large and medium screens */}
                <ul className="menu menu-horizontal text-2xl items-center">
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-4 border-blue-600 px-2"
                                : "px-2"
                        }
                    >
                        <FaHome className="inline" />
                    </NavLink>
                    <li><p className='text-4xl'>|</p></li>
                    <NavLink
                        to={"/courses"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-4 border-blue-600 px-2"
                                : "px-2"
                        }
                    >
                        <FaBook className="inline" />
                    </NavLink>
                    <li><p className='text-4xl'>|</p></li>
                    <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                            isActive
                                ? "border-b-4 border-blue-600 px-2"
                                : "px-2"
                        }
                    >
                        <FaInfoCircle className="inline" />
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
