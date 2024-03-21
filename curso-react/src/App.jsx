import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Tienda from "./views/Tienda";
import Usuarios from "./views/Usuarios";
import Layout from "./views/Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Temporizador /> */}
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  Hola
                  <Link to="/perfil/usuarios">Ir a perfil </Link>
                </div>
              }
            />
            <Route path="/perfil" element={<Layout />}>
              <Route path="usuarios" element={<Usuarios />} />
              <Route path="tienda" element={<Tienda />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
