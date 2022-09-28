import React from "react";

const Barra = ({ contenido }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link active" href="#">{contenido[0]}<span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{contenido[1]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{contenido[2]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">{contenido[3]}</a>
      </li>
    </>
  );
};

export default Barra;