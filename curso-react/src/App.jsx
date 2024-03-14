import React from "react";
import "./App.css";
import Contador from "./components/Contador";
import Cuerpo from "./components/Cuerpo";
import Encabezado from "./components/Encabezado";
import EventHandlingComponent from "./components/EventsExercise/events";
import PieDePagina from "./components/PieDePagina";
// import Counter from "./components/Counter";
// import Mensaje from "./components/Mensaje";
// import Renderizador from "./components/VDomVsDom";
// import PropTypes from "prop-types";

const Contexto = React.createContext({
  mensaje: "Hola",
});
function App() {
  return (
    <>
      <div>
        <Contexto.Provider value="Hola">
          <Encabezado />
          <Cuerpo />
        </Contexto.Provider>
        <PieDePagina />
        {/* <h1>Curso ReactJS-I</h1>
        <Mensaje />
        <Counter />
        <Renderizador />
        <Contador />
        <EventHandlingComponent /> */}
      </div>
    </>
  );
}

//define react types
// App.propTypes = {
//   root: PropTypes.object,
// };

export default App;
