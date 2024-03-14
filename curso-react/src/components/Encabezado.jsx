import React, { useContext } from "react";
import PropType from "prop-types";

export const contexto = React.createContext({});
const Encabezado = () => {
  const contexto = useContext();
  return (
    
    <div style={{ background: "red" }}>
      <p>Bienvenido</p>
      <p>{contexto}</p>
    </div>
  );
};

// Encabezado.propTypes = {
//   mensaje: PropType.string,
// };

export default Encabezado;
