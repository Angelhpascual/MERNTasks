import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksProject = [
    { name: "Choose Platform", state: true },
    { name: "Choos Colours", state: false },
    { name: "Choose Payment Platform", state: true },
    { name: "Choose Hosting", state: false },
  ];

  return (
    <Fragment>
      <h2>Project: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">There is no task to show</li>
        ) : (
          tasksProject.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;{" "}
      </button>
    </Fragment>
  );
};

export default ListTasks;
