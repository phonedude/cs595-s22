const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('fav.json').pipe(res);
})

app.listen(4001);
