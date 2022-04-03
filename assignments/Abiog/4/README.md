## Assignment 4, CS 495/595 Web Security, Spring 2022
This assignment demonstrates how many sites from the the previous assignment's 100 sites are framable. In order to test each site, individual html pages were generated using [GenerateHTML.sh](framable/GenerateHTML.sh).

* 2 different methods were used to acquire the information about iframe success:
    * Automated iframe success check
    * Manual iframe success check

The results are documented and compared below.
#  
### First method: Automated iframe success check
The method used for automatically checking for iframe success was implemented using headless chrome and checking the length of the iframe (provided by Professor Nelson) and was done using the following steps:
* Using [GenerateHTML.sh](framable/GenerateHTML.sh), an html file was generated for each url in [urls.txt](framable/urls.txt) with a script included to check for iframe success.
* Using [CheckFramable.sh](framable/CheckFramable.sh), headless chrome was used to run each html file.
* Using [CountFramable.sh](framable/CountFramable.sh) and [CountTotalFramable.sh](framable/CountTotalFramable.sh), grep commands were used to count the results from the previous step.

**Results:**
* Succeeded: 21
* Failed: 76
* Total: 97 (3 no response)

|Site|Framable|Reason|
|----|--------|------|
|abcnews.go.com|Yes||
|about.com|No|x-frame-options: SAMEORIGIN|
|adobe.com|No|x-frame-options: SAMEORIGIN|
|aol.com|No|x-frame-options: SAMEORIGIN|
|archives.gov|No|x-frame-options: SAMEORIGIN|
|as.com|Yes||
|bandcamp.com|No|iframe success when manually checked|
|biblegateway.com|Yes||
|bloglovin.com|No|iframe success when manually checked|
|booking.com|No|iframe success when manually checked|
|businesswire.com|No|Content-Security-Policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|cambridge.org|No|x-frame-options: SAMEORIGIN|
|canada.ca|No|x-frame-options: SAMEORIGIN|
|cdc.gov|Yes||
|dailymail.co.uk|Yes||
|dailymotion.com|No|x-frame-options: deny|
|developers.google.com|No|x-frame-options: SAMEORIGIN|
|discord.com|No|x-frame-options: DENY|
|doubleclick.net|No|iframe success when manually checked|
|dropbox.com|No|x-frame-options: DENY|
|ebay.co.uk|No|x-frame-options: SAMEORIGIN|
|economist.com|Yes||
|elpais.com|Yes||
|enable-javascript.com|No|iframe success when manually checked|
|europa.eu|No|x-frame-options: SAMEORIGIN|
|example.com|No|iframe success when manually checked|
|fifa.com|Yes||
|files.wordpress.com|No|x-frame-options: SAMEORIGIN|
|flickr.com|No|x-frame-options: SAMEORIGIN|
|forms.gle|No|x-frame-options: SAMEORIGIN|
|gmail.com|No|iframe success when manually checked|
|godaddy.com|No|x-frame-options: DENY|
|gofundme.com|No|Content-Security-Policy: frame-ancestors gofundme.com, x-frame-options: SAMEORIGIN|
|google.co.in|No|x-frame-options: SAMEORIGIN|
|google.com.br|No|x-frame-options: SAMEORIGIN|
|google.it|No|x-frame-options: SAMEORIGIN|
|google.pl|No|x-frame-options: SAMEORIGIN|
|googleblog.com|No|iframe success when manually checked|
|groups.google.com|No|iframe success when manually checked|
|imdb.com|No|x-frame-options: SAMEORIGIN|
|imgur.com|No|x-frame-options: DENY|
|istockphoto.com|No|x-frame-options: SAMEORIGIN|
|lefigaro.fr|Yes||
|lg.com|No|Content-Security-Policy: frame-ancestors 'self' www.lgechat.com lgechat.com|
|liberation.fr|Yes||
|line.me|No|iframe success when manually checked|
|linktr.ee|No|x-frame-options: DENY|
|list-manage.com|No|x-frame-options: SAMEORIGIN|
|liveinternet.ru|Yes||
|mail.google.com|No|iframe success when manually checked|
|medium.com|No|ontent-security-policy: frame-ancestors 'self' https://medium.com|
|metro.co.uk|Yes||
|mixcloud.com|No|x-frame-options: SAMEORIGIN|
|msn.com|No|x-frame-options: SAMEORIGIN|
|namesilo.com|No|content-security-policy: frame-ancestors www.namesilo.com, x-frame-options: SAMEORIGIN|
|nasa.gov|No|content-security-policy: frame-ancestors 'self' https://*.nasa.gov|
|nationalgeographic.com|Yes||
|netflix.com|No|x-frame-options: DENY|
|netlify.app|No|content-security-policy: frame-ancestors 'self' https://app.experiencewelcome.com/ https://iframetester.com/, x-frame-options: SAMEORIGIN|
|netvibes.com|No|x-frame-options: deny|
|news.google.com|No|x-frame-options: SAMEORIGIN|
|newsweek.com|No|x-frame-options: SAMEORIGIN|
|nicovideo.jp|No|Content-Security-Policy: frame-ancestors 'none', x-frame-options: SAMEORIGIN|
|nifty.com|No|x-frame-options: DENY|
|opera.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|oracle.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: sameorigin|
|oreilly.com|Yes||
|over-blog-kiwi.com|No|x-frame-options: DENY|
|people.com|Yes||
|play.google.com|No|x-frame-options: SAMEORIGIN|
|playstation.com|No|x-frame-options: SAMEORIGIN|
|plos.org|No|iframe success when manually checked|
|plus.google.com|No|x-frame-options: SAMEORIGIN|
|pnas.org|No|x-frame-options: SAMEORIGIN|
|politico.com|No|x-frame-options: SAMEORIGIN|
|qq.com|No|content-security-policy: frame-ancestors https://*.qq.com, x-frame-options: SAMEORIGIN|
|repubblica.it|Yes||
|reuters.com|Yes||
|samsung.com|No|x-frame-options: SAMEORIGIN|
|smh.com.au|No|content-security-policy: frame-ancestors 'self', x-frame-options: sameorigin|
|spiegel.de|Yes||
|stackoverflow.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|state.gov|No|x-frame-options: SAMEORIGIN|
|techradar.com|Yes||
|ted.com|No|x-frame-options: SAMEORIGIN|
|thenai.org|Yes||
|timeweb.ru|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|translate.google.com|No|x-frame-options: SAMEORIGIN|
|un.org|No|iframe success when manually checked|
|whitehouse.gov|No|x-frame-options: DENY|
|who.int|No|x-frame-options: SAMEORIGIN|
|wikia.com|Yes||
|wordpress.org|No|x-frame-options: SAMEORIGIN|
|xbox.com|No|x-frame-options: DENY|
|yadi.sk|No|x-frame-options: SAMEORIGIN|
|yahoo.co.jp|No|x-frame-options: SAMEORIGIN|
|youtu.be|No|x-frame-options: SAMEORIGIN|

#  
### Second method: Manual iframe success check
Checking for iframe success manually was done by running a node.js server and visiting each HTML page.

**Results:**
* Succeeded: 34
* Failed: 63
* Total: 97 (3 no response)

|Site|Framable|Reason|
|----|--------|------|
|abcnews.go.com|Yes||
|about.com|No|x-frame-options: SAMEORIGIN|
|adobe.com|No|x-frame-options: SAMEORIGIN|
|aol.com|No|x-frame-options: SAMEORIGIN|
|archives.gov|No|x-frame-options: SAMEORIGIN|
|as.com|Yes||
|bandcamp.com|Yes||
|biblegateway.com|Yes||
|bloglovin.com|Yes||
|booking.com|Yes||
|businesswire.com|No|Content-Security-Policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|cambridge.org|No|x-frame-options: SAMEORIGIN|
|canada.ca|No|x-frame-options: SAMEORIGIN|
|cdc.gov|Yes||
|dailymail.co.uk|Yes||
|dailymotion.com|No|x-frame-options: deny|
|developers.google.com|No|x-frame-options: SAMEORIGIN|
|discord.com|No|x-frame-options: DENY|
|doubleclick.net|Yes||
|dropbox.com|No|x-frame-options: DENY|
|ebay.co.uk|No|x-frame-options: SAMEORIGIN|
|economist.com|Yes||
|elpais.com|Yes||
|enable-javascript.com|Yes||
|europa.eu|No|x-frame-options: SAMEORIGIN|
|example.com|Yes||
|fifa.com|Yes||
|files.wordpress.com|No|x-frame-options: SAMEORIGIN|
|flickr.com|No|x-frame-options: SAMEORIGIN|
|forms.gle|No|x-frame-options: SAMEORIGIN|
|gmail.com|Yes||
|godaddy.com|No|x-frame-options: DENY|
|gofundme.com|No|Content-Security-Policy: frame-ancestors gofundme.com, x-frame-options: SAMEORIGIN|
|google.co.in|No|x-frame-options: SAMEORIGIN|
|google.com.br|No|x-frame-options: SAMEORIGIN|
|google.it|No|x-frame-options: SAMEORIGIN|
|google.pl|No|x-frame-options: SAMEORIGIN|
|googleblog.com|Yes||
|groups.google.com|Yes||
|imdb.com|No|x-frame-options: SAMEORIGIN|
|imgur.com|No|x-frame-options: DENY|
|istockphoto.com|No|x-frame-options: SAMEORIGIN|
|lefigaro.fr|Yes||
|lg.com|No|Content-Security-Policy: frame-ancestors 'self' www.lgechat.com lgechat.com|
|liberation.fr|Yes||
|line.me|Yes||
|linktr.ee|No|x-frame-options: DENY|
|list-manage.com|No|x-frame-options: SAMEORIGIN|
|liveinternet.ru|Yes||
|mail.google.com|Yes||
|medium.com|No|content-security-policy: frame-ancestors 'self' https://medium.com|
|metro.co.uk|Yes||
|mixcloud.com|No|x-frame-options: SAMEORIGIN|
|msn.com|No|x-frame-options: SAMEORIGIN|
|namesilo.com|No|content-security-policy: frame-ancestors www.namesilo.com, x-frame-options: SAMEORIGIN|
|nasa.gov|No|content-security-policy: frame-ancestors 'self' https://*.nasa.gov|
|nationalgeographic.com|Yes||
|netflix.com|No|x-frame-options: DENY|
|netlify.app|No|content-security-policy: frame-ancestors 'self' https://app.experiencewelcome.com/ https://iframetester.com/, x-frame-options: SAMEORIGIN|
|netvibes.com|No|x-frame-options: deny|
|news.google.com|No|x-frame-options: SAMEORIGIN|
|newsweek.com|No|x-frame-options: SAMEORIGIN|
|nicovideo.jp|No|Content-Security-Policy: frame-ancestors 'none', x-frame-options: SAMEORIGIN|
|nifty.com|No|x-frame-options: DENY|
|opera.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|oracle.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: sameorigin|
|oreilly.com|Yes||
|over-blog-kiwi.com|No|x-frame-options: DENY|
|people.com|Yes||
|play.google.com|No|x-frame-options: SAMEORIGIN|
|playstation.com|No|x-frame-options: SAMEORIGIN|
|plos.org|Yes||
|plus.google.com|No|x-frame-options: SAMEORIGIN|
|pnas.org|No|x-frame-options: SAMEORIGIN|
|politico.com|No|x-frame-options: SAMEORIGIN|
|qq.com|No|content-security-policy: frame-ancestors https://*.qq.com, x-frame-options: SAMEORIGIN|
|repubblica.it|Yes||
|reuters.com|Yes||
|samsung.com|No|x-frame-options: SAMEORIGIN|
|smh.com.au|No|content-security-policy: frame-ancestors 'self', x-frame-options: sameorigin|
|spiegel.de|Yes||
|stackoverflow.com|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|state.gov|No|x-frame-options: SAMEORIGIN|
|techradar.com|Yes||
|ted.com|No|x-frame-options: SAMEORIGIN|
|thenai.org|Yes||
|timeweb.ru|No|content-security-policy: frame-ancestors 'self', x-frame-options: SAMEORIGIN|
|translate.google.com|No|x-frame-options: SAMEORIGIN|
|un.org|Yes||
|whitehouse.gov|No|x-frame-options: DENY|
|who.int|No|x-frame-options: SAMEORIGIN|
|wikia.com|Yes||
|wordpress.org|No|x-frame-options: SAMEORIGIN|
|xbox.com|No|x-frame-options: DENY|
|yadi.sk|No|x-frame-options: SAMEORIGIN|
|yahoo.co.jp|No|x-frame-options: SAMEORIGIN|
|youtu.be|No|x-frame-options: SAMEORIGIN|

### Overall results:
||Automated|Manual|
|---|------|------|
|Succeeded|21|34|
|Failed|76|63|

Video demonstration available here: [https://youtu.be/648Ii3W3ugc](https://youtu.be/648Ii3W3ugc)


## Frame Path attack
This part of the assignment shows how the Path attribute for Cookies is not suitable for security. This is demonstrated by creating two html pages:
* [myLogin.html](frame-path-attack/myPath/myLogin.html) is the page we're stealing the cookie from. It has its cookie path attribute set to `path=/myPath/;`
* [cookieStealer.html](frame-path-attack/cookieStealer.html) is the parent page stealing the cookie from the iframed [myLogin.html](frame-path-attack/myPath/myLogin.html)

Video demonstration available here: [https://youtu.be/en_tVjNePSY](https://youtu.be/en_tVjNePSY)

## Extra Credit
The title from Week 5's lecture, slide 64, is "Parsers, parsers, everywhere". This is referencing a popular phrasal template "X, X Everywhere" used in a lot of pop culture references. Most people would recognize the phrase as it is used in a popular meme starring Toy Story 2 characters:

<img src="memes.jpg">

However, in literature, the phrase's origins aren't certain but the earliest known imprint of it is found in part two of *The Rime of the Ancient Mariner*, written by Engish poet Samuel Taylor Coleridge and first published in 1798:

>Water, water, everywhere,  
>And all the boards did shrink;  
>Water, water, everywhere,  
>Nor any drop to drink  