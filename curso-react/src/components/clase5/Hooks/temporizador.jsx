import React, { useState } from 'react';
import PropTypes from 'prop-types';

const temporizador = (props) => {
    const [segundos, setsegundos] = useState(0)

    const handleTemporizador=()=>{
        setsegundos(segundos+1);
    }

    return (
        <div>
            <h1>El temporizador es: {segundos} </h1>
            <button onClick={handleTemporizador}> Aumentar temporizador</button>
        </div>
    );
};



export default temporizador;