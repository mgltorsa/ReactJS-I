import PropTypes from "prop-types";
import "./styles.css";

const Encabezado = (props) => {
  return (
    <div className="header-container">
      <h1>{`Bienvenidos a: ${props.nombreTienda}`}</h1>
    </div>
  );
};

Encabezado.propTypes = {
  nombreTienda: PropTypes.string.isRequired,
};

export default Encabezado;
