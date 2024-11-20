import React, { useEffect, useState, useRef } from 'react'
import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';
import { TbBrandGithubFilled } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";



// Navigation Bar
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const designsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start", // Scroll to the top of the section
        });
    };

    return (
        <div className="navigation">
            <nav className="navbar-container">
                <span className="w-1 bg-[var(--page-divider)] flex-shrink-0 rounded-full"></span>
                <div className="navbar-content">
                    <a className="nav-link" href="/">HOME</a>
                    <a className="nav-link" href="#experience" onClick={() => scrollToSection(experienceRef)}>EXPERIENCE</a>
                    <a className="nav-link" href="#projects" onClick={() => scrollToSection(projectsRef)}>PROJECTS</a>
                    <a className="nav-link" href="#designs" onClick={() => scrollToSection(designsRef)}>DESIGN</a>
                    <a className="nav-link" href="#contact" onClick={() => scrollToSection(contactRef)}>CONTACT</a>
                    <div className="nav-button-container">
                        <ToggleTheme />
                        <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                            <TfiGithub  size={34} className="bg-[var(--page-foreground)] rounded-lg border border-gray-300 text-[var(--icon)] cursor-pointer p-1" />
                        </a>
                        <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                            <GrLinkedinOption size={34} className="bg-[var(--page-foreground)] rounded-lg border border-gray-300 text-[var(--icon)] cursor-pointer p-1" />
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar