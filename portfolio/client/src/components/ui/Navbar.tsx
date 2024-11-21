import "./Navbar.css"
import { ToggleTheme } from '../hooks/theme/toggleTheme';
import { GrLinkedinOption } from "react-icons/gr";
import { TfiGithub } from "react-icons/tfi";

// Navigation Bar
const Navbar = () => {

    return (
        <div className="navigation">
            <nav className="navbar-container">
                <span className="w-1 bg-[var(--page-divider)] flex-shrink-0 rounded-full"></span>
                <div className="navbar-content">
                    
                    <a className="nav-link" href="/">HOME</a>

                    <button className="nav-link" onClick={() => {
                        const element = document.getElementById('experience');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        }}>EXPERIENCE
                    </button>

                    <button className="nav-link" onClick={() => {
                        const element = document.getElementById('projects');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        }}>
                            PROJECTS
                    </button>

                    <button className="nav-link" onClick={() => {
                        const element = document.getElementById('design');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        }}>DESIGN
                    </button>

                    <button className="nav-link" onClick={() => {
                        const element = document.getElementById('contact');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                        }}>CONTACT
                    </button>

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