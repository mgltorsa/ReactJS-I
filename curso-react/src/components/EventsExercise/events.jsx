import React, { useEffect, useRef, useState } from "react";

const EventHandlingComponent = () => {
  const [message, setMessage] = useState("");

  const ref = useRef();

  const handleButtonClick = () => {
    setMessage("¡Botón clickeado!");
  };

  const handleKeyPress = (event) => {
    setMessage(`Tecla presionada: ${event.key}`);
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div>
      <h1>Manejo de Eventos en React</h1>
      <button onClick={handleButtonClick}>Clic aquí</button>
      <p>{message}</p>
      <input
        ref={ref}
        type="text"
        placeholder="Presiona una tecla"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default EventHandlingComponent;
