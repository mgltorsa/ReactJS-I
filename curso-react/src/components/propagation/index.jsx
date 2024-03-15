import React from "react";

const propagation = () => {
  const handleClick = (e) => {
    alert("Propagacion");
  };
  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: 10,
      }}
    >
      <button onClick={(e) => e.stopPropagation()}>Click me</button>
      <button>Click me with propagation</button>
    </div>
  );
};

export default propagation;
