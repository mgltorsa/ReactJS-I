import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  const componentRef = useRef(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // Imprime el Virtual DOM
    console.log("Virtual DOM:", count);

    // Obtiene una referencia al nodo DOM real
    // eslint-disable-next-line react/no-find-dom-node
    const domNode = componentRef.current;

    // Imprime el DOM real
    console.log("DOM real:", domNode.outerHTML);
  }, [count]);

  return (
    <div ref={componentRef}>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};

export default Counter;
