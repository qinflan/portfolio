import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';


// Navigation Bar
const Navbar = () => {
    //     // drop down menu boolean display
    //     const [openLinks, setOpenLinks] = useState(false)

    //     const toggleNavbar = () => {
    //       setOpenLinks(!openLinks);
    //     };

    //     // click outside close - hamburger menu
    //     const menuRef = useRef();

    //     useEffect(() => {
    //       const handler = (e) => {
    //           if (!menuRef.current?.contains(e.target)){
    //             setOpenLinks(false);
    //           }
    //       }

    //       document.addEventListener('mousedown', handler)
    //       return () => {
    //         document.removeEventListener('mousedown', handler)
    //       }
    //   });

    return (
        <div className="navigation">
            <div className='navbar-wrapper'>
                <span className="w-1 bg-[var(--page-divider)] flex-shrink-0 rounded-full"></span>
                <nav className="navbar-container">
                    <div className="navbar-content">
                        <NavLink className="nav-link" to="/">
                            HOME
                        </NavLink>
                        <NavLink className="nav-link" to="/experience">
                            EXPERIENCE
                        </NavLink>
                        <NavLink className="nav-link" to="/projects">
                            PROJECTS
                        </NavLink>
                        <NavLink className="nav-link" to="/design">
                            DESIGN
                        </NavLink>
                        <NavLink className="nav-link" to="/contact">
                            CONTACT
                        </NavLink>
                    </div>
                </nav>
            </div>
            <div className="nav-link theme-btn">
                <ToggleTheme />
            </div>
        </div>

    )
}

export default Navbar