//index.js file
// Requiring module
const express = require('express')
const cors = require('cors')

// Creating express app 
const app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // For legacy browser support
    //methods: "PUT"
}
// Enabling CORS for any unknown 
// origin(https://xyz.example.com)
app.use(cors());
app.options('*', cors(corsOptions));


// Sample api routes for testing
app.get('/',cors(),(req, res) => {
    console.log('Pinged');
    res.json("welcome to our server");
    
});

app.get('/secret',(req, res) => {
    const secret =  Math.floor(Math.random()*100)
    res.json({secret})
});

// Port Number
const port = 5000;

// Server setup
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});