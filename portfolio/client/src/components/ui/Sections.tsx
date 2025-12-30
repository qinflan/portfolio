import "./Sections.css"
import Experience from '../sections/experience/Experience'
import Contact from '../sections/contact/Contact'
import Projects from "../sections/projects/Projects"
import { useRef} from "react"
import ResumeBtn from "./ResumeBtn"
import avatar from "/assets/profile.png"

const Sections = () => {

    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="sections-container">
            <div ref={aboutRef} id="about" className="about-me">
                <img className="avatar-img" src={avatar}></img>
                <div className="about-text">
                    <h1 className="section-title">about</h1>
                    <p>I'm a student at <span className="emphasis-text">UMass Boston</span> studying Information Technology and Computer Science. As a <span className="emphasis-text">full-stack software engineer</span>, I'm proficient with <span className="emphasis-text">Java, Python, JavaScript, and TypeScript</span>. I love to create with both software and hardware, and in my spare time, I play music, hike, travel, and cook.</p>
                </div>
            </div>

            <div ref={workRef} id="experience">
                <Experience />
            </div>

            <div ref={projectsRef} id="projects">
                <Projects />
            </div>

            <div ref={contactRef} id="contact">
                <Contact />
            </div>

            <div className="resume-section">
                <h1 className="section-title">resume/cv</h1>
                <ResumeBtn />
            </div>
        </div>
    )
}

export default Sections