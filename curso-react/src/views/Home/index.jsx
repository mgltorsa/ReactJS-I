import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>pagina de inicio</h1>
      <Link to="productos">Ver productos</Link>
    </div>
  );
};
