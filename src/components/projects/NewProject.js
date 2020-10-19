import React, { Fragment, useState } from "react";

const NewProject = () => {
  //State for new projects: nameProject
  const [project, setProject] = useState({
    nameProject: "",
  });

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

    //Add to state

    //Reboot the form
  };

  //Extract the values from the state ( project)
  const { nameProject } = project;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>

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
    </Fragment>
  );
};

export default NewProject;
