import React from "react";
import "./ProjectWidget.css";
import Tag from "./Tag";
import { ProjectCategory } from "../../types";

interface ProjectWidgetProps {
  title: string;
  dates: string;
  description: string;
  skills?: string[];
  gif?: string;
  repo?: string;
  type?: ProjectCategory;
}

const ProjectWidget: React.FC<ProjectWidgetProps> = ({
  title,
  dates,
  description,
  skills,
  repo,
  type,
}) => {
  return (
    <div className="project-widget-container">
      <a className="project-btn-wrapper" href={repo}>
        <div className="project-widget-header">
          <h2 className="header-md-bold">{title}</h2>
          {/* {type && (
            <div className="ml-auto">
              <Tag type={type} />
            </div>
          )} */}
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
        <h3 className="project-widget-date">{dates}</h3>
      </a>
    </div>
  );
};

export default ProjectWidget;
