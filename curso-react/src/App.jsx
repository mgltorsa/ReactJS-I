import "./App.css";
import Encabezado from "./components/Encabezado";
import Contenido from "./components/Contenido";
import Footer from "./components/Footer";
import Boton from "./components/Boton";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [listaProductos, setListaDeProductos] = useState([]);

  // useEffect(() => {
  //   console.log("MONTAJE");

  //   //traida de los datos
  //   // const getProductos = async () => {
  //   //   const response = await fetch("https://fakestoreapi.com/products", {
  //   //     method: "PUT",
  //   //     body: {},
  //   //   })
  //   //     .then((res) => res.json())
  //   //     .then((json) => {
  //   //       setTimeout(() => {
  //   //         setListaDeProductos(json);
  //   //         setIsLoading(false);
  //   //       }, 3000);
  //   //     });
  //   // };
  //   // getProductos();

  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setTimeout(() => {
  //         setListaDeProductos(json);
  //         setIsLoading(false);
  //       }, 19000);
  //     });

  //   return () => {
  //     console.log("DESMONTAJE");
  //   };
  // }, []);

  // useEffect(() => {
  //   if (listaProductos.length) {
  //     // alert("SE CARGARON LOS PRODUCTOS");
  //   }
  // }, [listaProductos]);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 5000);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <div>
        {/* <Encabezado titulo="Encabezado imprimir" colorBoton={"red"} /> */}
        <h1>productos</h1>
        <Boton
          onClick={() => {
            fetch("https://fakestoreapi.com/products")
              .then((res) => res.json())
              .then((json) => {
                setListaDeProductos(json);
                setIsLoading(false);
              });
          }}
        >
          Actulizar productos
        </Boton>
      </div>

      {listaProductos.map((product, index) => (
        <div key={index.toString()}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
