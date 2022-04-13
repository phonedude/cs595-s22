Joshua Murphy

CS 595 - Web Security

Assignment 6

<br/>

# Fingerprinting Machines based on Header Requests to a Server

## Server Side Code

For this assignment, I had to write sever side code that would create a 
fingerprint of the user's browser when visiting the server, by taking 
three request headers and creating a hash, using md5, and is able to 
recognize different machines and browsers based on said hash value.
This program requires the packages express, fs, and md5.

Due to the server.js file having over 100 lines of code, I will separate 
the key functions and lines of code used to fingerprint the user, and describe 
them. 

For the fingerPrinting() function, it takes 3 parameters, which are the three
request headers used to create the hash used for the fingerprint. It adds the 
three parameters together, preforms a hashing function on them, and then returns the
hash value.

    function fingerPrinting(data_1, data_2, data_3){
        data_final = data_1 + data_2 + data_3
        data_hash = md5(data_final)
        return(data_hash)
    }

Next, the printLog() function takes four parameters, the 3 headers used to create
the hash, and the hash itself. It then prints the parameters to the console log 
of the server.

    function printLog(data_1, data_2, data_3, data_4){
        console.log('User-Agent: ' + data_1)
        console.log('Accept: ' + data_2)
        console.log('Accept-Language: ' + data_3)
        console.log('Hash: ' + data_4 + '\n')
    }

I also store this data to a csv file using storeData(). This takes five parameters,
the three headers, the hash, and the path of the file that it is writing to.
it stores the there headers and hash value into a string variable, splits
the string for unneeded characters, and replaces the "\" as well as the double 
quotations that are caused when writing to a file. Finally, it checks to see
if the csv file exists. If it does, it appends the data to the file. If it does 
not exist, it creates the file, and writes the row to the file.

    const storeData = (data_1, data_2, data_3, data_4, path) => {
        try {
            // Store data parameters into string variable
            var str = JSON.stringify(data_1) + "," + 
                    JSON.stringify(data_2) + "," + 
                    JSON.stringify(data_3) + "," + 
                    JSON.stringify(data_4) + 
                    '\n'
            // Remove double quotes and backslash added in writing process
            var res = str.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
                res = res.toString()
                res = res.replace(/\\/g, '')
                res = res.replaceAll('""', '"')
            // if statement to check if csv file exists. 
            // if it does not, create it and save string to file.
            if (fs.existsSync(csv))
                fs.appendFile("test.csv", (res), function(err){
                    if (err) throw err
                })
            else
                fs.writeFileSync(path, 'hash, user-agent, accept, accept-langauge\n' + res, json)
        } catch(err) {
            console.error(err)
        }
    }

Finally, when getting the homepage of the server, we use a the functions 
discussed above along with getting the request headers that we will pass
into said functions. First, we call the fingerPrinting(), passing in the 
request headers 'user-agent', 'accept', and 'accept-language', and store 
the resulting hash into the variable data_hash. Then, printLog is called 
passing in the three aforementioned headers and the hash, which prints 
to the console the results. Next, storeData() is called which writes
the hash and the headers to a csv file. Finally, the server renders the
page and passes the hash for use by the html page.

<br />

## HTML side code

For homepage.ejs, I use javascripting to store the hash created by the server 
into a variable, and use if-else statements to check for several hashes used
through out this assignment. The first hash checked is on my normal desktop 
that that I use for school work and programming. It is running windows 10 and 
opened the server page using firefox version 99.0. The second hash is the value
of the machine described above, but using firefox web developer edition
version 100. The final hash it checks is the one generating using my iPhone 
running iOS 15 and opened in Safari. These if-else statement will print 
a special message only viewable by users whose hashes match the one they are 
checking, and appends these messages to the html page.

    <!doctype html>
    <html lang='en'>
        <head>
            <meta charset='utf-8' />
            <title>Homepage</title>
            <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
        </head>
        <body>
            <ul>
            <li><a href="/pokemon-gold">Pokemon Gold Version</a></li>
            <li><a href="/star-wars-rogue-one">Star Wars: Rogue One</a></li>
            <li><a href="/rage-against-the-machine">Rage Against The Machine</a></li>
            <p>Welcome User: <%= hash %></p>
            <div id = "content"></div>
            <script>
                var hash = "<%= hash %>"
                if(hash == "4489f44034998209871e51c28f99e08e"){
                    var node = document.getElementById('content')
                    var content = "<p>hello there me on normal firefox!</p>"

                    node.insertAdjacentHTML('afterbegin', content)
                }
                else if (hash == "cc349893339386473e9d21c61e571ce1"){
                    var node = document.getElementById('content')
                    var content = "<p>Hello me on Windows 10 using Firefox web developer version 100!</p>"

                    node.insertAdjacentHTML('afterbegin', content)
                }
                else if (hash == "849a1aeefae18d7d13bc841684492bcd"){
                    var node = document.getElementById('content')
                    var content = "<p>Hello on Joshua's iPhone!</p>"

                    node.insertAdjacentHTML('afterbegin', content)
                }
            </script>
        </ul>
        </body>
    </html>

## Images of the Server Running on Multiple Devices and Browsers.

## Video Links

# References