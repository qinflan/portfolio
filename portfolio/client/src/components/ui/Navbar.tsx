import { useEffect, useState, useRef } from "react";
import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";
import { IoMenu, IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";


// Navigation Bar
const Navbar = () => {

    //  boolean - hamburger menu on mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const menuRef = useRef<HTMLDivElement>(null);

    // click outside to close dropdown
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, []);

    // smooth scroll function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };


    return (
        <div className="navigation">
            <nav className="navbar-container">
                <span className="w-1 bg-[var(--page-divider)] flex-shrink-0 rounded-full"></span>
                <div className="navbar-content">

                    <a className="nav-link" href="/">home</a>
                    <button className="nav-link" onClick={() => scrollToSection("experience")}>experience</button>
                    <button className="nav-link" onClick={() => scrollToSection("projects")}>projects</button>
                    <button className="nav-link" onClick={() => scrollToSection("design")}>design</button>
                    <button className="nav-link" onClick={() => scrollToSection("contact")}>contact</button>

                    <div className="nav-button-container">
                        <ToggleTheme />
                        <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                            <TfiGithub size={30} className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1" />
                        </a>
                        <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                            <GrLinkedinOption size={30} className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1" />
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="mobile-menu-container" ref={menuRef}>
                    <button className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <IoClose size={20} /> : <TbMenu  size={20} />}
                    </button>

                    {isMobileMenuOpen && (
                        <div className="mobile-menu-dropdown">
                            <a className="mobile-nav-link" href="/" onClick={() => scrollToSection("home")}>home</a>
                            <button className="mobile-nav-link" onClick={() => scrollToSection("experience")}>experience</button>
                            <button className="mobile-nav-link" onClick={() => scrollToSection("projects")}>projects</button>
                            <button className="mobile-nav-link" onClick={() => scrollToSection("design")}>design</button>
                            <button className="mobile-nav-link" onClick={() => scrollToSection("contact")}>contact</button>
                        </div>
                        
                    )}
                    <ToggleTheme />
                </div>
            </nav>
        </div>

    )
}

export default Navbar