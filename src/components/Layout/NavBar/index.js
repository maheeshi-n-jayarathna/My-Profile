// src/components/BottomNavBar.jsx
import React from 'react';
import {
    FaBars,
    FaEnvelope,
    FaHome,
    FaFolder,
    FaUser,
    FaCamera,
    FaBriefcase
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import "./NavBar.css"

const NavBar = () => {
    // const [visible, setVisible] = useState(false);
    //
    // const showNavBar = () => setVisible(true);
    // const hideNavBar = () => setVisible(false);

    return (<div className="nav-container">
            <div
                className="nav"
                // ${visible ? 'opacity-50' : 'opacity-0 transition-opacity duration-300'}
                // onMouseEnter={showNavBar}
                // onMouseLeave={hideNavBar}
            >
                <div className="nav-link">
                    <Link to="home_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaHome />
                    </Link>
                    <Link to="about_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaUser />
                    </Link>
                    <Link to="service_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaBriefcase />
                    </Link>
                    <Link to="project_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaFolder />
                    </Link>
                    <Link to="skill_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaBars />
                    </Link>
                    <Link to="gallery_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaCamera />
                    </Link>
                    <Link to="contact_id" smooth={true} duration={300} className="text-white md:text-2xl xl:text-2xl xs:text-vl p-2 hover:scale-105 cursor-pointer">
                        <FaEnvelope />
                    </Link>
                </div>
            </div>

    </div>);
};

export default NavBar;
