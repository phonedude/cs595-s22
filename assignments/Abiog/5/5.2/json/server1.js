const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('myfavs.json').pipe(res);

	res.setHeader('X-CS595s22-film', 'Memento');
	res.setHeader('X-CS595s22-TVshow', 'Strangers From Hell');
	res.setHeader('X-CS595s22-artist', 'Daniel Caesar');
})

app.listen(9000);