import React from 'react'
import { Link } from 'react-router-dom';
import "./ProjectWidget.css"
import { MdViewInAr } from "react-icons/md";


interface ProjectWidgetProps {
title: string;
dates: string;
description: string;
skills?: string[];
gif?: string;
repo?: string;
}


const ProjectWidget: React.FC<ProjectWidgetProps> = ({title, dates, description, skills, gif, repo}) => {
  return (
    <div className="work-widget-container">
      <div className="project-widget-header">
        <h2 className="project-widget-title">
          {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="repo-link">
              <MdViewInAr size={24} title="github repository" />
            </a>
          )}
          {title}
        </h2> 
        <h3 className="widget-date">{dates}</h3>
      </div>
      <div className="widget-description">
        {gif && <img src={gif} className="widget-gif" />}
        <p>{description}</p>
      </div>
      <div className="widget-skill-tiles">
        {skills?.map((skill, index) => (
          <div key={index} className="widget-skill-tile">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectWidget