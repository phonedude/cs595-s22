## cs595-s22 Assignment 4

### Frameable Sites

For this portion of the assignment, we needed to determine which of our sites, if any, were frameable. To do this, I created a script that would create a webpage that would attempt to frame each site and added them to the html directory. The code used for this was based on the code provided by Michael Nelson, added into a script that would replace the link that is attempting to be framed. The script worked perfectly and the html directory filled up with 100 webpages that could then be checked for working frames. After this, I needed to check each of the pages to verify whether the site was being framed or not. The designated script for this was supposed to run a headless chrome browser to run the page and then copy the contents of the dom into another file for later reading. Unfortunately, on my machine, chrome would not run properly and I was unable to find a replacement or fix the issue that chrome was having. Thus, I had to manually check the 100 pages to determine whether the framing worked or not. Included below, in the table, are my results.

|Site|Frameable?|
|----|----------|
|abcnews.go.com|yes|
|about.com|no|
|alexa.com|no|
|alibaba.com|yes|
|alicdn.com|no|
|amazon.ca|no|
|amazon.co.uk|no|
|amazon.com|no|
|amazon.es|no|
|amazon.it|no|
|aol.com|no|
|biblegateway.com|yes|
|bitly.com|no|
|bloomberg.com|no|
|books.google.com|no|
|box.com|no|
|bp.blogspot.com|no|
|bp3.blogger.com|no|
|cbsnews.com|yes|
|cdc.gov|yes|
|cnbc.com|no|
|creativecommons.org|no|
|debian.org|no|
|discord.gg|no|
|doubleclick.net|yes|
|eonline.com|no|
|espn.com|no|
|feedburner.com|no|
|foxnews.com|yes|
|freepik.com|yes|
|gizmodo.com|no|
|gmail.com|no|
|gofundme.com|no|
|goodreads.com|no|
|google.co.id|no|
|googleusercontent.com|no|
|gooyaabitemplates.com|yes|
|groups.yahoo.com|no|
|guardian.co.uk|no|
|harvard.edu|no|
|hollywoodreporter.com|no|
|ibm.com|yes|
|id.wikipedia.org|yes|
|ign.com|yes|
|ikea.com|no|
|indiatimes.com|yes|
|instagram.com|no|
|iso.org|yes|
|issuu.com|no|
|it.wikipedia.org|yes|
|kompas.com|no|
|linkedin.com|no|
|list-manage.com|no|
|lycos.com|no|
|mayoclinic.org|no|
|mit.edu|no|
|mozilla.org|no|
|myaccount.google.com|no|
|namesilo.com|no|
|nbcnews.com|no|
|netlify.app|no|
|news.google.com|no|
|newsweek.com|no|
|nifty.com|no|
|nvidia.com|no|
|nypost.com|no|
|nytimes.com|no|
|ok.ru|no|
|opera.com|no|
|pcmag.com|yes|
|playstation.com|no|
|princeton.edu|no|
|rapidshare.com|no|
|sakura.ne.jp|no|
|sciencedaily.com|no|
|search.google.com|no|
|soundcloud.com|no|
|stores.jp|no|
|surveymonkey.com|no|
|techradar.com|yes|
|telegraph.co.uk|no|
|theguardian.com|no|
|thenextweb.com|no|
|thetimes.co.uk|no|
|thoughtco.com|no|
|tiktok.com|no|
|tinyurl.com|no|
|twimg.com|no|
|twitch.tv|no|
|un.org|yes|
|wa.me|no|
|weibo.com|yes|
|wsj.com|yes|
|www.blogger.com|no|
|www.google.com|no|
|www.gov.br|no|
|yadi.sk|no|
|yandex.ru|no|
|yelp.com|yes|
|youtu.be|no|

Related YouTube video: [https://youtu.be/VGJM9TA0BOs](https://youtu.be/VGJM9TA0BOs)

### Frame Path Attack

For this portion of the assignment, I needed to create a site that set a cookie with only a path attribute that would then be stolen by another site when displayed in a frame. To do this, I created an innocent home page that would have a cookie set with the path attribute and an attacking site that contained the innocent site within an iframe, and displayed the cookie of the innocent site within the page.

Related YouTube video: [https://youtu.be/4dsfcSuk_rc](https://youtu.be/4dsfcSuk_rc)

### Extra Credit - Literary Reference

In the week 5 lecture, slide 64's title is "Parsers, Parsers, everywhere" which is a reference to The Rime of the Ancient Mariner by Samuel Taylor Coleridge. In The Rime of the Ancient Mariner, Coleridge writes "Water, water, everywhere". Additionally, this same line has made it's way into memes, in the same form of x, x, everywhere and being applied to any number of things that are being seen at that time (can refer to public events, events in a specific culture or specific group of people).
