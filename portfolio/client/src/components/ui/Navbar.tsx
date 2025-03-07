import { useEffect, useState, useRef, useContext } from "react";
import { motion, AnimatePresence } from 'motion/react'
import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import logoDark from "/assets/logo-dark.svg"
import logoLight from "/assets/logo-light.svg"
import { FiArrowUpRight } from "react-icons/fi";
import { ThemeContext } from "../hooks/theme/ThemeContext";


// Navigation Bar
const Navbar = () => {

    //  boolean - hamburger menu on mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const menuRef = useRef<HTMLDivElement>(null);
    const themeContext = useContext(ThemeContext)
    const { theme } = themeContext

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

    const navLinks = [
        { label: "about", id: "about" },
        { label: "work", id: "experience" },
        { label: "projects", id: "projects" },
        { label: "education", id: "education" },
        { label: "contact", id: "contact" },
    ];

    const dropdownVariants = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        exit: { scaleY: 0, transition: { delay: 0.2, duration: 0.6, ease: [0.32, 0, 0.36, 1] } }
    };

    const mobileLinkVars = {
        hidden: {
            y: "30vh",
            transition: {
                duration: 3,
                ease: [0, 0.55, 0.7, 1]
            }
        },

        visible: {
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.37, 0, 0.63, 1]
            }
        },
        hover: { opacity: 0.6 }
    };

    const socialLinkVars = {
        hidden: { opacity: 0, y: "20vh" },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] } }
    }

    const containerVars = {
        hidden: {
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1
            }
        },

        visible: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: 1
            }
        }
    }

    return (
        <div className="navigation">
            <div className="logo-container">
                {theme === "light" ? (
                    <img src={logoLight} onClick={() => (window.scrollTo(0, 0), location.reload())}></img>
                ) : (
                    <img src={logoDark} onClick={() => (window.scrollTo(0, 0), location.reload())}></img>
                )}
            </div>

            <nav className="navbar-container">
                <span className="w-1 bg-[var(--page-divider)] flex-shrink-0 rounded-full"></span>
                <div className="navbar-content">

                    <a className="nav-link" href="/">home</a>
                    <button className="nav-link" onClick={() => scrollToSection("experience")}>experience</button>
                    <button className="nav-link" onClick={() => scrollToSection("projects")}>projects</button>
                    <button className="nav-link" onClick={() => scrollToSection("education")}>education</button>
                    <button className="nav-link" onClick={() => scrollToSection("contact")}>contact</button>

                    <div className="nav-button-container">
                        <ToggleTheme />
                        <a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer">
                            <TfiGithub size={34} className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1.5" />
                        </a>
                        <a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer">
                            <GrLinkedinOption size={34} className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1.5" />
                        </a>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className="mobile-menu-container" ref={menuRef}>
                    <ToggleTheme />
                    <button className="bg-[var(--page-foreground)] rounded-lg border border-widget-stroke text-[var(--icon)] cursor-pointer p-1.5" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <IoClose size={20} /> : <TbMenu size={20} />}
                    </button>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                className="mobile-menu-dropdown origin-top"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={dropdownVariants}
                            >
                                <motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
                                    {navLinks.map(({ label, id }) => (
                                        <motion.div className="overflow-hidden" key={id}>
                                            <motion.div variants={mobileLinkVars} key={id}>
                                                <motion.button
                                                    whileHover="hover"
                                                    className="mobile-nav-link"
                                                    onClick={() => id === "/" ? (window.scrollTo(0, 0), location.reload()) : scrollToSection(id)}
                                                >
                                                    {label}
                                                </motion.button>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>


                                <motion.div
                                    variants={containerVars}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    className="social-dropdown-container overflow-hidden"
                                >
                                    <motion.a href="https://www.linkedin.com/in/quinn-flanigan/" target="_blank" rel="noopener noreferrer" variants={socialLinkVars} className="dropdown-social-link">
                                        <FiArrowUpRight />
                                        linkedin
                                    </motion.a>
                                    <motion.a href="https://github.com/qinflan" target="_blank" rel="noopener noreferrer" variants={socialLinkVars} className="dropdown-social-link">
                                        <FiArrowUpRight />
                                        github
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>

    )
}

export default Navbar