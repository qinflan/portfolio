import ResumePDF from '/assets/Quinn_Flanigan_Resume_2025.pdf'
const ResumeBtn = () => {

  return (
    <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
      <button className="brutal-button">download resume</button>
    </a>
  )
}

export default ResumeBtn