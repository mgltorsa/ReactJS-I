import React from 'react'

const Despedida_hijo_mensaje = (props) => {
	const handlerCLick = () => {
		props.texto = 'hello'
		/* return <div>{props.texto}</div> */
	}
	return (
		<div>
			<p>{props.texto}</p>
			<button onClick={handlerCLick}>Cambiar mensaje</button>
		</div>
	)
}

export default Despedida_hijo_mensaje
