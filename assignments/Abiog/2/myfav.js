const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.use('/favicon.ico', express.static('images/favicon.ico'));

app.get('/', (req, res) => {
	createReadStream('index.html').pipe(res);
})

app.get('/memento', (req, res) => {
	createReadStream('path1.html').pipe(res);
})

app.get('/strangers-from-hell', (req, res) => {
	createReadStream('path2.html').pipe(res);
})

app.get('/daniel-caesar', (req, res) => {
	createReadStream('path3.html').pipe(res);
})

app.listen(4000);

