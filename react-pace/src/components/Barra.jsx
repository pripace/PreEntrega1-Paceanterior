import React from "react";

const Barra = () => {
  return (
    <>
        <li className="nav-item">
          <a className="nav-link active" href="#">Inicio<span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Preguntas frecuentes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
    </>
  );
};

export default Barra;