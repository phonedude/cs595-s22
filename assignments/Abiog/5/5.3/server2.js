const express = require('express');
const { createReadStream } = require('fs');

const app = express();

app.get('/', (req, res) => {
	createReadStream('5-3.html').pipe(res);

    res.setHeader('Content-Security-Policy', 'default-src \'self\'')
})

app.listen(4000);