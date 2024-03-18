import React, { useState } from 'react';
import PropTypes from 'prop-types';


const useContador = (inicialValue) => {

    const [count, setcount] = useState(inicialValue);

    const handleCount=()=>{

        setcount((count)=>count+1);
         
    }
  return ([count, handleCount])
}


const hookPersonalziado = props => {

    const [count, handleCount] = useContador(0);
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={handleCount}>Incrementar contador</button>
        </div>
    );
};



export default hookPersonalziado;