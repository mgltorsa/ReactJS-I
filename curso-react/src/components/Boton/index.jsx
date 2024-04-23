import "./boton.css";
import PropTypes from "prop-types";

const Boton = (props) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: props.color }}
      onClick={props.onClick}
      disabled={props.isLoading}
    >
      {props.isLoading ? "Loading..." : props.children}
    </button>
  );
};

Boton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Boton;
