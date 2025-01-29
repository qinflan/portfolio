import "./RightPanel.css"
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'
import Projects from "../pages/projects/Projects"
// import DesignBento from "./DesignBento"
import { useRef} from "react"

const RightPanel = () => {

    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="scroll-right-panel">
            <div className="about-me">
                <h1 ref={aboutRef} id="about" className="section-title">about</h1>
                <p>I'm a college student based in <span className="emphasis-text">Boston, Massachusetts</span> studying Information Technology and Computer Science,
                    driven by my passion for tech and problem-solving. I'm proficient with <span className="emphasis-text">Java, Python, JavaScript, and TypeScript.</span> Whether I'm developing full-stack web applications or building computers from the ground up,
                    I’m constantly working on picking up new skills.
                </p>

                <p>I’m a quick learner, always looking forward towards a new project to work on. I'm usually either working on a personal project or collaborating with friends to build things!</p>

                <p>In my spare time I play music, hike, game, or work on computers and music equipment.
                </p>
            </div>
            <div className="relative w-full" ref={workRef} id="experience">
                <Experience />
            </div>

            <div className="relative w-full" ref={projectsRef} id="projects">
                <Projects />
            </div>

            <div className="relative w-full" ref={contactRef} id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default RightPanel