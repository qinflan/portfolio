import React from 'react'
import Navbar from './Navbar'
import "./LeftPanel.css"
import ResumeBtn from './ResumeBtn';
import { IoLogoGithub } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";

const LeftPanel = () => {
    return (
        <div className="left-panel-container">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-name">Quinn Flanigan</h1>
                    <h3 className="role-text">
                        Software Developer
                    </h3>
                    <h3 className="mantra-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        consectetur adipiscing elit.
                    </h3>
                </div>
                <div className="socials-container">
                <ResumeBtn />
                    <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub size={28} className="icon-link" />
                    </a>
                    <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                        <GrLinkedinOption size={28} className="icon-link" />
                    </a>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default LeftPanel