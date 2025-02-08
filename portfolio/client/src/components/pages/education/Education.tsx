import './Education.css'
import { classData } from './ClassData'

const Education = () => {

  return (
    <div className="work-section-container">
      <div className="section-title">
        <h1>education</h1>
      </div>
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
    </div>
  )
}

export default Education