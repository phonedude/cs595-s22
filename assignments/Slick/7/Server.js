const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs')

const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/login",(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    const obj = JSON.parse(JSON.stringify(request.body))
    fs.appendFileSync('UserInfo.txt', JSON.stringify(obj)+'\n');
});

// add router in the Express app.
app.use("/", router);

router.get("/",(req, res) => {
    res.sendfile("index.html");
    });

app.listen(3000,() => {
    console.log("Started on PORT 3000");

    })