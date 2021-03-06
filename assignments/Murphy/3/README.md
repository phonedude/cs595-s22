Joshua Murphy

CS 595 - Web Security

Assignment 3 - Cookie Report of 100 of the Mozilla 5op 500 sites

<br/>

# Introduction

For assignment 3, take the 100 sites randomized from the Mozilla top 500 web sites, stored in 
100-sites.txt, and retrieve the http responses from said sites, and compile that information 
into a table, and summarize said information at the end of the report. This includes:

    * The terminating status codes for each site. Note this is the final status code, not the 301s, 302, etc. that you may encounter on your way to the final status code. More on that below.
    * For each site, the number of different cookies that are set. Keep in mind that each HTTP response can have multiple "Set-Cookie:" headers.
    * For each cookie, extract the attributes: HttpOnly, Secure, SameSite (and the corresponding policy), Path (and the corresponding value). With this data you will answer:
        * How many cookies set HttpOnly?
        * How many cookies set Secure?
        * How many cookies set SameSite? For those that set SameSite, how many are Strict? How many are Lax? How many are None?
        * How many cookies set a Path? How many of those are values other than "/"?

    * Summarizing the entire table, what are the Min/Max/Mean/Median number of cookies for the 100 sites?

I have made two tables for this assignment. The first table includes the URL, the 
terminating status code, the number of cookies, and if it has cookies, the number of those cookies that include either HttpOnly, Secure, or SameSite in said cookies.
It also includes the variable chosen for Samesite, that being Strict, Lax, or None.
The second table focus on cookies that included SameSite, and looks at how many of those cookie were 
set to either Strict, Lax, or None. I originally had SameSite delegated to it's own
table, but decided for completeness sake, to include it in the master table as well.

To scrape the data needed, I created a script that while not at the end of file, read
each line, and passed it in as a curl argument. if the time of the command exceeded 120 seconds, it moves to the next URL in the list. It saves all contents to a file that matches the URL, with .txt appended to it. It does this same process as above, except using grep to parse for lines containing the words "Set-Cookie", "HTTP/1.1" and 
"HTTP/1.0", and save them to separate files.


    #!/bin/bash
    # --max-time 120
    path_file=$1
    n=0

    while IFS=$' \t\n\r' read -r line;
        do
            line=$line
            echo "fetching line No. $n: $line"
            file="$line.txt"
            curl -ILsk --max-time 120 $line > Curl_Output/$file
            curl -ILsk --max-time 120 $line | grep -Ei "Set-Cookie|HTTP/1.1|HTTP/1.0" > Curl_Output_Grepify/$file

            n=$((n+1))
            printf "\n"
        done < $path_file

To make analysis easier, I used the following simple shell script. This script runs through a series of grep and word count
commands, and then outputs the results as well as writes all of the cookies to a file.

    #!/bin/bash
    echo "-n" "# of Cookies: "
    grep -ir 'Set-Cookie' Curl_Output/ | wc -l
    echo "-n" "HttpOnly: "
    grep -ir 'HttpOnly' Curl_Output/ | wc -l
    echo "-n" "Secure: "
    grep -ir 'Secure' Curl_Output/ |wc -l
    echo "-n" "SameSite Total: "
    grep -ir 'SameSite' Curl_Output/ | wc -l
    echo "-n" "SameSite=Strict: "
    grep -ir 'SameSite=Strict' Curl_Output/ | wc -l
    echo "-n" "SameSite=Lax: "
    grep -ir 'SameSite=Lax' Curl_Output/ | wc -l
    echo "-n" "SameSite=None: "
    grep -ir 'SameSite=None' Curl_Output/ | wc -l
    echo "-n" "# of Path=/: "
    grep -ir 'Path=/' Curl_Output/ | wc -l
    echo "|   File Path   |  # of Cookie |"
    grep -ic 'Set-Cookie' Curl_Output/* | grep -v :0
    cat Curl_Output/*.txt | grep -ir 'Set-Cookie' Curl_Output/ > all_cookies.txt
    grep -irc 'HttpOnly' Curl_Output/*.txt | grep -v :0 > analysis_files/httponly.txt
    grep -irc 'SameSite' Curl_Output/* | grep -v :0 > analysis_files/SameSite.txt
    grep -irc 'samesite=lax' Curl_Output/* | grep -v :0 > analysis_files/lax.txt
    grep -irc 'samesite=none' Curl_Output/* | grep -v :0 > analysis_files/none.txt
    grep -irc 'samesite=strict' Curl_Output/* | grep -v :0 > analysis_files/strict.txt

# Tables

| URL | Terminating Status Code | Number of Cookies | HttpOnly | Secure | SameSite | Strict | Lax | None |
|---|---|---|---|---|---|---|---|---|
| about.com | 200 | - | - | - | - | - | - | - |
| akamaized.net | - | - | - | - | - | - | - | - |
| alexa.com | 200 | - | - | - | - | - | - | - |
| alibaba.com | 200 | 1 | - | - | - | - | - | - |
| amazon.fr | 405 | - | - | - | - | - | - | - | - | - |
| amazon.it | 405 | 10 | - | - | - | - | - | - |
| asahi.com | 200 | - | - | - | - | - | - | - |
| asus.com | 200 | - | - | - | - | - | - | - |
| bandcamp.com | 200 | 6 | 1 | 3 | 1 | - | - | 1 |
| bbc.co.uk | 200 | - | - | - | - | - | - | - |
| bbc.com | 200 | - | - | - | - | - | - | - |
| bp3.blogger.com | 400 | - | - | - | - | - | - | - |
| brandbucket.com | 403 | - | - | - | - | - | - | - |
| businessinsider.com | 200 | - | - | - | - | - | - | - |
| buzzfeed.com | 200 | 4 | - | - | - | - | - | - |
| cnbc.com | 503 | - | - | - | - | - | - | - |
| cnil.fr | 200 | - | - | - | - | - | - | - |
| cointernet.com.co | 200 | - | - | - | - | - | - | - |
| debian.org | 200 | - | - | - | - | - | - | - |
| depositfiles.com | 200 | 1 | - | - | - | - | - | - |
| dot.tk | 200 | 3 | - | - | - | - | - | - |
| draft.blogger.com | 200 | 3 | 3 | 3 | - | - | - | - |
| drive.google.com | 200 | 3 | 3 | 1 | - | - | - | - |
| dropbox.com | 200 | 4 | 2 | 4 | - | - | - | - |
| dw.com | 200 | - | - | - | - | - | - | - |
| ea.com | 200 | 12 | - | 3 | - | - | - | - |
| ebay.co.uk | 301 | - | - | - | - | - | - | - |
| elmundo.es | 200 | - | - | - | - | - | - | - |
| elpais.com | 200 | 8 | - | 1 | 1 | - | - | 1 |
| en.wikipedia.org | 200 | 8 | 6 | 8 | - | - | - | - |
| enable-javascript.com | 200 | 1 | 1 | - | 1 | - | 1 | - |
| etsy.com | 200 | 4 | - | 2 | 1 | - | - | 1 |
| evernote.com| 200 | 2 | - | 2 | - | - | - | - |
| fb.me| 200 | 2 | 2 | 2 | - | - | - | - |
| feedburner.com | 200 | 2 | 2 | 1 | - | - | - | - |
| files.wordpress.com | 200 | 3 | - | 3 | 3 | 1 | - | 2 |
| finance.yahoo.com | 404 | 1 | - | - | - | - | - | - |
| focus.de | 200 | - | - | - | - | - | - | - |
| francetvinfo.fr | 200 | - | - | - | - | - | - | - |
| gov.uk | 200 | - | - | - | - | - | - | - |
| guardian.co.uk | 200 | 4 | - | 4 | - | - | - | - |
| harvard.edu | 200 | - | - | - | - | - | - | - |
| hugedomains.com | 200 | 6 | 1 | 1 | - | - | - | - |
| id.wikipedia.org | 200 | 8 | 6 | 8 | - | - | - | - |
| imgur.com | 200 | 1 | - | - | - | - | - | - |
| independent.co.uk | 200 | 11 | 1 | 5 | - | - | - | - |
| instagram.com | 405 | 4 | 1 | 4 | - | - | - | - |
| interia.pl | 200 | 1 | - | - | - | - | - | - |
| kakao.com | 200 | 1 | 1 | - | - | - | - | - |
| kompas.com | 200 | - | - | - | - | - | - | - |
| last.fm | 200 | 5 | 1 | 1 | - | - | - | - |
| latimes.com | 200 | - | - | - | - | - | - | - |
| leparisien.fr | 200 | - | - | - | - | - | - | - |
| lg.com | 200 | - | - | - | - | - | - | - |
| m.wikipedia.org | 200 | 8 | 6 | 8 | - | - | - | - |
| mega.nz | 200 | 1 | - | - | - | - | - | - |
| mozilla.com | 200 | - | - | - | - | - | - | - |
| msn.com | 200 | 6 | 5 | 2 | 2 | - | - | 2 |
| nature.com | 200 | 4 | 3 | 1 | - | - | - | - |
| naver.com | 200 | - | - | - | - | - | - | - |
| nba.com | 200 | - | - | - | - | - | - | - |
| netflix.com | 405 | 4 | - | - | - | - | - | - |
| netvibes.com | 200 | 2 | - | 2 | 2 | - | - | 2 |
| networkadvertising.org | 200 | 3 | - | 1 | 1 | - | - | 1 |
| nhk.or.jp | 200 | - | - | - | - | - | - | - |
| nydailynews.com | 200 | 4 | - | 1 | 1 | - | - | 1 |
| over-blog.com | 200 | - | - | - | - | - | - | - |
| ovh.com | 200 | - | - | - | - | - | - | - |
| pcmag.com | 200 | - | - | - | - | - | - | - |
| photobucket.com | 200 | - | - | - | - | - | - | - |
| pinterest.com | 200 | 4 | 3 | 3 | 2 | - | 1 | 1 |
| play.google.com | 200 | 3 | 3 | - | - | - | - | - |
| reuters.com | 200 | 1 | - | 1 | - | - | - | - |
| rfi.fr | 200 | - | - | - | - | - | - | - |
| rtve.es | 200 | - | - | - | - | - | - | - |
| ru.wikipedia.org | 200 | 8 | 6 | 8 | - | - | - | - |
| search.google.com | 200 | 2 | 1 | 1 | - | - | - | - |
| sedo.com | 200 | 6 | 6 | 5 | 3 | - | - | 3 |
| soratemplates.com | 200 | - | - | - | - | - | - | - |
| spiegel.de | 200 | - | - | - | - | - | - | - |
| spotify.com | 200 | 5 | 3 | 5 | 2 | - | 2 | - |
| ssl-images-amazon.com | - | - | - | - | - | - | - | - |
| telegram.me | 501 | - | - | - | - | - | - | - |
| thoughtco.com | 200 | 3 | - | - | - | - | - | - |
| time.com | 200 | - | - | - | - | - | - | - |
| trustpilot.com | 200 | - | - | - | - | - | - | - |
| twimg.com | - | - | - | - | - | - | - | - |
| ucoz.ru | 200 | 2 | 2 | - | - | - | - | - |
| upenn.edu | 200 | - | - | - | - | - | - | - |
| usgs.gov | 200 | 2 | - | 1 | 1 | - | - | 1 |
| usnews.com | - | - | - | - | - | - | - | - |
| video.google.com | 200 | 2 | 1 | 1 | - | - | - | - |
| wa.me | 200 | 2 | 2 | 2 | - | - | - | - |
| washington.edu | 200 | - | - | - | - | - | - | - |
| weebly.com | 200 | 20 | - | - | - | - | - | - |
| wikia.com | 200 | 4 | - | 4 | 4 | - | - | 4 |
| wiley.com | 405 | 1 | 1 | 1 | 1 | - | - | 1 |
| wired.com | 200 | 14 | 2 | 9 | 8 | 1 | - | 7 |
| youtube.com | 200 | 3 | 3 | 3 | 2 | - | - | 2 |
| zoom.us | 200 | 10 | 8 | 10 | - | - | - | - |




## SameSite Cookies

| URL | SameSite Cookies | Strict | Lax | None |
|----|----|----|----|----|
| bandcamp.com | 1 | - | - | 1 |
| elpais.com| 1 | - | - | 1 |
| enable-javascript.com| 1| - | 1 | - |
| etsy.com | 1 | - | - | 1 |
| files.wordpress.com | 3 | 1 | - | 2 |
| msn.com | 2 | - | - | 2 |
| netvibes.com | 2 | - | - | 2 |
| networkadvertising.org | 1 | - | - | 1 |
| nydailynews.com | 1 | - | - | 1 |
| pinterest.com | 2 | - | 1 | 1 |
| sedo.com| 3 | - | - | 3 |
| spotify.com | 2 | - | 2 | - |
| usgs.gov | 1 | - | - | 1 |
| wikia.com | 4 | - | - | 4 |
| wiley.com | 1 | - | - | 1 |
| wired.com | 8 | 1 | - | 7 |
| youtube.com | 2 | - | - | 2 |


# Summary

From the 100 URLs scraped, the minimum number of cookies a site had was 0. There were
a surprising number that did not create cookies at all, though I suppose for many of them they are not necessary for the type of content the site contains, for example the homepage of pcmag.com is mainly news in the tech industry, so you don't really need to be able to identify between different users for just said page. The maximum number of cookies was weebly.com at 20 cookies. The median cookie is "Set-Cookie: WMF-Last-Access-Global=24-Feb-2022;Path=/;Domain=.wikipedia.org;HttpOnly;secure;Expires=Mon, 28 Mar 2022 00:00:00 GMT"
and "Set-Cookie: WMF-Last-Access=24-Feb-2022;Path=/;HttpOnly;secure;Expires=Mon, 28 Mar 2022 00:00:00 GMT" from m.wikipedia.org, and were the 121st and 122nd cookies. Of the 243 cookies, 235 of them had the path set as the default "Path=/". None 
of them were set to anything other then that, so all of the cookies followed basic web security principles on that front.
The mean of the total amount of cookies is 243 cookies divided by 54 unique URLs being 4.352. There were several URLs that caused me issues, those being akamaized.net
ssl-images-amazon.com, twimg.com, usnews.com, and mega.nz. I was able to work around
mega.nz's hanging response using "curl -iLks https://mega.nz | head -10". The hanging
response that usnews.com could also be circumvented by setting the user-agent
to mimic a browser environment, and changing the accept-language argument, although 
I could not get it to work due to not having the correct libcurl version installed.
Two URLs, nhk.or.jp and leparisien.fr required prepending "www." to them in order 
to actually curl them and get a proper response. The URLs akamaized.net, ssl-images-amazon.com, and twimg.com 
all returned with an error 6, and could not resolve the host. I also 
tried loading these URLs in the Firefox browser and could not get them to load.


# Extra Credit - It's Turtles All the Way Down

The title of slide 48 in week 4 is a literary reference. Briefly describe this literary reference, both the origin and the meaning in the slides.

I had never heard this before, or at least it isn't coming to mind immediately, so I
had to search the meaning of this. It appears that the expression alludes to 
a belief in multiple mythologies of the World Turtle, the idea that the earth is flat, and 
supported on the back of a turtle. This saying suggests that beneath that turtle 
rests an even larger turtle, that is supporting said turtle, and so and and so on. 
It relates to the slide in question, as the slide mentions that until recently, 
browsers would only check for a frame against a top level window, so only one layer,
but not the layers below it, in essence only seeing the one turtle and calling it a
day, and not seeing everything else below it, for example embedding the target.com 
into attacker.com, that is embedded in target.com.

# References

1.) Assignment 3 README.md - https://github.com/phonedude/cs595-s22/blob/main/assignments/assignment-3.md

2.) Wikipedia - Turtles all the way down - https://en.wikipedia.org/wiki/Turtles_all_the_way_down