import React, { useState } from 'react'

const Contador = () => {

  const [contador, cambiarContador] = useState(0);
  return (
    <button onClick={(evento) => {
        cambiarContador(contador + 1);
    }}>{`contador: ${contador}`}</button>
  )
}

export default Contador;
