import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const Table = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Classificação</th>
					<th>IMC</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Abaixo do Peso</td>
					<td>Abaixo de 18,5</td>
				</tr>
				<tr>
					<td>Peso Normal</td>
					<td>Entre 18,5 e 24,9</td>
				</tr>
				<tr>
					<td>Obesidade Grau 1</td>
					<td>Entre 30 e 34,9</td>
				</tr>
				<tr>
					<td>Obesidade Grau 2</td>
					<td>Entre 35 e 39,9</td>
				</tr>
				<tr>
					<td>Obesidade Grau 3 ou Morbida</td>
					<td>Maior que 40</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
