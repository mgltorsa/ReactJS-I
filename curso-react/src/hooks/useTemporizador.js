import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar } from "../slices/temporizador/actions";


const useTemporizador = () => {
  // const [segundos, cambiarSegundos] = useState(0);

  const dispatch = useDispatch();

  const segundos = useSelector((state) => {
    //validaciones de estado
    if (state.temporizador.segundos == 0) {
      console.log("El temporizador está en 0");
    }
    //transformaciones
    console.log("state", state);

    return state.temporizador.segundos;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // cambiarSegundos(segundos + 1);
      dispatch(incrementar());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [segundos]);

  return [segundos];
};

export default useTemporizador;
