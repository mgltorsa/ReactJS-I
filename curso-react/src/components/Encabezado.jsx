import Boton from "./Boton";
import PropTypes from 'prop-types'

export default function Encabezado(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <Boton
        color={props.colorBoton}
        onClick={() => {
          console.log("IMPRIMIENDO...");
        }}
      >Imprimir</Boton>
    </div>
  );
}

Encabezado.propTypes ={ 
    titulo: PropTypes.string.isRequired,
    colorBoton: PropTypes.string,
}
