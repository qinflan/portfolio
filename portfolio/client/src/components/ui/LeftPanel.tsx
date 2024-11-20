import React from 'react'
import Navbar from './Navbar'
import "./LeftPanel.css"
import ResumeBtn from './ResumeBtn';

const LeftPanel = () => {
    return (
        <div className="left-panel-container">
            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-name">Quinn Flanigan</h1>
                    <h3 className="role-text">
                        Software Developer
                    </h3>
                    <h3 className="mantra-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        consectetur adipiscing elit.
                    </h3>
                </div>
                <ResumeBtn />
            </div>
            <Navbar />
        </div>
    )
}

export default LeftPanel