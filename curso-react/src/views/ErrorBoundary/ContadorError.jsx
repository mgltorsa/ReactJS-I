import { Component } from 'react'

export default class ContadorError extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        //  Simula un error en javascript
        throw new Error('Contador no puede ser 5');
      }
      return <h1 onClick={this.handleClick}>Contador con error: {this.state.counter}</h1>;
    }
  }