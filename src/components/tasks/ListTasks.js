import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksProject = [
    { name: "Elegir Plataforma", state: true },
    { name: "Elegir Colores", state: false },
    { name: "Elegir Plataforma de Pago", state: true },
    { name: "Elegir Hosting", state: false },
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
