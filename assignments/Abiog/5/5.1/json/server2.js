const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('myfavs.json').pipe(res);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000')
})

app.listen(9000);