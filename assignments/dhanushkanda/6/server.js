const {createReadStream} = require('fs')
const express = require('express')
const fs = require('fs')
const md5 = require('md5')
const app = express()
const http = require("http")
const port = 5001

app.get('/', (req, res) =>
	{
		// using 3 different HTTP request headers to form the browser fingerprint
		header1 = req.get('User-Agent')
		header2 = req.get('Accept')
		header3 = req.get('Accept-Language')

		// concatenating the features to creat a string, and then hashing the fingerprint using md5
		var fingerprint = header1.concat(header2, header3)
		var fp_id = md5(fingerprint)

		// serving the file
		stream = createReadStream('html/main.html')
		stream.pipe(res)

		// readint the server-side log file to check if the visitor is new or already existing
		fs.readFile('sslogs.log', function(err, data) 
		{
			if(err) throw err;	
				var array = data.toString().split("\n")
			array.pop()					// popping the 1st row from the file
				var found = array.find(a =>a.includes(fp_id));
				if (found) 
				{
					// if the visitor details are already there, or if he already visited the website
					for(i = array.length-1; i >= 0; i--) 
					{
					const objct = JSON.parse(array[i])
					if(objct['id'] == fp_id)
					{
						visitor = objct
						visitor['previous-visit'] = new Date()
						visitor['count-visit'] = visitor['count-visit'] + 1
						log_line = (JSON.stringify(visitor)).concat('\n')
						fs.appendFile('sslogs.log', log_line, err => 
						{
						if (err) 
							{
							console.error(err)
							return
							}
						}
												)
						console.log(`ID: ${fp_id} Returning user. Last Visit:${visitor['count-visit']}`)
						return

					}
				}
			}
				else							// if it is a new , creating an entry in the sslogs and appending it.
				{
					visitor = {}
					visitor['id'] = fp_id
					visitor['user-agent'] = header1
					visitor['accept'] = header2
					visitor['accept-language'] = header3
					visitor['count-visit'] = 1
					visitor['previous-visit'] = new Date()
					log_line = (JSON.stringify(visitor)).concat('\n')
					fs.appendFile('sslogs.log', log_line, err => 
					{
						if (err) 
						{
							console.error(err)
							return1
						}
					}
											)
						console.log(`ID: ${fp_id} New user`);	
				}	
		}
				)
	}
		)
app.listen(port, ()	 => {
	console.log(`Server listens at http://localhost:${port}`)
})
app.use(express.static('html'))


