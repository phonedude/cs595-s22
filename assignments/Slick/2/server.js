const express = require('express');
var favicon = require('serve-favicon')
const app = express();
const path = require('path');


const router = express.Router();
// Form here:https://codeforgeek.com/render-html-file-expressjs/

router.get('/',function(req,res){
    console.log('Hey there, rockstar. Looking for one of these?')
});

router.get('/blink182',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/blink182.html'));
});

router.get('/knoxville',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/knoxville.html'));
});
router.get('/bigdandthekidstable',function(req,res){
    res.sendFile(__dirname+'/sites/bigdandthekidstable.html');
});
router.get('/harrypotter',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/harrypotter.html'));
});
//add the router
app.use(favicon(path.join(__dirname,'/favicon/favicon.ico')))
app.use(express.static('public'))
app.use('/', router);
var publicDir = require('path').join(__dirname,'/sites');
app.use(express.static(publicDir));
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');