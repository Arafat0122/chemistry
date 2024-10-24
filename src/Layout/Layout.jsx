import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar/Navbar";
import Footer from "../Common/Footer/Footer";


const Layout = () => {
    return (
        <div className="bg-gradient-to-b from-[#7fcfe7] to-[#d0ec4f] text-gray-800">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;