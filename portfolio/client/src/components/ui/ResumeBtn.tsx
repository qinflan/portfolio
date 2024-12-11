import ResumePDF from '/assets/Quinn-Flanigan-Resume-2024.pdf'
const ResumeBtn = () => {

  return (
    <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
      <button className="brutal-button">download resume</button>
    </a>
  )
}

export default ResumeBtn