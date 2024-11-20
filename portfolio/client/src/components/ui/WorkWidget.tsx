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
    <div className="workWidgetContainer">
      <div className="workWidgetHeader">
        <h2>{title}</h2>
        <h2>{company}</h2>
        <h3>{dates}</h3>
      </div>
      <div className="workWidgetDescription">
        <p>{description}</p>
      </div>
      <div className="workWidgetSkillTiles">
        {/* map skills with classname that will style as tile */}
        <h4>{skills}</h4>
      </div>
    </div>
  )
}

export default WorkWidget