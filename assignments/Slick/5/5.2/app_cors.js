var express = require('express');
const cors = require('cors');
var allowlist = ['http://example1.com', 'http://example2.com','http://127.0.0.1:1111']
var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    console.log('In the hall the mountain king',req.header('Origin'));
    console.log((JSON.stringify(req.headers)));
    console.log(req.header("X-CS595s22-knoxville"))

    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
var POSTS = {
    '1':{'post':'Knoxville is the man.'}
};
var SERVER_PORT = 9999;
var serverapp = express();
serverapp.use(cors({ allowedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] ,exposedHeaders: ['X-CS595s22-knoxville', 'X-Bar']}));
//serverapp.use(cors())
serverapp.use(express.static(__dirname));
//serverapp.get('/api/posts',cors(corsOptionsDelegate,{exposedHeaders: ['X-Foo', 'X-Bar'] ,allowedHeaders: ['X-Foo', 'X-Bar'] }),function(req,res){
serverapp.get('/api/posts',cors(corsOptionsDelegate,{exposedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] ,allowedHeaders: ['X-CS595s22-knoxville', 'X-Bar'] }),function(req,res){
    console.log('Message recieved');
    res.json(POSTS);
});
serverapp.listen(SERVER_PORT, function(){
    console.log('Server started at http://127.0.0.1:'+SERVER_PORT);
});
var CLIENT_PORT = 1111;
var clientapp = express();
clientapp.use(express.static(__dirname));
clientapp.listen(CLIENT_PORT, function(){
    console.log('Started client at http://127.0.0.1:'+CLIENT_PORT);
});