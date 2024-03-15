import React from "react";
import PropType from "prop-types";

const Despedida_hijo_mensaje = (props) => {
  const handlerCLick = () => {
    console.log("Mensaje cambiado");
    // props.texto = 'hello'
    if (!props.cambiarNombreProp) {
      return;
    }
    props.cambiarNombreProp();
    /* return <div>{props.texto}</div> */
  };
  return (
    <div>
      <p>{props.texto ? props.texto : "No hay texto"}</p>
      <button onClick={handlerCLick}>Cambiar mensaje</button>
    </div>
  );
};

Despedida_hijo_mensaje.propTypes = {
  texto: PropType.string,
  cambiarNombreProp: PropType.func.isRequired,
};

export default Despedida_hijo_mensaje;
