const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('myfavs.json').pipe(res);
})

app.listen(9000);