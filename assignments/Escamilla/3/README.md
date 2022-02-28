# Assignment 3
Emily Escamilla, 2022-02-28

For this assignment, I created a bash script (url\_curl.sh) and a Python program (curl\_parse.py) to report the cookie practices of the 100 sites assigned to me. The bash script runs a `curl` command for each site. I used the `-I` flag to use the HEAD method, the `-L` flag to follow redirects, the `-k` flag to accept invalid SSL certificates, and the `-s` flag to hide the progress information. I also set the max timeout as 120 seconds. Without a max timeout, [mega.nz](mega.nz) hung (as Josh Murphy mentioned in class). All of the HTTP responses are in the curl_output directory.

In the Python program, I iterated through the curl output files and used regular expressions to extract the status code and cookies. For each cookie, I extracted HttpOnly, Secure, SameSite, and Path. I outputted the values in the correct format for a Markdown table. The resulting table is shown below. [alicdn.com](alicdncom), [bp.blogspot.com](bp.blogspot.com), and [clickbank.net](clickbank.net) did not respond after 120 seconds. The other 97 sites responded, but 11 sites did not terminate with a 200 status code. 

The statistics on the number of cookies for the 97 sites that responded are as follows:

Min: 0

Max: 20

Mean: 2.484536082474227

Median: 1

| Site | Terminating Status Code | Cookies | HttpOnly | Secure | SameSite | Strict | Lax | None | Path | Path Not / |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| abcnews.go.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| alexa.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| alibaba.com | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| amazon.co.jp | 405 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| amazon.es | 405 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 |
| amzn.to | 503 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| apache.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| apnews.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| biblegateway.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| biglobe.ne.jp | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| billboard.com | 200 | 6 | 3 | 2 | 3 | 0 | 0 | 3 | 6 | 0 |
| bitly.com | 405 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| bloomberg.com | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| canva.com | 403 | 2 | 2 | 1 | 2 | 0 | 0 | 2 | 2 | 0 |
| change.org | 200 | 3 | 1 | 3 | 3 | 2 | 1 | 0 | 3 | 0 |
| chicagotribune.com | 200 | 6 | 0 | 1 | 1 | 0 | 0 | 1 | 4 | 0 |
| clarin.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cnbc.com | 503 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cnet.com | 200 | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| cnil.fr | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| code.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cointernet.com.co | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| cornell.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| creativecommons.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| deezer.com | 200 | 8 | 4 | 8 | 8 | 0 | 0 | 4 | 8 | 0 |
| discord.com | 200 | 2 | 2 | 2 | 2 | 0 | 2 | 0 | 2 | 0 |
| discord.gg | 200 | 2 | 2 | 2 | 2 | 0 | 2 | 0 | 2 | 0 |
| dropbox.com | 200 | 4 | 2 | 4 | 0 | 0 | 0 | 0 | 4 | 0 |
| dw.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| e-monsite.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| en.wikipedia.org | 200 | 8 | 6 | 8 | 0 | 0 | 0 | 0 | 8 | 0 |
| eonline.com | 200 | 4 | 0 | 4 | 4 | 0 | 0 | 0 | 4 | 0 |
| es.wikipedia.org | 200 | 8 | 6 | 8 | 0 | 0 | 0 | 0 | 8 | 0 |
| europa.eu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| eventbrite.com | 200 | 20 | 17 | 20 | 20 | 0 | 0 | 0 | 20 | 0 |
| express.co.uk | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| fandom.com | 200 | 4 | 0 | 4 | 4 | 0 | 0 | 0 | 4 | 0 |
| finance.yahoo.com | 404 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| ftc.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| github.com | 200 | 3 | 2 | 3 | 3 | 0 | 3 | 0 | 3 | 0 |
| google.co.id | 200 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| google.co.jp | 200 | 2 | 1 | 1 | 0 | 0 | 0 | 0 | 2 | 0 |
| gooyaabitemplates.com | 406 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| hm.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| huawei.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| interia.pl | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| issuu.com | 200 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| jhu.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| linktr.ee | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| maps.google.com | 200 | 4 | 2 | 2 | 0 | 0 | 0 | 0 | 4 | 0 |
| mega.nz | 301 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| mit.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nationalgeographic.com | 200 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| naver.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| netvibes.com | 200 | 2 | 0 | 2 | 2 | 0 | 0 | 2 | 2 | 0 |
| news.yahoo.com | 404 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| nginx.com | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nicovideo.jp | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| nifty.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| nih.gov | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| opera.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| oup.com | 200 | 6 | 2 | 0 | 2 | 0 | 0 | 2 | 4 | 0 |
| outlook.com | 440 | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| paypal.com | 200 | 8 | 6 | 8 | 0 | 0 | 0 | 0 | 8 | 0 |
| pexels.com | 403 | 2 | 2 | 1 | 2 | 0 | 0 | 2 | 2 | 0 |
| plesk.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| plos.org | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| policies.google.com | 200 | 2 | 2 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| privacyshield.gov | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 0 |
| psychologytoday.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| rambler.ru | 200 | 3 | 0 | 1 | 1 | 0 | 0 | 1 | 3 | 0 |
| ru.wikipedia.org | 200 | 8 | 6 | 8 | 0 | 0 | 0 | 0 | 8 | 0 |
| samsung.com | 200 | 7 | 0 | 1 | 1 | 0 | 0 | 1 | 5 | 0 |
| sendspace.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| springer.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 2 | 0 |
| steampowered.com | 200 | 3 | 1 | 3 | 3 | 0 | 0 | 3 | 3 | 0 |
| stores.jp | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| techcrunch.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| terra.com.br | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| theverge.com | 200 | 5 | 0 | 3 | 3 | 0 | 0 | 0 | 5 | 0 |
| tools.google.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| trustpilot.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| twitter.com | 200 | 4 | 0 | 4 | 4 | 0 | 0 | 4 | 4 | 0 |
| unesco.org | 200 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| upenn.edu | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| weather.com | 200 | 4 | 0 | 4 | 0 | 0 | 0 | 0 | 4 | 0 |
| webmd.com | 200 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| wikihow.com | 200 | 3 | 0 | 3 | 0 | 0 | 0 | 0 | 3 | 0 |
| wikimedia.org | 200 | 7 | 5 | 7 | 0 | 0 | 0 | 0 | 7 | 0 |
| wiley.com | 405 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| wn.com | 200 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| www.over-blog.com | 200 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| www.weebly.com | 200 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 0 |
| xbox.com | 200 | 4 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| yandex.ru | 200 | 11 | 1 | 4 | 0 | 0 | 0 | 0 | 8 | 0 |
| youtu.be | 200 | 5 | 5 | 5 | 3 | 0 | 0 | 3 | 5 | 0 |
| youtube.com | 200 | 3 | 3 | 3 | 2 | 0 | 0 | 2 | 3 | 0 |