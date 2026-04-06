import './hero.css'
import './../../../grids.css'
import { Shadersmith } from "shadersmith-r3f";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { MdDownload } from "react-icons/md";
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
        <div className="gradient-container" data-speed="2">
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
            <div className="hero-grid">
                <div className="hero-header-container">
                    <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
                        <button className="hero-resume-btn">
                            <MdDownload />
                            download cv
                        </button>
                    </a>
                    <ToggleTheme />
                </div>
                <div className="hero-name-container">
                    <h1 className="hero-name">quinn flanigan</h1>
                </div>
                    <div className="hero-nav-container">
                        <RiArrowDownDoubleLine className="skip-hero-btn transition" size={34} onClick={skipHero} />
                        <Navbar />
                    </div>
                
                <div className="hero-mantra-container">
                    <RiArrowDownDoubleLine className="skip-hero-btn-mobile transition" size={34} onClick={skipHero} />
                    <h3 className="mantra-text">
                        <span>I'm a software engineer</span> passionate about building systems with intentional design.
                    </h3>
                </div>
            </div>
            </Shadersmith>
        </div>
    )
}

export default Hero