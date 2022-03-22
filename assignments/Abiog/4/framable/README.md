## Assignment 4, CS 495/595 Web Security, Spring 2022

This assignment demonstrates how many sites from the the previous assignment's 100 sites are framable. In order to test each site, individual html pages were generated using [GenerateHTML.sh](GenerateHTML.sh).

2 different methods were used to acquire the information about iframe success:
* Automated iframe success check
* Manual iframe success check

The results are documented and compared below.

### First method: Automated iframe success check

The method used for automatically checking for iframe success was implemented using headless chrome and checking the length of the iframe (provided by Professor Nelson) and was done using the following steps:

* Using [GenerateHTML.sh](GenerateHTML.sh), an html file was generated for each url in [urls.txt](urls.txt) with a script included to check for iframe success.
* Using [CheckFramable.sh](CheckFramable.sh), headless chrome was used to run each html file.
* Using [CountFramable.sh](CountFramable.sh) and [CountTotalFramable.sh](CountTotalFramable.sh), grep commands were used to count the results from the previous step.

Results:
* Suceeded: 20
* Failed: 77
* Total: 97 (3 no response)

table

### Second method: Manual iframe success check

Checking for iframe success manually was done by running a node.js server and visiting each HTML page.

Results:
* Suceeded:
* Failed:
* Total: 97 (3 no response)

table
