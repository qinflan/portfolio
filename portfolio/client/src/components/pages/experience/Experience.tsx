import React from 'react'
import { useRef } from 'react';
import WorkWidget from '../../ui/WorkWidget'
import { workData } from './WorkData';
import "./Experience.css"

const Experience: React.FC = () => {
  return (
    <div className="work-section-container">
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
  )
}

export default Experience