import useTimer from "../hooks/useTimer";

const Timer = () => {
  const { segundosTranscurridos } = useTimer();
  return (
    <div>
      <h1>Segundos transcurridos</h1>
      <p>{segundosTranscurridos}</p>
    </div>
  );
};

export default Timer;
