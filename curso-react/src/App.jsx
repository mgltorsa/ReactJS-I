import { useState } from "react";
import "./App.css";
import ContadorCicloDeVida, {
  ContadorFuncionalCicloDeVida,
} from "./components/ContadorCicloDeVida";
import Encabezado from "./components/Encabezado";
import ErrorBoundary from "./views/ErrorBoundary";
import ContadorError from "./views/ErrorBoundary/ContadorError";
import Tienda from "./views/Tienda";
import Mensaje_class_component from "./components/Mensaje_class_component";
import Despedida_hijo_mensaje from "./components/Despedida_hijo_mensaje";

function App() {
  const [mostrar, setMostrar] = useState(true);

  const [nombre, setNombre] = useState(null);

  const cambiarNombre = () => {
    nombre === "Carlos" ? setNombre("Juan") : setNombre("Carlos");
    if (nombre === "Carlos") {
      setNombre("Luis");
    } else {
      setNombre("Pepe");
    }
  };

  return (
    <>
      <ErrorBoundary>
        <Encabezado nombreTienda="Amazing" />
        <Tienda />
        <Despedida_hijo_mensaje
          texto={nombre}
          cambiarNombreProp={() => cambiarNombre()}
        />
      </ErrorBoundary>
    </>
  );
}

export default App;
