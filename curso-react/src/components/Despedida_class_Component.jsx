import React, { Component } from 'react'

 class Despedida_class_Component extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>{`Hola ${this.props.nombre}`}</div>
    )
  }


}

export default Despedida_class_Component;
