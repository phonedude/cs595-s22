const fs = require("fs");

let urls = fs.readFileSync('framable/urls.txt', 'utf8').split('\n');
let failed = fs.readFileSync('framable/CountFailed.txt', 'utf8').split('\n');

let readme = fs.createWriteStream('README.md')

readme.write('## Assignment 4, CS 495/595 Web Security, Spring 2022\n')
readme.write('This assignment demonstrates how many sites from the the previous assignment\'s 100 sites are framable. In order to test each site, individual html pages were generated using [GenerateHTML.sh](GenerateHTML.sh).\n')
readme.write('2 different methods were used to acquire the information about iframe success:\n')
readme.write('* Automated iframe success check\n')
readme.write('* Manual iframe success check\n')
readme.write('The results are documented and compared below.\n')

readme.write('### First method: Automated iframe success check\n')
readme.write('The method used for automatically checking for iframe success was implemented using headless chrome and checking the length of the iframe (provided by Professor Nelson) and was done using the following steps:\n')
readme.write('* Using [GenerateHTML.sh](GenerateHTML.sh), an html file was generated for each url in [urls.txt](urls.txt) with a script included to check for iframe success.\n')
readme.write('* Using [CheckFramable.sh](CheckFramable.sh), headless chrome was used to run each html file.\n')
readme.write('* Using [CountFramable.sh](CountFramable.sh) and [CountTotalFramable.sh](CountTotalFramable.sh), grep commands were used to count the results from the previous step.\n')
readme.write('Results:\n')
readme.write('* Suceeded: 20\n')
readme.write('* Failed: 77\n')
readme.write('* Total: 97 (3 no response)\n')

readme.write('|Site|Framable|Reason|\n')
readme.write('|----|--------|------|\n')

for (let i = 0; i < 97; i++) {
    if (failed[i] == '1') {
        readme.write ('|'+ urls[i] +'|'+ 'No' +'||\n')
    }
    else if (failed[i] == '0') {
        readme.write ('|'+ urls[i] +'|'+ 'Yes' +'||\n')
    }
}


readme.write('### Second method: Manual iframe success check\n')
readme.write('Checking for iframe success manually was done by running a node.js server and visiting each HTML page.\n')
readme.write('Results:\n')
readme.write('* Suceeded: \n')
readme.write('* Failed: \n')
readme.write('* Total: 97 (3 no response)\n')

readme.write('|Site|Framable|Reason|\n')
readme.write('|----|--------|------|\n')

for (let i = 0; i < 97; i++) {
    readme.write ('|'+ urls[i] +'|||\n')
}