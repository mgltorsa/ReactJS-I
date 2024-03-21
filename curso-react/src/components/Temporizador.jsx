import { useEffect, useState } from "react";
import useTemporizador from "../hooks/useTemporizador";

const TemporizadorNormal = () => {
  const [segundos] = useTemporizador();

  return <p>{`Segundos: ${segundos}`}</p>;
};

const TemporizadorEstilo2 = () => {
  const [segundos] = useTemporizador();
  return <p>{`S: ${segundos}`}</p>;
};

const TemporizadorEstilo3 = () => {
  const [segundos, cambiarSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      cambiarSegundos(segundos + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [segundos]);

  return <p>{`Segs: ${segundos}`}</p>;
};

export default TemporizadorNormal;
