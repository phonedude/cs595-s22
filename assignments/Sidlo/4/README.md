## cs595-s22 Assignment 4

### Frameable Sites

For this portion of the assignment, we needed to determine which of our sites, if any, were frameable. To do this, I created a script that would create a webpage that would attempt to frame each site and added them to the html directory. The code used for this was based on the code provided by Michael Nelson, added into a script that would replace the link that is attempting to be framed. The script worked perfectly and the html directory filled up with 100 webpages that could then be checked for working frames. After this, I needed to check each of the pages to verify whether the site was being framed or not. The designated script for this was supposed to run a headless chrome browser to run the page and then copy the contents of the dom into another file for later reading. Unfortunately, on my machine, chrome would not run properly and I was unable to find a replacement or fix the issue that chrome was having. Thus, I had to manually check the 100 pages to determine whether the framing worked or not. After later troubleshooting, this has been resolved and the results are available to be found via more than just manually counting. Included below, in the table, are my results.

|Site|Frameable?|Defeated Attempt by...?|
|----|----------|-----------------------|
|abcnews.go.com|yes||
|about.com|no|SAMEORIGIN|
|alexa.com|no|SAMEORIGIN
|alibaba.com|yes||
|alicdn.com|no|Timeout|
|amazon.ca|no|SAMEORIGIN|
|amazon.co.uk|no|SAMEORIGIN|
|amazon.com|no|SAMEORIGIN|
|amazon.es|no|SAMEORIGIN|
|amazon.it|no|SAMEORIGIN|
|aol.com|no|SAMEORIGIN|
|biblegateway.com|yes||
|bitly.com|no||
|bloomberg.com|no||
|books.google.com|no|SAMEORIGIN|
|box.com|no|SAMEORIGIN|
|bp.blogspot.com|no|404|
|bp3.blogger.com|no|400|
|cbsnews.com|yes||
|cdc.gov|yes||
|cnbc.com|no|503|
|creativecommons.org|no|DENY|
|debian.org|no|SAMEORIGIN|
|discord.gg|no|DENY|
|doubleclick.net|yes||
|eonline.com|no|SAMEORIGIN|
|espn.com|no|content-security-policy: frame-ancestors 'self'|
|feedburner.com|no|DENY|
|foxnews.com|yes||
|freepik.com|yes||
|gizmodo.com|no|content-security-policy: frame-ancestors 'self'|
|gmail.com|no|DENY|
|gofundme.com|no|SAMEORIGIN|
|goodreads.com|no|SAMEORIGIN|
|google.co.id|no|SAMEORIGIN|
|googleusercontent.com|no|404|
|gooyaabitemplates.com|yes||
|groups.yahoo.com|no|SAMEORIGIN|
|guardian.co.uk|no|SAMEORIGIN|
|harvard.edu|no|SAMEORIGIN|
|hollywoodreporter.com|no|DENY|
|ibm.com|yes||
|id.wikipedia.org|yes||
|ign.com|yes||
|ikea.com|no|SAMEORIGIN|
|indiatimes.com|yes||
|instagram.com|no|SAMEORIGIN|
|iso.org|yes||
|issuu.com|no|SAMEORIGIN|
|it.wikipedia.org|yes||
|kompas.com|no|SAMEORIGIN|
|linkedin.com|no|SAMEORIGIN|
|list-manage.com|no|SAMEORIGIN|
|lycos.com|no|content-security-policy: frame-ancestors 'self'|
|mayoclinic.org|no|SAMEORIGIN|
|mit.edu|no|content-security-policy: frame-ancestors 'self'|
|mozilla.org|no|DENY|
|myaccount.google.com|no|SAMEORIGIN|
|namesilo.com|no|SAMEORIGIN|
|nbcnews.com|no|SAMEORIGIN|
|netlify.app|no|SAMEORIGIN|
|news.google.com|no|SAMEORIGIN|
|newsweek.com|no|SAMEORIGIN|
|nifty.com|no|DENY|
|nvidia.com|no|content-security-policy: frame-ancestors 'self'|
|nypost.com|no|content-security-policy: frame-ancestors nypost.com|
|nytimes.com|no|DENY|
|ok.ru|no|content-security-policy: default-src data: 'self'|
|opera.com|no|SAMEORIGIN|
|pcmag.com|yes||
|playstation.com|no|SAMEORIGIN|
|princeton.edu|no|SAMEORIGIN|
|rapidshare.com|no|404|
|sakura.ne.jp|no|SAMEORIGIN|
|sciencedaily.com|no|DENY|
|search.google.com|no|SAMEORIGIN|
|soundcloud.com|no|SAMEORIGIN|
|stores.jp|no|SAMEORIGIN|
|surveymonkey.com|no|content-security-policy: default-src|
|techradar.com|yes||
|telegraph.co.uk|no|SAMEORIGIN|
|theguardian.com|no|SAMEORIGIN|
|thenextweb.com|no|SAMEORIGIN|
|thetimes.co.uk|no|SAMEORIGIN|
|thoughtco.com|no|content-security-policy: frame-ancestors 'self'|
|tiktok.com|no|SAMEORIGIN|
|tinyurl.com|no|SAMEORIGIN|
|twimg.com|no|404|
|twitch.tv|no|SAMEORIGIN|
|un.org|yes||
|wa.me|no|DENY|
|weibo.com|yes||
|wsj.com|yes||
|www.blogger.com|no|SAMEORIGIN|
|www.google.com|no|SAMEORIGIN|
|www.gov.br|no|403|
|yadi.sk|no|SAMEORIGIN|
|yandex.ru|no|DENY|
|yelp.com|yes||
|youtu.be|no|SAMEORIGIN|

Related YouTube video: [https://youtu.be/VGJM9TA0BOs](https://youtu.be/VGJM9TA0BOs)

### Frame Path Attack

For this portion of the assignment, I needed to create a site that set a cookie with only a path attribute that would then be stolen by another site when displayed in a frame. To do this, I created an innocent home page that would have a cookie set with the path attribute and an attacking site that contained the innocent site within an iframe, and displayed the cookie of the innocent site within the page.

Related YouTube video: [https://youtu.be/4dsfcSuk_rc](https://youtu.be/4dsfcSuk_rc)

### Extra Credit - Literary Reference

In the week 5 lecture, slide 64's title is "Parsers, Parsers, everywhere" which is a reference to The Rime of the Ancient Mariner by Samuel Taylor Coleridge. In The Rime of the Ancient Mariner, Coleridge writes "Water, water, everywhere". Additionally, this same line has made it's way into memes, in the same form of x, x, everywhere and being applied to any number of things that are being seen at that time (can refer to public events, events in a specific culture or specific group of people).
