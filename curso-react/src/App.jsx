import { useState } from "react";
import "./App.css";
import ContadorCicloDeVida, { ContadorFuncionalCicloDeVida } from "./components/ContadorCicloDeVida";
import Encabezado from "./components/Encabezado";
import ErrorBoundary from "./views/ErrorBoundary";
import ContadorError from "./views/ErrorBoundary/ContadorError";
import Tienda from "./views/Tienda";
import Temporizador from "./components/clase5/Hooks/temporizador";
import TemporizadorVersionTwo from "./components/clase5/Hooks/temporizadorUseEffect";
import HookPersonalziado from "./components/clase5/Hooks/hookPersonalziado";
import Tema from "./components/clase5/Hooks/tema";
import ReducerTempor from "./components/clase5/Reducer/temporizadorReducer";
function App() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <ErrorBoundary>
        <Encabezado nombreTienda="Amazing" />
        <Tienda />
        <ReducerTempor/>
       {/*  {mostrar && <ContadorFuncionalCicloDeVida />} */}
       {/*  <button onClick={() => setMostrar(!mostrar)}>{`${mostrar ? 'Ocultador contador':'Mostrar contador'}`}</button> */}
      </ErrorBoundary>
    </>
  );
}

export default App;
