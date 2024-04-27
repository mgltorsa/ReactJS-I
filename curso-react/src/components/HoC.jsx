import { useEffect, useState } from "react";
import Timer from "./Timer";
import RoundTimer from "./RoundTimer";

const TimerHoC = () => {
  const [segundosTranscurridos, cambiarSegundos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      cambiarSegundos(segundosTranscurridos + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [segundosTranscurridos]);
  return <RoundTimer segundosTranscurridos={segundosTranscurridos} />;
};

export default TimerHoC;
