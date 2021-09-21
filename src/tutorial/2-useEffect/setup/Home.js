import React, { useState, useEffect } from 'react';
import Card from './Card';

import React from 'react';

const Home = () => {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		getElements();
	}, []);

	const url = 'http://localhost:3000/';
	async function getElements() {
		const response = await fetch(url);
		const data = response.json();
		setInfo(data);
	}
	return (
		<div>
			{info.map((pessoa) => {
				<Card pessoa={pessoa} />;
			})}
		</div>
	);
};

export default Home;
