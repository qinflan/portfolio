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



    return (
        <div className="scroll-right-panel">
            <div className="about-me" ref={aboutRef} id="about">
                <p>I'm a college student based in Boston, Massachusetts studying Information Technology and Computer Science, driven by my passion for tech and problem-solving. Whether I’m building computers or developing full-stack web applications, I’m constantly seeking to learn and grow. I specialize in languages like JavaScript, TypeScript, Python, Java, HTML, and CSS, and love using these tools to craft intuitive, scalable solutions. I’m a quick learner, always eager to tackle new challenges in dynamic, fast-paced environments. Above all, I’m committed to creating meaningful digital experiences that make a difference.
                </p>
            </div>
            {/* pass card sub components as children within a glass container */}
            <div className="relative w-full" ref={workRef} id="experience">
                <Experience />
            </div>

            <div className="relative w-full" id="projects">
                <Projects/>
            </div>

            <div className="relative w-full" id="design">
                <DesignBento/>
            </div>

            <div className="relative w-full" ref={contactRef} id="contact">
                <Contact/>
            </div>
        </div>
    )
}

export default RightPanel