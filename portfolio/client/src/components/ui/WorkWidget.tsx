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
      <div className="card-header">
        <div className="widget-title-container">
          <h2 className="header-md-bold">{title}</h2>
          {/* <h2 className="b-caption-md">{company}</h2> */}
        </div>
      </div>
      <div className="caption-md">
        <p>{description}</p>
      </div>
      <div className="widget-skill-tiles">
        {skills?.map((skill, index) => (
          <div key={index} className="widget-skill-tile">
            {skill}
          </div>
        ))}
      </div>
      <h3 className="widget-date">{dates}</h3>
    </div>
  )
}

export default WorkWidget