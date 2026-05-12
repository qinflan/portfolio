import React from 'react'
import ProjectWidget from '../../ui/ProjectWidget'
import { projectData } from './ProjectData'
import "./Projects.css"

const Projects: React.FC = () => {
  if (projectData.length === 0) {
    return (
      <div className="projects-page-container">
        <h2 className="header-md-bold">No projects to show</h2>
      </div>
    )
  }
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
            type={projectItem.type}
            />
        )}
      </div>
    </div>
  )
}

export default Projects