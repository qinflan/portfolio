import React from 'react'
import ProjectWidget from '../../ui/ProjectWidget'
import { projectData } from './ProjectData'
import "./Projects.css"

const Projects: React.FC = () => {
  return (
    <div className="projects-page-container">

      <div className="project-widgets-container">
        {projectData.map((projectItem, index) =>
          <ProjectWidget
            key={index}
            title={projectItem.title}
            dates={projectItem.dates}
            description={projectItem.description}
            skills={projectItem.skills} 
            repo={projectItem.repo}
            />
        )}
      </div>
    </div>
  )
}

export default Projects