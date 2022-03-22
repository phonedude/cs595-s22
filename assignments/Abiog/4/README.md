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

|Site|Framable|Reason|
|----|--------|------|
|abcnews.go.com|No||
|about.com|No||
|adobe.com|No||
|aol.com|No||
|archives.gov|No||
|as.com|Yes||
|bandcamp.com|No||
|biblegateway.com|Yes||
|bloglovin.com|No||
|booking.com|No||
|businesswire.com|No||
|cambridge.org|No||
|canada.ca|No||
|cdc.gov|Yes||
|dailymail.co.uk|Yes||
|dailymotion.com|No||
|developers.google.com|No||
|discord.com|No||
|doubleclick.net|No||
|dropbox.com|No||
|ebay.co.uk|No||
|economist.com|Yes||
|elpais.com|Yes||
|enable-javascript.com|No||
|europa.eu|No||
|example.com|No||
|fifa.com|Yes||
|files.wordpress.com|No||
|flickr.com|No||
|forms.gle|No||
|gmail.com|No||
|godaddy.com|No||
|gofundme.com|No||
|google.co.in|No||
|google.com.br|No||
|google.it|No||
|google.pl|No||
|googleblog.com|No||
|groups.google.com|No||
|imdb.com|No||
|imgur.com|No||
|istockphoto.com|No||
|lefigaro.fr|Yes||
|lg.com|No||
|liberation.fr|Yes||
|line.me|No||
|linktr.ee|No||
|list-manage.com|No||
|liveinternet.ru|Yes||
|mail.google.com|No||
|medium.com|No||
|metro.co.uk|Yes||
|mixcloud.com|No||
|msn.com|No||
|namesilo.com|No||
|nasa.gov|No||
|nationalgeographic.com|Yes||
|netflix.com|No||
|netlify.app|No||
|netvibes.com|No||
|news.google.com|No||
|newsweek.com|No||
|nicovideo.jp|No||
|nifty.com|No||
|opera.com|No||
|oracle.com|No||
|oreilly.com|Yes||
|over-blog-kiwi.com|No||
|people.com|Yes||
|play.google.com|No||
|playstation.com|No||
|plos.org|No||
|plus.google.com|No||
|pnas.org|No||
|politico.com|No||
|qq.com|No||
|repubblica.it|Yes||
|reuters.com|Yes||
|samsung.com|No||
|smh.com.au|No||
|spiegel.de|Yes||
|stackoverflow.com|No||
|state.gov|No||
|techradar.com|Yes||
|ted.com|No||
|thenai.org|Yes||
|timeweb.ru|No||
|translate.google.com|No||
|un.org|No||
|whitehouse.gov|No||
|who.int|No||
|wikia.com|Yes||
|wordpress.org|No||
|xbox.com|No||
|yadi.sk|No||
|yahoo.co.jp|No||
|youtu.be|No||

### Second method: Manual iframe success check
Checking for iframe success manually was done by running a node.js server and visiting each HTML page.

Results:
* Suceeded: 
* Failed: 
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
