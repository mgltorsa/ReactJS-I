import "./App.css";
import Counter from "./components/Counter";
import Mensaje from "./components/Mensaje";
import Renderizador from "./components/VDomVsDom";
// import PropTypes from "prop-types";

function App() {
  return (
    <>
      <div>
        <h1>Curso ReactJS-I</h1>
        <Mensaje />
        <Counter />
        <Renderizador/>
      </div>
    </>
  );
}

//define react types
// App.propTypes = {
//   root: PropTypes.object,
// };

export default App;
