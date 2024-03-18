import React, { createContext, useContext, useState } from 'react';

// create the context
const TemaContext = createContext();

// Create the provider
const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('light'); 

  const cambiarTema = () => {
    setTema((temaActual) => (temaActual === 'light' ? 'dark' : 'light'));
  };

  return (
    <TemaContext.Provider value={{ tema, cambiarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

// Create the customer
const ConsumidorDeTema = () => {
  const { tema, cambiarTema } = useContext(TemaContext);

  return (
    <div style={{ padding: '20px', backgroundColor: tema === 'light' ? '#fff' : '#333', color: tema === 'light' ? '#333' : '#fff' }}>
      <h2>Componente Consumidor</h2>
      <p>Tema actual: {tema}</p>
      <button onClick={cambiarTema}>Cambiar Tema</button>
    </div>
  );
};

// using the TemaProvider to wrap the current theme
const App = () => {
  return (
    <TemaProvider>
      <div>
        <h1>Aplicación con Tema</h1>
        <ConsumidorDeTema />
      </div>
    </TemaProvider>
  );
};

export default App;