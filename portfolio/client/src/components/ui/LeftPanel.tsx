import Navbar from './Navbar'
import "./LeftPanel.css"
import ResumeBtn from './ResumeBtn';
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";
import avatar from "/assets/profile.png"
import { BsArrowDownCircle } from "react-icons/bs";
import { Navigate } from 'react-router';


const LeftPanel = () => {

    const skipHero = () => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="left-panel-container">
            <div className="hero-container">
                <div className="hero-text-container">
                    <img className="avatar-img" src={avatar}></img>
                    <h1 className="hero-name">Quinn Flanigan</h1>
                    <h3 className="role-text">
                        software developer
                    </h3>
                    <h3 className="mantra-text">
                        Passionate about creating innovative web experiences and turning ideas into user friendly solutions.
                    </h3>
                </div>
                <div className="mobile-socials-container">
                    <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                        <TfiGithub size={36.5} className="brutal-icon-button" />
                    </a>
                    <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                        <GrLinkedinOption size={36.5} className="brutal-icon-button" />
                    </a>
                    <ResumeBtn />
                </div>
                <div className="resume-btn-container">
                    <ResumeBtn />
                </div>
            </div>
            <Navbar />
            <BsArrowDownCircle className="skip-hero-btn" size={40} onClick={skipHero}/>
        </div>
    )
}

export default LeftPanel