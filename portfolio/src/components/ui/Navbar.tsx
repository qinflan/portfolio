import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <NavLink className="nav-link" to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/">
                Experience
            </NavLink>
            <NavLink className="nav-link" to="/">
                UX Design
            </NavLink>
            <NavLink className="nav-link" to="/">
                Contact
            </NavLink>
            <NavLink className="nav-link" to="/">
                Contact
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar