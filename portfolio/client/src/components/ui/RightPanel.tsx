import "./RightPanel.css"
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'
import Projects from "../pages/projects/Projects"
import DesignBento from "./DesignBento"
import { useRef, useState } from "react"

const RightPanel = () => {

    const workRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);



    return (
        <div className="scroll-right-panel">
            <div className="about-me" ref={aboutRef} id="about">
                <p>Tortor finibus iaculis lorem mattis maecenas senectus pellentesque pretium augue. Ac commodo senectus aliquet proin cubilia 
                feugiat vehicula ultricies. Cubilia litora congue dapibus conubia dui porta tempor elit dictum. Etiam magna enim nibh ante eleifend. 
                Molestie magnis eget mauris et pulvinar accumsan. 
                
                Donec dictum dis nascetur adipiscing curae sapien nibh venenatis quis. Mi fermentum 
                fringilla massa dictum sagittis donec lobortis tortor. In nec duis phasellus dolor maecenas.
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