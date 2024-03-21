import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Temporizador from "../components/Temporizador";
const Tienda = (props) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
    //productos = ['Manzana', 'Pera', 'Uva']
  }, []);

  useEffect(() => {
    console.log("productos", productos);
  }, [productos]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <Temporizador />
      <ul>
        {productos.map((producto, index) => {
          return (
            <li
              style={{ display: "flex", flexDirection: "column" }}
              key={index.toString()}
            >
              <h1>{producto.title}</h1>
              <p>{producto.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Tienda.propTypes = {};

export default Tienda;
