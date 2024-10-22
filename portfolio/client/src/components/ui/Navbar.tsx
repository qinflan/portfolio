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
                        <div className="nav-link theme-btn">
                            <ToggleTheme />
                        </div>
                        {/* add IDs to component URL ## */}
                        <NavLink className="nav-link" to="/">
                            HOME
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            EXPERIENCE
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            PROJECTS
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            DESIGN
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            CONTACT
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default Navbar