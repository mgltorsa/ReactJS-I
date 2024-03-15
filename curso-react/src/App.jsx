import "./App.css";

import ErrorBoundary from "./views/ErrorBoundary";
import Propagation from "./components/propagation";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Propagation />
        <Formulario />
      </ErrorBoundary>
    </>
  );
}

export default App;
