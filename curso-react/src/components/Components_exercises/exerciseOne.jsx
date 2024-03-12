import React, { useEffect } from 'react'

const Encabezado = () => {
	return <h1>Encabezado Curso ReactJS-I</h1>
}

const Body = () => {
	return (
		<div>
			<h2>I am learning react!</h2>
		</div>
	)
}

const PiePagina = () => {
	return (
		<div>
			<h3>Pie de Pagina</h3>
		</div>
	)
}

const PaginaCompleta = () => {
	useEffect(() => {
		console.log('RENDERIZAR')
	}, [])

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
			<Encabezado />
			<Body />
			<PiePagina />
		</div>
	)
}

export default PaginaCompleta
