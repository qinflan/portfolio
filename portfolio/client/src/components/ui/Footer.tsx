import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <p className="rights-text">© 2025 ~ All rights reserved</p>

        <div className="footer-content-container">
            <div className="socials-container">
                <h1 className="socials-header">socials</h1>
                <p className="social-footer-link">instagram</p>
                <p className="social-footer-link">perfectly imperfect</p>
                <p className="social-footer-link">x</p>
            </div>
            
            <div className="code-links-container">
                <h1 className="socials-header">code</h1>
                <p className="social-footer-link">github</p>
                <p className="social-footer-link">npm</p>
            </div>
        </div>
    </div>
  )
}

export default Footer