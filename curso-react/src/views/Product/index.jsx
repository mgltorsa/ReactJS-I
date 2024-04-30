import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Producto</h1>
      <p>TItulo producto</p>
    </div>
  );
};

export default Product;
