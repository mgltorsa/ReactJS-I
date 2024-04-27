
const RoundTimer = ({ segundosTranscurridos }) => {
  return (
    <div
      style={{
        width: 160,
        height: 100,
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
      }}
    >
      <p>{segundosTranscurridos}</p>
    </div>
  );
};

export default RoundTimer;
