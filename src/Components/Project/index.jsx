import React, { useEffect, useState } from "react";
import "./Project.css";
import { projects } from "../../data";
import ProjectNavigation from "./ProjectNavigation";
const Project = () => {
  const [activeProject, setActiveProject] = useState(projects);
  const [load, setLoad] = useState(false);
      useEffect(() =>{
        setLoad(true);
        setTimeout(() =>{
          setLoad(false)
        },600)
      },[activeProject])
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
    return tabs;
  };
  const setProjects = (value) => {
    if (value === "All") {
      return setActiveProject(projects);
    }
    const new_project = projects.filter((item) => item.category === value);
    setActiveProject(new_project);
  };


  return (
    <section className="project">
      <div className="container">
        <h1 className="title">
          {" "}
          Our <span className="g-text">Project</span>{" "}
        </h1>
        <ProjectNavigation tabs={getTabs()} onChange={setProjects} />
        <div className="project_container">
          {activeProject.map((project, index) => (
            <div className={`project_card ${load ? "zoom_in" :""}`} key={index}>
              <div className="image_container">
                <img src={project.image} alt={project.title} />
              </div>
              <p className="name">{project.title}</p>
              <p className="text_muted description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
