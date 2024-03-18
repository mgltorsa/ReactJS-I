import React from 'react';
import { createStore } from 'redux';

export const INCREMENTAR_TEMPORIZADOR = 'INCREMENTAR_TEMPORIZADOR';
export const DECREMENTAR_TEMPORIZADOR = 'DECREMENTAR_TEMPORIZADOR';

const temporizadorReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPORIZADOR:
      return state + 1;
    case DECREMENTAR_TEMPORIZADOR:
      return state - 1; 
    default:
      return state;
  }
};

const store = createStore(temporizadorReducer);

const reducerTempor = () => {
  const handleIncrement = () => {
    store.dispatch({ type: INCREMENTAR_TEMPORIZADOR });
    console.log(store.getState()) // Dispatch action with type
  };

  const handleDecrement = () => {
    store.dispatch({ type: DECREMENTAR_TEMPORIZADOR });
    console.log(store.getState()) // Dispatch action with type
  };

  return (
    <div>
      <h3>temporizador Reducer ver la consola</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> {/* Corrected typo */}
    </div>
  );
};

export default reducerTempor;
