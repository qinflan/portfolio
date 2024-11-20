import React from 'react'
import "./ResumeBtn.css"

const ResumeBtn = () => {

  return (
    <a href="/assets/Quinn-Flanigan-Resume-2024.pdf" download="Quinn-Flanigan-Resume.pdf">
      <button className="resume-btn">Download Resume</button>
    </a>
  )
}

export default ResumeBtn