import React, { useEffect, useState } from 'react';

const temporizadorVersionTwo = props => {
    const [segundos, setsegundos] = useState(0)

    useEffect(() => {
     const intervalo = setInterval(()=>{
        setsegundos((segundos)=>segundos+1);
     })
     return()=> clearInterval(intervalo);
    }, [])
    
    return (
        <div>
            <h1>El temporizador es: {segundos} </h1>
          {/*   <button onClick={handleTemporizador}> Aumentar temporizador</button> */}
        </div>
    );
};



export default temporizadorVersionTwo;