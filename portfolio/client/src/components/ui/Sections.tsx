import "./Sections.css"
import { useRef } from "react"
import Experience from '../sections/experience/Experience'
import Contact from '../sections/contact/Contact'
import Projects from "../sections/projects/Projects"
import ResumeBtn from "./ResumeBtn"
import About from "../sections/about/about"

const Sections = () => {
    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="sections-container">
            <div ref={aboutRef} id="about" data-lag="1">
                <About/>
            </div>

            <div ref={workRef} id="experience" data-lag="1">
                <Experience />
            </div>
 
            <div ref={projectsRef} id="projects" data-lag="1">
                <Projects />
            </div>

            <div ref={contactRef} id="contact" data-lag="1">
                <Contact />
            </div>

            {/* <div className="resume-section">
                <h1 className="section-title">resume/cv</h1>
                <ResumeBtn />
            </div> */}
        </div>
    )
}

export default Sections