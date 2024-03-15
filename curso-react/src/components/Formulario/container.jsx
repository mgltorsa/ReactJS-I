import React, { useState } from "react";
import { FormularioComponent } from "./component";

export const FormularioFC = () => {
  const [nombre, setNombre] = useState();
  const [email, setEmail] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.nombre.value);
    console.log(e.target.email.value);
    console.log(e.target.telefono.value);
    console.log(e.target.mensaje.value);
  };

  const actualizar = (setState, value) => {
    setState(value);
  };

  return (
    <FormularioComponent
      onSubmit={onSubmit}
      nombre={nombre}
      email={email}
      actualizarNombre={(e) => actualizar(setNombre, e.target.value)}
      actualizarEmail={(e) => actualizar(setEmail, e.target.value)}
    />
  );
};

export class FormularioClase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
    };
    this.actualizar = this.actualizar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = (e) => {
    e.preventDefault();
  };

  actualizar = (campo, e) => {
    this.setState({ [campo]: e.target.value });
  };

  render() {
    return (
      <FormularioComponent
        onSubmit={this.onSubmit}
        nombre={this.state.nombre}
        email={this.state.email}
        actualizarNombre={(e) => this.actualizar("nombre", e.target.value)}
        actualizarEmail={(e) => this.actualizar("email", e.target.value)}
      />
    );
  }
}
