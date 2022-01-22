const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser')

const router = express.Router();
// Form here:https://codeforgeek.com/render-html-file-expressjs/

router.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
});

router.get('/blink182',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/blink182.html'));
});

router.get('/knoxville',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/knoxville.html'));
});
router.get('/sexpistols',function(req,res){
    res.sendFile(__dirname+'/sites/bigdandthekidstable.html');
});
router.get('/harrypotter',function(req,res){
    res.sendFile(path.join(__dirname+'/sites/harrypotter.html'));
});
//add the router
app.use(express.static('public'))
app.use('/', router);
app.use(cookieParser())

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');