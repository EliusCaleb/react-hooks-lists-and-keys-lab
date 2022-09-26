import React from "react";

function ProjectItem({ name, about, technologies }) {

 const technology=technologies.map(item=>{return<span key={item}>{item}</span>})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{technology}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
