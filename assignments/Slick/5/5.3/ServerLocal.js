var express = require('express'),
app = express(),
http = require('http'),
httpServer = http.Server(app);
const helmet = require('helmet');

app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));

app.use( express.static(__dirname + '/') );

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/local.html');
});
app.listen(3000);