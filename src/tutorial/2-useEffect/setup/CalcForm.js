import React, { useState } from 'react';
import Card from './Card';

const CalcForm = () => {
	const [altura, setAltura] = useState(0);
	const [peso, setPeso] = useState(0);
	const [nome, setNome] = useState('');
	const [imc, setIMC] = useState(null);

	const calcIMC = () => {
		return setIMC(
			parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const nome = e.target.name.value;
		const peso = parseFloat(e.target.peso.value);
		const altura = parseFloat(e.target.altura.value);
		console.log(nome, altura, peso);

		const pessoa = {
			nome,
			peso,
			altura,
		};

		const url = 'http://localhost:3000/novo';
		const response = await fetch(url, {
			method: 'POST',
			headers: new Headers({
				'Content-type': 'aplication/json',
			}),
			body: JSON.stringify(pessoa),
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Nome:</label>
				<input
					type='text'
					id='name'
					onChange={(e) => setNome(e.target.value)}
				/>
				<label htmlFor=''>Peso:</label>
				<input
					type='string'
					id='peso'
					onChange={(e) => setPeso(e.target.value)}
				/>
				<label htmlFor=''>Altura:</label>
				<input
					type='string'
					id='altura'
					onChange={(e) => setAltura(e.target.value)}
				/>
				<button type='submit' onClick={calcIMC}>
					enviar
				</button>
			</form>
			<Card nome={nome} altura={altura} peso={peso} imc={imc} />
		</div>
	);
};

export default CalcForm;
