const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('myfavs.json').pipe(res);

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')

	res.setHeader('X-CS595s22-film', 'Memento');
	res.setHeader('X-CS595s22-TVshow', 'Strangers From Hell');
	res.setHeader('X-CS595s22-artist', 'Daniel Caesar');

	res.setHeader('Access-Control-Expose-Headers', 'X-CS595s22-film, X-CS595s22-TVshow, X-CS595s22-artist')
})

app.listen(9000);