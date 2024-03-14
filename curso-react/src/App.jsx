import { useState } from "react";
import "./App.css";
import ContadorCicloDeVida, { ContadorFuncionalCicloDeVida } from "./components/ContadorCicloDeVida";
import Encabezado from "./components/Encabezado";
import ErrorBoundary from "./views/ErrorBoundary";
import ContadorError from "./views/ErrorBoundary/ContadorError";
import Tienda from "./views/Tienda";

function App() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <ErrorBoundary>
        <Encabezado nombreTienda="Amazing" />
        <Tienda />
        <ContadorError />
        {mostrar && <ContadorFuncionalCicloDeVida />}
        <button onClick={() => setMostrar(!mostrar)}>{`${mostrar ? 'Ocultador contador':'Mostrar contador'}`}</button>
      </ErrorBoundary>
    </>
  );
}

export default App;
