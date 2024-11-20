import React from 'react'
import "./WorkWidget.css"

interface WorkWidgetProps {
title: string;
company: string;
dates: string;
description: string;
skills: string[];
}


const WorkWidget: React.FC<WorkWidgetProps> = ({title, company, dates, description, skills}) => {
  return (
    <div className="work-widget-container">
      <div className="work-widget-header">
        <h2 className="widget-title">{title}</h2>
        <h2 className="widget-title">{company}</h2>
        <h3 className="widget-date">{dates}</h3>
      </div>
      <div className="widget-description">
        <p>{description}</p>
      </div>
      <div className="widget-skill-tiles">
        {/* map skills with classname that will style as tile */}
        <h4 className="widget-skill-tile">{skills}</h4> 
      </div>
    </div>
  )
}

export default WorkWidget