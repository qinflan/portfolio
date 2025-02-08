import React from 'react'
import WorkWidget from '../../ui/WorkWidget'
import { workData } from './WorkData';
import "./Experience.css"

const Experience: React.FC = () => {
  return (
    <div className="section-container">
      <div className="section-title">
        <h1>experience</h1>
      </div>

      <div className="work-widgets-container">
        {workData.map((workItem, index) =>
          <WorkWidget
            key={index}
            title={workItem.title}
            company={workItem.company}
            dates={workItem.dates}
            description={workItem.description}
            skills={workItem.skills} />
        )}
      </div>
    </div>
  )
}

export default Experience