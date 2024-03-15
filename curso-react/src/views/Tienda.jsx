import React from "react";
import PropTypes from "prop-types";
import Mensaje_class_component from "../components/Mensaje_class_component";

const Tienda = (props) => {
  return (
    <div>
      <h1>Tienda titulo</h1>
      <Mensaje_class_component nombre={"dentro de la tienda"}/>

    </div>
  );
};

Tienda.propTypes = {};

export default Tienda;
