import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import Products from "../views/Products";
import Product from "../views/Product";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Products />} />
        <Route path="productos/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
