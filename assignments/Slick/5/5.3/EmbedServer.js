var express = require('express'),
app = express(),
http = require('http'),
httpServer = http.Server(app);
const helmet = require('helmet');

app.use( helmet.frameguard({ action: 'SAMEORIGIN' }));
app.use( helmet.contentSecurityPolicy() );
app.use( express.static(__dirname + '/') );

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/Server.html');
});
app.listen(5000);