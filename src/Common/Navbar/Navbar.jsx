import { FaHome, FaBook, FaInfoCircle } from 'react-icons/fa'; // Importing React Icons

const Navbar = () => {
    return (
        <div className="navbar bg-gray-200 bg-opacity-60 text-gray-800 fixed top-0 left-0 w-full z-50">
            <div className="navbar-start flex items-center gap-2">
                <img className='w-12' src="/logo.png" alt="Chemistry Not Chemistry Logo" />
                <a className="text-2xl font-cursive text-blue-600">Chemistry <strike className="text-red-500">Chemistry</strike></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/"><FaHome className="inline mr-1" /> Home</a></li>
                    <li><a href="/courses"><FaBook className="inline mr-1" /> Courses</a></li>
                    <li><a href="/about"><FaInfoCircle className="inline mr-1" /> About</a></li>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end"> {/* Added dropdown-end for right alignment */}
                    <div tabIndex={0} className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dropdown-end"> {/* dropdown-end class ensures it aligns to the right */}
                        <li><a href="/"><FaHome className="inline mr-1" /> Home</a></li>
                        <li><a href="/courses"><FaBook className="inline mr-1" /> Courses</a></li>
                        <li><a href="/about"><FaInfoCircle className="inline mr-1" /> About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
