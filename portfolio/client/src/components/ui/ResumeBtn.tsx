import "./neobrute-btn.css"
import ResumePDF from '/assets/Quinn-Flanigan-Resume-2024.pdf'

const ResumeBtn = () => {

  return (
    <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
      <button className="brutal-btn">download resume</button>
    </a>
  )
}

export default ResumeBtn