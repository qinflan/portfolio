import './hero.css'
import { Shadersmith } from "shadersmith-r3f";
import ResumeBtn from '../../ui/ResumeBtn';
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";
import avatar from "/assets/profile.png"
import { BsArrowDownCircle } from "react-icons/bs";
import Navbar from '../../ui/Navbar';

const Hero = () => {
    const skipHero = () => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="gradient-container">
            <Shadersmith
                preset="valley"
                amplitude={14}
                animationSpeed={0.1}
                grain={40}
                colors={[
                [1, 0.969, 0.91, 1],
                [0.122, 0.125, 0.2, 1],
                [0.855, 0.89, 0.929, 1],
                [0.714, 0.557, 0.624, 1],
                [0, 0, 0, 1],
                ]}
            >
                <div className="name-container">
                    <h1 className="hero-name">quinn flanigan</h1>
                </div>
                {/* <h3 className="mantra-text">
                    Passionate about turning ideas into clean, user-friendly web experiences.
                </h3> */}
    
                <div className="mobile-socials-container">
                    <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                        <TfiGithub size={36.5} className="brutal-icon-button" />
                    </a>
                    <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                        <GrLinkedinOption size={36.5} className="brutal-icon-button" />
                    </a>
                    <ResumeBtn />
                </div>
                    
                {/* <Navbar />
                <BsArrowDownCircle className="skip-hero-btn" size={40} onClick={skipHero} /> */}
            </Shadersmith>
        </div>
    )
}

export default Hero