import React, { useState } from 'react';

const EventHandlingComponent = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('¡Botón clickeado!');
  };

  const handleKeyPress = (event) => {
    setMessage(`Tecla presionada: ${event.key}`);
  };

  return (
    <div>
      <h1>Manejo de Eventos en React</h1>
      <button onClick={handleButtonClick}>Clic aquí</button>
      <p>{message}</p>
      <input
        type="text"
        placeholder="Presiona una tecla"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default EventHandlingComponent;
