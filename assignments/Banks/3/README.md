# Keshaun Banks Assignment 3
To complete this assignment I wrote 2 python programs.
1) ``main.py`` Performs reads the sites from ``sites.txt`` and then performs all the requests and generates the data to be stored in ``results.json``

2) ``table.py`` is then ran, and it generates the markdown table from the data in ``results.json``

### Note
* I removed 5 problematic sites from my list. As explained in the Google group, these sites were either down or didn't have a DNS record at all

To run this yourself, you must install ``requests`` and ``pytablewriter``. To do so run ``pip install -r requirements.txt``. Then run main.py to generate the JSON file and run table.py afterwards to generate the markdown file
which contains the table.

##(Copied from table.md)
# Results
|        Sites         |Status Code|Cookie Count|HttpOnly|Secure|SameSite|SameSite Strict|SameSite Lax|SameSite None|Path|Non-default Path|
|----------------------|----------:|-----------:|-------:|-----:|-------:|--------------:|-----------:|------------:|---:|---------------:|
|abcnews.go.com        |        200|           2|       0|     0|       0|              0|           0|            0|   2|               0|
|about.com             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|accounts.google.com   |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|alibaba.com           |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|amazon.co.uk          |        405|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|amazon.de             |        405|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|amazon.es             |        405|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|amzn.to               |        405|           1|       0|     0|       0|              0|           0|            0|   1|               0|
|as.com                |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|bbc.co.uk             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|berkeley.edu          |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|biblegateway.com      |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|bild.de               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|bitly.com             |        405|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|box.com               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|britannica.com        |        200|           7|       0|     0|       0|              0|           0|            0|   7|               0|
|cambridge.org         |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|clarin.com            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|code.google.com       |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|deezer.com            |        200|           3|       2|     3|       2|              0|           0|            2|   3|               0|
|digitaltrends.com     |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|disqus.com            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|dot.tk                |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|dw.com                |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|ebay.co.uk            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|enable-javascript.com |        200|           1|       1|     1|       0|              0|           1|            0|   1|               0|
|engadget.com          |        200|           1|       0|     0|       0|              0|           0|            0|   1|               0|
|eonline.com           |        200|           1|       1|     0|       1|              1|           0|            0|   1|               0|
|espn.com              |        200|           7|       0|     0|       0|              0|           0|            0|   7|               0|
|example.com           |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|fastcompany.com       |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|fda.gov               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|feedburner.com        |        200|           1|       0|     1|       1|              0|           0|            0|   1|               0|
|fifa.com              |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|forms.gle             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|fortune.com           |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|gettyimages.com       |        200|           6|       0|     4|       6|              0|           0|            0|   6|               0|
|globo.com             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|gnu.org               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|goo.gl                |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|google.com.br         |        200|           1|       1|     0|       1|              0|           0|            0|   1|               0|
|google.fr             |        200|           1|       1|     0|       1|              0|           0|            0|   1|               0|
|google.pl             |        200|           1|       1|     0|       1|              0|           0|            0|   1|               0|
|googleblog.com        |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|gooyaabitemplates.com |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|hbr.org               |        200|           3|       0|     2|       2|              0|           0|            0|   3|               0|
|huffingtonpost.com    |        200|           1|       0|     0|       0|              0|           0|            0|   1|               0|
|ietf.org              |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|imgur.com             |        200|           1|       0|     0|       0|              0|           0|            0|   1|               0|
|kakao.com             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|line.me               |        200|           1|       0|     0|       0|              0|           0|            0|   1|               0|
|m.wikipedia.org       |        200|           1|       0|     1|       1|              0|           0|            0|   1|               0|
|mail.ru               |        200|           2|       2|     2|       2|              0|           0|            2|   2|               0|
|mediafire.com         |        200|           1|       0|     1|       0|              0|           0|            0|   1|               0|
|medium.com            |        200|           3|       3|     3|       3|              0|           0|            3|   3|               0|
|mercurynews.com       |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|mit.edu               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|mixcloud.com          |        200|           2|       1|     0|       1|              0|           1|            0|   2|               0|
|nationalgeographic.com|        200|           3|       0|     0|       0|              0|           0|            0|   3|               0|
|newyorker.com         |        200|           5|       3|     0|       4|              1|           0|            2|   5|               0|
|ok.ru                 |        200|           2|       0|     2|       2|              0|           0|            0|   2|               0|
|outlook.com           |        440|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|ovh.net               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|pbs.org               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|pcmag.com             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|picasaweb.google.com  |        200|           1|       0|     1|       1|              0|           0|            0|   1|               0|
|politico.com          |        200|           2|       2|     2|       2|              0|           0|            2|   2|               0|
|prezi.com             |        406|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|python.org            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|rakuten.co.jp         |        200|           1|       0|     1|       0|              0|           0|            0|   1|               0|
|researchgate.net      |        200|           3|       0|     1|       3|              0|           0|            0|   3|               0|
|sciencedaily.com      |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|sedo.com              |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|slideshare.net        |        200|           3|       0|     0|       0|              0|           0|            0|   3|               0|
|surveymonkey.com      |        200|           5|       5|     1|       5|              0|           0|            0|   5|               0|
|ted.com               |        200|           5|       0|     0|       0|              0|           0|            0|   5|               0|
|thefreedictionary.com |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|translate.google.com  |        200|           1|       1|     1|       1|              0|           0|            0|   1|               0|
|un.org                |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|uol.com.br            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|usda.gov              |        200|           1|       0|     1|       0|              0|           0|            0|   1|               0|
|utexas.edu            |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|video.google.com      |        200|           1|       1|     0|       1|              0|           0|            0|   1|               0|
|wa.me                 |        200|           2|       2|     0|       2|              0|           0|            2|   2|               0|
|weather.com           |        200|           1|       0|     0|       1|              0|           0|            0|   1|               0|
|wikia.com             |        200|           4|       4|     0|       4|              0|           0|            4|   4|               0|
|wikihow.com           |        200|           3|       0|     0|       3|              0|           0|            0|   3|               0|
|wikimedia.org         |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|wp.com                |        200|           3|       3|     0|       3|              1|           0|            2|   3|               0|
|wsj.com               |        200|           6|       0|     0|       0|              0|           0|            0|   6|               0|
|www.weebly.com        |        200|           9|       0|     0|       0|              0|           0|            0|   9|               0|
|xda-developers.com    |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|yadi.sk               |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|yandex.ru             |        200|           0|       0|     0|       0|              0|           0|            0|   0|               0|
|zendesk.com           |        200|           2|       2|     2|       2|              0|           0|            2|   2|               0|

### Min: 0 

### Max: 9 

### Median: 0 

### Mean: 0.8558558558558559 

        
