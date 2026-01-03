import './hero.css'
import { Shadersmith } from "shadersmith-r3f";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";
import { BsArrowDownCircle } from "react-icons/bs";
import Navbar from '../../ui/Navbar';
import { ToggleTheme } from '../../hooks/theme/toggleTheme';
import ResumePDF from '/assets/Quinn_Flanigan_Resume_2025.pdf'
import { ThemeContext } from '../../hooks/theme/ThemeContext';
import { useContext } from 'react';

const Hero = () => {
    const { theme } = useContext(ThemeContext);

    const skipHero = () => {
        const element = document.getElementById("about");
        element?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="gradient-container">
            <Shadersmith
                preset={theme === "light" ? "valley" : "liquid"}
                amplitude={14}
                animationSpeed={0.1}
                grain={40}
                colors={theme === "light" ? [
                    [1, 0.969, 0.91, 1],
                    [0.122, 0.125, 0.2, 1],
                    [0.855, 0.89, 0.929, 1],
                    [0.714, 0.557, 0.624, 1],
                    [0, 0, 0, 1],
                ] : [
                    [0.62, 0.612, 0.749, 1],
                    [0.349, 0.325, 0.471, 1],
                    [0.18, 0.173, 0.208, 1],
                    [0, 0, 0, 1],
                    [0.141, 0.094, 0.173, 1],
                ]}
            >

                <div className="hero-header-container">
                    <div className="hero-resume-btn">
                        <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
                            <button className="resume-btn-text">download resume</button>
                        </a>
                    </div>
                    <ToggleTheme />
                </div>
                <div className="hero-footer-container">
                    <h1 className="hero-name">quinn flanigan</h1>
                    <Navbar />
                </div>
                
                <div className="hero-mantra-container">
                    <h3 className="mantra-text">
                        Full-Stack Software Engineer passionate about solving interesting problems with code.
                    </h3>
                </div>
    
                {/* <div className="mobile-socials-container">
                    <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                        <TfiGithub size={36.5} className="brutal-icon-button" />
                    </a>
                    <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                        <GrLinkedinOption size={36.5} className="brutal-icon-button" />
                    </a>
                </div> */}
                <BsArrowDownCircle className="skip-hero-btn" size={40} onClick={skipHero} />
            </Shadersmith>
        </div>
    )
}

export default Hero