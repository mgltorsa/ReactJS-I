import { useState } from "react";
import FormularioComponente from "./Formulario";

const Contenedor = () => {
  const [nombre, cambiarNombre] = useState("Pepe");
  const [email, cambiarEmail] = useState("pepe@gmail.com");

  return (
    <div>
      <FormularioComponente
        nombre={nombre}
        email={email}
        cambiarNombre={(evento) => cambiarNombre(evento.target.value)}
        cambiarEmail={(evento) => cambiarEmail(evento.target.value)}
      />
      <p>Final del formulario</p>
    </div>
  );
};

export default Contenedor;
