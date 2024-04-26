import { useEffect, useState } from "react";

const Formulario = () => {
  const [nombre, cambiarNombre] = useState("");
  const [email, cambiarEmail] = useState("");

  const [lista, setLista] = useState([]);

  const handleChangeName = (evento) => {
    const nuevoNombre = evento.target.value;
    cambiarNombre(nuevoNombre);
  };

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    if (name === "nombre") {
      cambiarNombre(value);
    }
    if (name === "email") {
      cambiarEmail(value);
    }
  };

  const handleChangeEmail = (evento) => {
    const nuevoEma = evento.target.value;
    cambiarEmail(nuevoEma);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    evento.stopPropagation();
    setLista([...lista, `${nombre}-${email}`]);
    cambiarNombre("");
    cambiarEmail("");

  };

  useEffect(() => {
    // console.log("NOMBRE:", nombre);
    // setLista([...lista, nombre]);
    //debounce
  }, [nombre]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: 200,
      }}
      onClick={() => {
        console.log("CLICK EN FORM");
      }}
    >
      <label>Nombre</label>
      <input
        onChange={handleChange}
        name="nombre"
        value={nombre}
        placeholder="Ingrese su nombre..."
      />

      <label>Email</label>
      <input
        onChange={handleChange}
        name="email"
        value={email}
        placeholder="Ingrese su correo..."
        type="email"
      />
      <input
        style={{ backgroundColor: "blue" }}
        type="submit"
        onClick={handleSubmit}
      />
      <div>
        {lista.map((el, idx) => (
          <p key={idx.toString()}>{el}</p>
        ))}
      </div>
    </form>
  );
};

export default Formulario;
