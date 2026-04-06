import React from 'react'
import "./ProjectWidget.css"

interface ProjectWidgetProps {
title: string;
dates: string;
description: string;
skills?: string[];
gif?: string;
repo?: string;
}


const ProjectWidget: React.FC<ProjectWidgetProps> = ({title, dates, description, skills, repo}) => {
  return (
    <div className="project-widget-container">
      <a className="project-btn-wrapper" href={repo}>
        <div className="project-widget-header">
          <h2 className="header-md-bold">
            {title}
          </h2>
          <h3 className="widget-date">{dates}</h3>
        </div>
        <div className="caption-md">
          <p>{description}</p>
        </div>
        <div className="widget-skill-tiles">
          {skills?.map((skill, index) => (
            <div key={index} className="mono-caption-md widget-skill-tile">
              {skill}
            </div>
          ))}
        </div>
      </a>
    </div>
  )
}

export default ProjectWidget