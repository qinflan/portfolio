import { useEffect, useState, useRef, useContext } from "react";
import { motion, AnimatePresence } from 'motion/react'
import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
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
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    // Detect scroll past gradient-container for mobile navbar
    useEffect(() => {
        const handleScroll = () => {
            const gradientContainer = document.querySelector('.gradient-container');
            if (gradientContainer) {
                const { bottom } = gradientContainer.getBoundingClientRect();
                setShowMobileNavbar(bottom < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <>
            <div className="navigation">
                <nav className="navbar-container">
                    <div className="navbar-content">
                        <button className="nav-link" onClick={() => scrollToSection("about")}>about</button>
                        <button className="nav-link" onClick={() => scrollToSection("experience")}>experience</button>
                        <button className="nav-link" onClick={() => scrollToSection("projects")}>projects</button>
                        <button className="nav-link" onClick={() => scrollToSection("contact")}>contact</button>
                    </div>
                </nav>
            </div>

            {/* Mobile Navbar appears after scrolling past gradient */}
            <AnimatePresence>
                {showMobileNavbar && (
                    <motion.div
                        className="mobile-navbar-sticky"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        ref={menuRef}
                    >
                        <div className="logo-container">
                            {theme === "light" ? (
                                <img src={logoLight} onClick={() => (window.scrollTo(0, 0), location.reload())}></img>
                            ) : (
                                <img src={logoDark} onClick={() => (window.scrollTo(0, 0), location.reload())}></img>
                            )}
                        </div>
                        <div className="mobile-nav-btn-container">
                        <ToggleTheme />
                        <button
                            className="bg-[var(--background)] border border-widget-stroke text-[var(--icon)] cursor-pointer p-1.5 hover:opacity-70 transition"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <IoCloseSharp size={20} /> : <GiHamburgerMenu size={20} />}
                        </button>
                        </div>

                        <AnimatePresence>
                            {isMobileMenuOpen && (
                                <motion.div
                                    className="mobile-menu-dropdown-scroll"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={dropdownVariants}
                                >
                                    <motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
                                        {navLinks.map(({ label, id }) => (
                                            <motion.div className="overflow-hidden" key={id}>
                                                <motion.div variants={mobileLinkVars}>
                                                    <motion.button
                                                        whileHover="hover"
                                                        className="mobile-nav-link"
                                                        onClick={() => scrollToSection(id)}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar