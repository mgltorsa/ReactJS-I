import PropTypes from "prop-types";
import "./styles.css";

export const FormularioComponent = ({
  nombre,
  email,
  actualizarEmail,
  actualizarNombre,
  onSubmit,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <h1>Formulario</h1>
      <label>Nombre</label>
      <input
        type="text"
        placeholder="Escriba su nombre..."
        name="nombre"
        onChange={actualizarNombre}
        value={nombre}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        placeholder="Escriba su email..."
        onChange={actualizarEmail}
        value={email}
      />
      <button
        style={{ marginTop: 10 }}
        type="submit"
        id="submitBtn"
        className="submitBtn"
      >
        Enviar
      </button>
    </form>
  );
};

FormularioComponent.PropTypes = {
  nombre: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  actualizarNombre: PropTypes.func.isRequired,
  actualizarEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
