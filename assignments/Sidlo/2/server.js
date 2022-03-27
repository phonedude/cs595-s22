const express = require('express');
const { createReadStream } = require('fs');
const port = '4000';
const favicon = require('serve-favicon');

const app = express();

app.use(favicon('./favicon.ico'));

app.get('/', (req, res) => { createReadStream('index.html').pipe(res); })

app.get('/deadpool', (req, res) => { createReadStream('page1.html').pipe(res); })

app.get('/arcane', (req, res) => { createReadStream('page2.html').pipe(res); })

app.get('/futuristic', (req, res) => { createReadStream('page3.html').pipe(res); })

app.listen(port);
