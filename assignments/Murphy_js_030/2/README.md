Joshua Murphy

CS 595 - Web Security

Assignment 2 - Local Server

<br/>

## Assignment Description - Local Server 

This assignment requires that a server be set up and ran on a local port of the machine, installing three paths on said server that lead to 
separate pages, in which I've chosen a favorite video game, movie, and band. The root page is a directory that contains link to the three pages.
Each page that is linked to the homepage includes a link at the top of the page called "Return" that returns the user back to the homepage, a title, 
an image that corresponds to the topic, and a short paragraph describing the topic. Finally each page on the server includes a favicon inside the page's
tab.

## Server file

server.js requires express in order to run. 

    npm install express

Inside of server.js, the functions are split up into groups, including static files, setting the views, and getting the pages. The static file public is used to store where all the images that will be used, and retrieved later on for use in their respective pages. As I have converted the html pages to embedded javascript, the view engine is set to ejs. Finally, each path is defined and returns a response to render said page to the user. The port used for the local server is 4000.

## Video Link
[Link]()

<br/>

# Resources