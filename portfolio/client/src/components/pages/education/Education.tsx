import './Education.css'
import { classData } from './ClassData'

const Education = () => {

  return (
    <div className="work-section-container">

        <h1 className="section-title">education</h1>
        <div className="college-header">
          I'm currently a student at UMass Boston studying IT and Computer Science.
        </div>
        <div className="course-header">
          Key Courses
        </div>

        <div className="courses-container">
          {classData.map((title: string) => (
            <p>{title}</p>
          ))}
        </div>

        <p className="extra-curricular-container">
          Member of the UMB Computer Science Club, and joined <a className="body-text-link" href="https://www.cs.umb.edu/csclub/">UMB Develops</a> in
          Spring 2024. I quickly became a tech lead, working on multiple full-stack applications.
        </p>

    </div>
  )
}

export default Education