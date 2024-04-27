import { useEffect, useState } from "react";

const useTimer = () => {
  const [segundosTranscurridos, cambiarSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      cambiarSegundos(segundosTranscurridos + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [segundosTranscurridos]);

  return {segundosTranscurridos}
};

export default useTimer;
