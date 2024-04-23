import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() {
    return (
      <div >
        <h1>{this.props.titulo}</h1>
      </div>
    );
  }
}

export default Footer;
