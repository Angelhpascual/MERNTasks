import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../contenxt/Projects/projectContext";

const ListProjects = () => {
  //Extract projects from initial state in Context
  const projectsContext = useContext(projectContext);
  const { projectsArray, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, []);

  //Check if projects has content
  if (projectsArray.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projectsArray.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
