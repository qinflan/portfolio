import React from 'react'
import ProjectWidget from '../../ui/ProjectWidget'
import { projectData } from './ProjectData'

const Projects: React.FC = () => {
  return (
    <div className="work-section-container">
      <div className="section-title">
        <h1>projects</h1>
      </div>

      <div className="work-widgets-container">
        {projectData.map((projectItem, index) =>
          <ProjectWidget
            key={index}
            title={projectItem.title}
            dates={projectItem.dates}
            description={projectItem.description}
            skills={projectItem.skills} 
            gif={projectItem.gif}
            repo={projectItem.repo}
            />
        )}
      </div>
    </div>
  )
}

export default Projects