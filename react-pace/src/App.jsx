import React from "react";
import Navbar from "./components/content/Navbar";
import "./styles/App.css";
import Home from "./components/content/Home";


const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  )
};

export default App;

/* 
import CartWidget from "./components/cart/CartWidget";
import Contador from "./components/layouts/Contador"; 

const App = () => {
  return (
    <>
      <Navbar />
   <Contador/> 
      <Home/>
    </>
  )
};

export default App; */
