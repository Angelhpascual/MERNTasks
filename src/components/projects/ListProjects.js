import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const projects = [
    { nombre: "Tienda Virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño de sitio web" },
  ];

  return <ul className="listado-proyectos"></ul>;
};

export default ListProjects;
