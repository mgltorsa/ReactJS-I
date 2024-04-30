import { useSelector } from "react-redux";

const renderizarProductos = (productos) => {
  return productos.map((producto) => (
    <li key={producto.id.toString()}>
      <h2>{producto.title}</h2>
    </li>
  ));
};

const Carrito = () => {
  const productosAgregados = useSelector((estadoActualDelApp) => {
    console.log(estadoActualDelApp.carrito.productos);
    return estadoActualDelApp.carrito.productos;
  });

  console.log("AGREGADOS", productosAgregados);
  return (
    <div>
      <h1>Carrito de compras</h1>
      <ul>{renderizarProductos(productosAgregados)}</ul>
    </div>
  );
};
export default Carrito;
