import React from 'react'
import "./WorkWidget.css"

interface WorkWidgetProps {
title: string;
company: string;
dates: string;
description: string;
skills?: string[];
}


const WorkWidget: React.FC<WorkWidgetProps> = ({title, company, dates, description, skills}) => {
  return (
    <div className="work-widget-container">
      <div className="work-widget-header fade-item">
        <div className="widget-title-container">
          <h2 className="widget-title">{title}</h2>
          <h2 className="widget-company">{company}</h2>
        </div>
      </div>
      <div className="widget-description fade-item">
        <p>{description}</p>
      </div>
      <div className="widget-skill-tiles fade-item">
        {skills?.map((skill, index) => (
          <div key={index} className="widget-skill-tile">
            {skill}
          </div>
        ))}
      </div>
      <h3 className="widget-date fade-section">{dates}</h3>
    </div>
  )
}

export default WorkWidget