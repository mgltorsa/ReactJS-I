import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

const manipularDOM = () => {
  const elemento = document.getElementById("dom-test");
  elemento.innerHTML = "<h1>Manipulación directa del DOM</h1>";

  //Otra forma
  // document.querySelector("#dom-test").innerHTML = "<h1>Manipulación directa del DOM</h1>";
};

const renderizarConReact = () => {
  const elemento = document.getElementById("dom-test");
  const rootElemento = ReactDOM.createRoot(elemento);
  rootElemento.render(<h1>Renderizado con React</h1>);
};

const Renderizador = () => {
  useEffect(() => {
    console.log("RENDERIZADOR MONTADO");
  }, []);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <button onClick={() => renderizarConReact()}>
        Renderizado con React
      </button>
      <button onClick={() => manipularDOM()}>
        Renderizado con manipulacion directa
      </button>
    </div>
  );
};

export default Renderizador;
