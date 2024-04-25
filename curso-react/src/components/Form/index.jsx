import { useState } from 'react';
import './formulario.css'; // Importamos el archivo de estilos CSS

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', formulario);
  };

  return (
    <div className="container">
      <h2 className="titulo">Formulario</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="nombre" className="label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="correo" className="label">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
