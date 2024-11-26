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
                        software developer
                    </h3>
                    <h3 className="mantra-text">
                        Passionate about creating innovative web experiences, I thrive in fast-paced environments and turn ideas into user-friendly solutions.
                    </h3>
                </div>
                <div className="resume-btn-container">
                    <ResumeBtn />
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default LeftPanel