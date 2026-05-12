import ResumePDF from '/assets/Quinn_Flanigan_Resume_2025.pdf'
import { MdDownload } from "react-icons/md";


const ResumeBtn = () => {

  return (
    <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
      <button className="brutal-button flex gap-2 items-center">
        <MdDownload size={18}/>
        download
      </button>
    </a>
  )
}

export default ResumeBtn