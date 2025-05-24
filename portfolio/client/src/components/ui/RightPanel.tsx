import "./RightPanel.css"
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'
import Projects from "../pages/projects/Projects"
import { useRef} from "react"

const RightPanel = () => {

    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="scroll-right-panel">
            <div ref={aboutRef} id="about" className="about-me">
                <h1 className="section-title">about</h1>
                <div className="about-body">
                    <p>College student based in <span className="emphasis-text">Boston, Massachusetts</span> studying Information Technology and Computer Science. As a full-stack engineer, I'm proficient with <span className="emphasis-text">Java, Python, JavaScript, and TypeScript.</span> I'm passionate about creating with both software and hardware, and in my spare time, I enjoy playing music, hiking, traveling, and cooking.</p>

                </div>
            </div>

            <div className="relative w-full" ref={workRef} id="experience">
                <Experience />
            </div>

            <div className="relative w-full" ref={projectsRef} id="projects">
                <Projects />
            </div>

            <div className="w-full" ref={contactRef} id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default RightPanel