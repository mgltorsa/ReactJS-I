import "./App.css";
import Encabezado from "./components/Encabezado";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Encabezado titulo="Bienvenido!" colorBoton={"red"} />
      <Contenido>
        <div>
          <h1>Tienda de productos</h1>
          <div>
            <h2>Producto: Canasta decorada</h2>
            <p>Descripcion: Una canasta decorada para regalar</p>
          </div>
        </div>
      </Contenido>
      <Footer titulo="Footer Tienda X" />
    </>
  );
}

export default App;
