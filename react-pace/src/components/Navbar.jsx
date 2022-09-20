import React from "react";
import Form from "./Form";
import Barra from "./Barra";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <Barra />
            </ul>
            <Form />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
