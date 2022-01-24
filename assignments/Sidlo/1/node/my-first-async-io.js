const fs = require('fs')

function countLines(file) {
	fs.readFile(file, function doneReading(err, fileContents) {
		const text = fileContents
		const lines = text.toString().split('\n').length - 1
		console.log(lines)
	})
}

countLines(process.argv[2])
