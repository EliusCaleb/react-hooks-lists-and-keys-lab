import React from "react";
import ProjectItem from "./ProjectItem";
// project for single and projects for many 
function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((item)=>{
    return(
     <ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies}/>
    )
  }) 
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ project}</div>
    </div>
  );
}

export default ProjectList;
