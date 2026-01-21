import "./about.css"
import avatar from "/assets/profile.jpeg"

const About = () => {
    return (
        <div className="about-me fade-section">
            <img className="avatar-img" src={avatar}></img>
            <div className="about-text">
                {/* <h1 className="section-title">Hej</h1> */}
                <div className="about-body">
                    <p>I'm a full-stack software developer that lives in Boston. I write code, play music, and work on some side projects in my free time. Whether it's web development, mobile app development, embedded systems, or design related — i just enjoy building stuff i think is interesting or useful.</p>
                </div>
            </div>
        </div>
    )
}

export default About