import React, { useReducer } from "react";
import uuid from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { ADD_PROJECT, FORM_PROJECT, GET_PROJECTS } from "../../types";

const ProjectState = (props) => {
  const projectsArray = [
    { id: 1, nameProject: "Tienda Virtual" },
    { id: 2, nameProject: "Intranet" },
    { id: 3, nameProject: "Diseño de sitio web" },
    { id: 4, nameProject: "MERN" },
  ];

  const initialState = {
    projectsArray: [],
    form: false,
  };

  //Dispatch to launch actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions for CRUD:

  //Show the form if we click "New Project"
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  //Get the projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projectsArray,
    });
  };

  //Add a project
  const addProject = (project) => {
    project.id = uuid.v4();
    //Add to globalstate
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projectsArray: state.projectsArray,
        form: state.form,
        showForm,
        getProjects,
        addProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
