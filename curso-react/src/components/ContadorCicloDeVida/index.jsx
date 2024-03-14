import React, { Component, useState } from "react";
import { useEffect } from "react";

export const ContadorFuncionalCicloDeVida = (props) => {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("MONTADO");
    console.log("DID_UPDATE")
    console.log("RENDERIZADO");
    return () => {
      console.log("DESMONTADO");
    };
  }, []);


  return (
    <div onClick={() => setContador(contador+1)}>
      Contador Funcional LifeCycle: {contador}
    </div>
  );
};

export default class ContadorCicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    console.log("Constructor"); // Etapa de montaje
  }

  componentDidMount() {
    console.log("Componente montado"); // Etapa de montaje
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Componente actualizado"); // Etapa de actualización
    console.log("Props anteriores:", prevProps);
    console.log("Estado anterior:", prevState);
    console.log("Estado actual:", this.state);
  }

  componentWillUnmount() {
    console.log("Componente desmontado"); // Etapa de desmontaje
  }

  handleClick = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    console.log("Renderizado"); // Etapa de renderizado

    return (
      <div onClick={this.handleClick.bind(this)}>
        Contador LifeCycle: {this.state.contador}
      </div>
    );
  }
}
