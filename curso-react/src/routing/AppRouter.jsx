import { BrowserRouter, HashRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "../views/Home";
import Products from "../views/Products";
import Product from "../views/Product";
import Carrito from "../views/Carrito";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="productos/:id" element={<Product />} />
        <Route path="carrito" element={<Carrito />} />
      </Routes>
      <Link to="/carrito">Ver Carrito</Link>
    </BrowserRouter>
  );
};

export default AppRouter;
