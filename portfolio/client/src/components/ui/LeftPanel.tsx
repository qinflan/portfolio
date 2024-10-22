import React from 'react'
import Navbar from './Navbar'
import "./LeftPanel.css"
import ResumeBtn from './ResumeBtn';
import { IoLogoGithub } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { ReactComponent as logoIcon } from "../../assets/q-logo.svg"



const LeftPanel = () => {
    return (
        <div className="left-panel-container">
            <div className="hero-container">
                <div className="socials-container">
                <logoIcon className="q-logo"/>
                <IoLogoGithub size={34} className="icon-link"/>
                <BsLinkedin size={32} className="icon-link"/>
                </div>
                <div className="hero-text-container">
                    <h1 className="hero-name">Quinn Flanigan</h1>
                    <h3 className="role-text">
                        Fullstack Software Developer
                    </h3>
                    <h3 className="mantra-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        consectetur adipiscing elit, et dolore magna aliqua.
                    </h3>
                </div>
                <ResumeBtn/>
                <Navbar />
            </div>
        </div>
    )
}

export default LeftPanel