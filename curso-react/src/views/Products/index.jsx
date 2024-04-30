import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setLista(json));
  }, []);

  return (
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {lista.map((elemento) => (
          <li key={elemento.id.toString()}>
            <h3>{elemento.title}</h3>
            <img src={elemento.image} style={{ width: 100, height: 100 }} />
            <p>{elemento.category}</p>
            <Link to={`/productos/${elemento.id}`}>Ver producto</Link>
            <hr />
          </li>
        ))}
      </ul>
      <Link to="/productos/0">Ver producto</Link>
    </div>
  );
}
