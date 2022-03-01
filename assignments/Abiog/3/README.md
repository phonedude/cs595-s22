## Assignment 3, CS 495/595 Web Security, Spring 2022
This assignment shows a report displaying cookie practices for 100 of the Mozilla top 500 web sites.
### Specifications:
* [GetHttpResponse.sh](GetHttpResponse.sh) was used to get each url's http response.
* [GetTableData.sh](GetTableData.sh) was used to get status code and cookie info from each url.
* [readmegen.js](readmegen.js) was used to generate the README file with the table.
* 3 urls gave no response:
  * alicdn.com
  * ggpht.com
  * googleusercontent.com

|Site|Status Code|Cookies|HttpOnly|Secure|SameSite|Strict|Lax|None|Path=/|Path=/[other]|
|----|-----------|-------|--------|------|--------|------|---|----|------|-------------|
|abcnews.go.com|200|2|0|0|0|0|0|0|2|0|
|about.com|200|0|0|0|0|0|0|0|0|0|
|adobe.com|200|0|0|0|0|0|0|0|0|0|
|aol.com|404|0|0|1|0|0|0|0|0|0|
|archives.gov|200|0|0|0|0|0|0|0|0|0|
|as.com|200|4|0|0|0|0|0|0|4|0|
|bandcamp.com|200|6|1|3|1|0|0|1|6|0|
|biblegateway.com|200|0|0|0|0|0|0|0|0|0|
|bloglovin.com|405|2|2|0|0|0|0|0|2|0|
|booking.com|200|3|1|1|1|0|0|1|3|0|
|businesswire.com|200|0|0|0|0|0|0|0|0|0|
|cambridge.org|200|0|0|0|0|0|0|0|0|0|
|canada.ca|200|3|0|3|0|0|0|0|3|0|
|cdc.gov|200|2|1|1|0|0|0|0|2|0|
|dailymail.co.uk|200|0|0|0|0|0|0|0|0|0|
|dailymotion.com|200|2|0|3|2|0|0|2|2|0|
|developers.google.com|200|1|0|0|0|0|0|0|1|0|
|discord.com|200|2|2|2|2|0|2|0|2|0|
|doubleclick.net|200|0|0|0|0|0|0|0|0|0|
|dropbox.com|200|4|2|4|0|0|0|0|4|0|
|ebay.co.uk|301|0|0|0|0|0|0|0|0|0|
|economist.com|200|7|2|1|2|0|0|2|7|0|
|elpais.com|200|8|0|1|1|0|0|1|8|0|
|enable-javascript.com|200|1|1|0|1|0|1|0|1|0|
|europa.eu|200|0|0|0|0|0|0|0|0|0|
|example.com|200|0|0|0|0|0|0|0|0|0|
|fifa.com|200|0|0|0|0|0|0|0|0|0|
|files.wordpress.com|200|3|0|3|3|1|0|2|3|0|
|flickr.com|200|2|0|0|0|0|0|0|2|0|
|forms.gle|400|0|0|0|0|0|0|0|0|0|
|gmail.com|200|1|1|1|0|0|0|0|1|0|
|godaddy.com|403|3|0|1|1|0|0|1|3|0|
|gofundme.com|200|9|0|0|0|0|0|0|9|0|
|google.co.in|200|2|1|1|0|0|0|0|2|0|
|google.com.br|200|2|1|1|0|0|0|0|2|0|
|google.it|200|2|1|1|0|0|0|0|2|0|
|google.pl|200|2|1|1|0|0|0|0|2|0|
|googleblog.com|200|0|0|0|0|0|0|0|0|0|
|groups.google.com|200|4|4|1|0|0|0|0|4|0|
|imdb.com|200|1|1|0|0|0|0|0|1|0|
|imgur.com|200|1|0|1|0|0|0|0|1|0|
|istockphoto.com|200|6|4|5|0|0|0|0|6|0|
|lefigaro.fr|200|0|0|1|0|0|0|0|0|0|
|lg.com|200|0|0|0|0|0|0|0|0|0|
|liberation.fr|200|1|0|2|1|0|0|1|1|0|
|line.me|200|1|0|0|0|0|0|0|1|0|
|linktr.ee|200|0|0|0|0|0|0|0|0|0|
|list-manage.com|200|3|0|2|2|0|0|2|3|0|
|liveinternet.ru|200|0|0|0|0|0|0|0|0|0|
|mail.google.com|200|1|1|1|0|0|0|0|1|0|
|medium.com|200|5|5|4|4|0|0|4|5|0|
|metro.co.uk|200|0|0|0|0|0|0|0|0|0|
|mixcloud.com|200|4|0|1|1|0|1|0|4|0|
|msn.com|200|6|5|2|2|0|0|2|6|0|
|namesilo.com|503|2|2|1|2|0|0|2|2|0|
|nasa.gov|200|0|0|0|0|0|0|0|0|0|
|nationalgeographic.com|200|3|0|0|0|0|0|0|3|0|
|netflix.com|405|4|0|0|0|0|0|0|4|0|
|netlify.app|200|0|0|0|0|0|0|0|0|0|
|netvibes.com|200|2|0|2|2|0|0|2|2|0|
|news.google.com|200|5|3|2|0|0|0|0|5|0|
|newsweek.com|403|0|0|0|0|0|0|0|0|0|
|nicovideo.jp|200|1|0|0|0|0|0|0|1|0|
|nifty.com|200|0|0|0|0|0|0|0|0|0|
|opera.com|200|0|0|1|0|0|0|0|0|0|
|oracle.com|200|1|0|1|1|0|0|1|1|0|
|oreilly.com|200|2|2|1|1|0|0|1|2|0|
|over-blog-kiwi.com|200|0|0|0|0|0|0|0|0|0|
|people.com|200|0|0|0|0|0|0|0|0|0|
|play.google.com|200|3|3|0|0|0|0|0|3|0|
|playstation.com|200|0|0|0|0|0|0|0|0|0|
|plos.org|200|0|0|0|0|0|0|0|0|0|
|plus.google.com|200|3|3|1|0|0|0|0|3|0|
|pnas.org|200|22|22|21|12|0|0|12|22|0|
|politico.com|200|2|2|2|2|0|0|2|2|0|
|qq.com|200|0|0|0|0|0|0|0|0|0|
|repubblica.it|200|0|0|1|0|0|0|0|0|0|
|reuters.com|200|1|0|1|0|0|0|0|1|0|
|samsung.com|200|7|0|1|1|0|0|1|6|0|
|smh.com.au|200|0|0|1|0|0|0|0|0|0|
|spiegel.de|200|0|0|0|0|0|0|0|0|0|
|stackoverflow.com|200|2|2|2|0|0|0|0|2|0|
|state.gov|200|0|0|0|0|0|0|0|0|0|
|techradar.com|200|4|0|0|0|0|0|0|4|0|
|ted.com|200|6|0|0|0|0|0|0|6|0|
|thenai.org|200|0|0|0|0|0|0|0|0|0|
|timeweb.ru|200|5|1|5|5|0|5|0|5|0|
|translate.google.com|200|2|2|0|0|0|0|0|2|0|
|un.org|200|0|0|0|0|0|0|0|0|0|
|whitehouse.gov|200|0|0|0|0|0|0|0|0|0|
|who.int|200|2|2|1|1|0|0|1|2|0|
|wikia.com|200|4|0|5|4|0|0|4|4|0|
|wordpress.org|200|0|0|0|0|0|0|0|0|0|
|xbox.com|200|4|0|0|0|0|0|0|1|0|
|yadi.sk|200|1|0|0|0|0|0|0|2|0|
|yahoo.co.jp|200|0|0|0|0|0|0|0|0|0|
|youtu.be|200|5|5|5|3|0|0|3|5|0|

* Cookie count Min: 0
* Cookie count Max: 22
* Cookie count Mean: 2.051546391752577
* Cookie count Median: 1
### Extra Credit
The title of the slide 'It's turtles all the way down...' is from the mythological belief that the world is resting on top of a giant turtle. It was first believed to be used in an 1854 transcript of remarks by preacher Joseph Frederick Berg according to Wikipedia and it was used in the context of wondering if the giant turtle is standing on another turtle and so on hence the saying 'It's turtles all the way down'. The specific slide from the lecture was talking about having a framing chain where a website embeds a website embedding that website so in a way it is the same idea.