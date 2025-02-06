import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";


const Layout = () => {
    return (
        <div className="bg-gradient-to-b from-[#7fe796] to-[#4fecca] text-gray-800">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;