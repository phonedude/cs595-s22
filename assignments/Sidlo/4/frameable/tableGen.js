const fs = require("fs");

let links = fs.readFileSync('links.txt', 'utf-8').split('\n');
let results = fs.readFileSync('actual-results.txt', 'utf-8').split('\n');

let table = fs.createWriteStream('table.txt')

table.write('|Site|Frameable?|\n')
table.write('|----|----------|\n')

for (let i = 0; i < 100; i++) {
	table.write('|' + links[i] + '|' + results[i] + '|\n')
}
