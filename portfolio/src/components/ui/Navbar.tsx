import React, {useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { TbHome } from "react-icons/tb";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { IoCubeOutline } from "react-icons/io5";
import { LuPaintbrush2 } from "react-icons/lu";
import { TbUserHexagon } from "react-icons/tb";
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
    <nav className="navbar-container">
        <div className="navbar-content">
            <NavLink className="nav-link" to="/">
                <TbHome className="icon" size={28}/>
                <span className="tooltip">Home</span>
            </NavLink>
            <NavLink className="nav-link" to="/experience">
                <PiBriefcaseDuotone className="icon" size={28}/>
                <span className="tooltip">Experience</span>
            </NavLink>
            <NavLink className="nav-link" to="/projects">
                <IoCubeOutline className="icon" size={28}/>
                <span className="tooltip">Projects</span>
            </NavLink>
            <NavLink className="nav-link" to="/design">
                <LuPaintbrush2 className="icon" size={28}/>
                <span className="tooltip">Designs</span>
            </NavLink>
            <NavLink className="nav-link" to="/contact">
                <TbUserHexagon className="icon" size={28}/>
                <span className="tooltip">Contact Me</span>
            </NavLink>
            <span className="h-8 w-px bg-gray-600 flex-shrink-0"></span>
            <div className="nav-link theme-btn">
                <ToggleTheme />
            </div>
        </div>
    </nav>
  )
}

export default Navbar