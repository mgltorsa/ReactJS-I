import { Component } from "react";
import PropTypes from "prop-types";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorInfo: info,
    });

    console.error("Se produjo un error", error);
    console.error("Error info", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Algo salió mal</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>

          <button onClick={() => window.location.reload()}>Recargar pagina</button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
