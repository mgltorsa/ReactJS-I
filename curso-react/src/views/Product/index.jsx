import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import accionesDelCarrito from "../../slicers/carrito";

const Product = () => {
  const { id } = useParams();

  const dipatch = useDispatch();

  const [producto, setProducto] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const handleAgregarAlCarrito = () => {
    console.log("Agregando al carrito", producto.id);
    dipatch(accionesDelCarrito.agregarAlCarrito(producto));
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducto(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div>
      {/* Otra forma de renderizar el loading */}
      {/* {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>Producto</h1>
          <p>TItulo producto</p>
        </>
      )} */}

      <h1>{producto.title}</h1>
      <img src={producto.image} style={{ width: 100, height: 100 }} />
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      <p>{producto.category}</p>
      <button onClick={() => handleAgregarAlCarrito()}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
