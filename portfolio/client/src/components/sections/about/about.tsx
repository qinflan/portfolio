import "./About.css"
import avatar from "/assets/profile.jpeg"
import HeaderNavbar from "../../ui/HeaderNavbar"

const About = () => {
    return (
        <div className="about-container" id="about">
            <HeaderNavbar />
            <div className="about-me fade-section">
                <img className="avatar-img" src={avatar}></img>
                    <div className="h1-regular-lg about-body">
                        <p>I'm a full-stack software developer living in Boston. I like expressing ideas with software, hardware, and music. I'm currently working as a software engineer but have a history of working on freelance and open-source development in my free time.</p>
                    </div>
            </div>
        </div>
    )
}

export default About