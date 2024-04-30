import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Lista de productos</h1>
      <Link to="/productos/0">Ver producto</Link>
    </div>
  );
}

