import React, {useEffect, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { PiMoonStarsDuotone } from "react-icons/pi";
import { TbHome } from "react-icons/tb";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { IoCubeOutline } from "react-icons/io5";
import { LuPaintbrush2 } from "react-icons/lu";
import { TbUserHexagon } from "react-icons/tb";




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
                <TbHome size={28}/>
                <span className="tooltip">Home</span>
            </NavLink>
            <NavLink className="nav-link" to="/experience">
                <PiBriefcaseDuotone size={28}/>
                <span className="tooltip">Experience</span>
            </NavLink>
            <NavLink className="nav-link" to="/projects">
                <IoCubeOutline size={28}/>
                <span className="tooltip">Projects</span>
            </NavLink>
            <NavLink className="nav-link" to="/design">
                <LuPaintbrush2 size={26}/>
                <span className="tooltip">Designs</span>
            </NavLink>
            <NavLink className="nav-link" to="/contact">
                <TbUserHexagon size={28}/>
                <span className="tooltip">Contact Me</span>
            </NavLink>
            <div className="nav-link theme-btn">
            <PiMoonStarsDuotone size={28} />
            </div>
        </div>
    </nav>
  )
}

export default Navbar