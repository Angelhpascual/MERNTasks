import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../contenxt/Projects/projectContext";

const NewProject = () => {
  //Using the context created
  const projectsContext = useContext(projectContext);

  //Extracting the form from context
  const { form, errorform, showForm, addProject, showError } = projectsContext;

  //State for new projects: nameProject
  const [project, setProject] = useState({
    nameProject: "",
  });

  //Extract the values from the state ( project)
  const { nameProject } = project;

  //Onchange function
  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //Handle submit new project
  const handleSubmitNewProject = (e) => {
    e.preventDefault();
    //Validate the project
    if (nameProject === "") {
      showError();
      return null;
    }

    //Add to state
    addProject(project);

    //Reboot the form
  };

  return (
    <Fragment>
      <button
        onClick={() => showForm()}
        type="button"
        className="btn btn-block btn-primario"
      >
        New Project
      </button>

      {form ? (
        <form
          className="formulario-nuevo-proyecto"
          onSubmit={handleSubmitNewProject}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Project name"
            name="nameProject"
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}
      {errorform ? (
        <p className="mensaje error">Project Name is required</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
