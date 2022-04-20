const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('fav.json').pipe(res);

	res.setHeader('X-CS595s22-Character', 'Custom Header: Favorite character is Deadpool');
	res.setHeader('X-CS595s22-Show', 'Custom Header: Favorite show is Arcane');
	res.setHeader('X-CS595s22-Musician', 'Custom Header: Favorite musician is Futuristic');
})

app.listen(4001);
