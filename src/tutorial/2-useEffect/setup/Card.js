import React, { useState, useEffect } from 'react';
const Card = (props) => {
	return (
		<article>
			<h2>{props.pessoa.nome}</h2>
			<h4>{props.pessoa.peso}</h4>
			<h4>{props.pessoa.altura}</h4>
			<div>
				<h5>{props.imc}</h5>
			</div>
		</article>
	);
};

export default Card;
