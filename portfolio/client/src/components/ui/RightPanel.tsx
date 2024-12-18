import "./RightPanel.css"
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'
import Projects from "../pages/projects/Projects"
import DesignBento from "./DesignBento"
import { useRef} from "react"

const RightPanel = () => {

    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const designsRef = useRef<HTMLDivElement | null>(null);


    return (
        <div className="scroll-right-panel">
            <div className="about-me" ref={aboutRef} id="about">
                <p>I'm a college student based in <span className="emphasis-text">Boston, Massachusetts</span> studying Information Technology and Computer Science,
                    driven by my passion for tech and problem-solving. Whether I’m building computers or developing full-stack web applications,
                    I’m constantly seeking to learn and grow.
                </p>

                <p>I’m a quick learner, always looking forward towards a new project to work on. I'm usually either working on a personal project or collaborating with friends to build things! Above all, I’m committed to creating meaningful digital experiences that make a difference.</p>

                <p>In my spare time I can be found playing music, hiking up a mountain, gaming, or tinkering with computers and music equipment.
                </p>
            </div>
            <div className="relative w-full" ref={workRef} id="experience">
                <Experience />
            </div>

            <div className="relative w-full" ref={projectsRef} id="projects">
                <Projects/>
            </div>

            <div className="relative w-full" ref={designsRef} id="design">
                <DesignBento/>
            </div>

            <div className="relative w-full" ref={contactRef} id="contact">
                <Contact/>
            </div>
        </div>
    )
}

export default RightPanel