import React from "react";
import Form from "../layouts/Form";
import Barra from "../layouts/Barra";
import Icono from "../cartIcon/Icono";

const Navbar = () => {
  const listBarra = ["Inicio", "Productos", "Preguntas frecuentes", "Nosotros"]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Barra contenido={listBarra}/>
            </ul>
            <Icono/>
            <Form busqueda="estoy buscando..."/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
