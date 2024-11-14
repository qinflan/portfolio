import React from 'react'
import "./RightPanel.css"
import Experience from '../pages/experience/Experience'
import Contact from '../pages/contact/Contact'

const RightPanel = () => {
    return (
        <div className="scroll-right-panel">
            {/* pass card sub components as children within a glass container */}
            <Experience />
            <Contact/>
        </div>
    )
}

export default RightPanel