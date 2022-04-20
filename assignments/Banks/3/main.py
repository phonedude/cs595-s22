from io import StringIO
import json
from unittest import TestResult
import requests
from http.cookies import SimpleCookie





headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:78.0) Gecko/20100101 Firefox/78.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5"
}

site_list = []
sites = []
total_cookies = 0
with open('sites.txt', 'r') as f:
    # Loops through each line (site) in file
    # and appends to sites_list
    for site in f:
        # Stripping newline from the string
        site_list.append(site.strip('\n'))

# Context manager to properly open and close file handle
with open('failed_sites.txt', 'w') as f:
    # Loop through each site in sites.txt
    for site in site_list:
         # Just declaring these to be used later. My naming is terrible
        samesite = 0
        lax = 0
        strict = 0
        ssnone = 0
        path_count = 0
        path_nondefault_count = 0
        http_only = 0
        secure = 0
        total_cookies = 0
        try:
            r = requests.head("http://"+site, timeout=60, headers=headers, allow_redirects=True)

            # Writes the HTTP response to the text file for this site
            with open('responses/' + site + '.txt', 'w') as response_file:
                r.history.append(r)
                for response in r.history:

                    # If this reponse does not set any cookies then continue to next response
                    if 'Set-Cookie' in response.headers:
                        cookies = response.headers['Set-Cookie']
                        total_cookies += len(response.raw.headers.getlist('Set-Cookie'))
                        samesite += cookies.count('SameSite')
                        lax += cookies.count('Lax')
                        strict += cookies.count('Strict')
                        ssnone += cookies.count('None')
                        path_count += cookies.count('path')
                        path_default = cookies.count('path=/')
                        path_nondefault_count += (path_count - path_default)
                        http_only += cookies.count('HttpOnly')
                        secure += cookies.count ('Secure')
                    
                    
                    response_file.write("HTTP/" + str(response.raw.version)[0] + "." + str(response.raw.version)[1] + " " + str(response.status_code) + " " + response.reason + '\n')
                    for item in response.headers:
                        if item == 'Set-Cookie':
                            for i in response.raw.headers.getlist('Set-Cookie'):
                                response_file.write('Set-Cookie: ' + i + '\n')
                            continue
                        response_file.write(item + ": " + response.headers[item] + '\n')
                    response_file.write('\n')
            

        # Catches potential exceptions for when a site takes too long to respond or some other error
        except requests.exceptions.RequestException as ex:
            f.write(site + ": " + str(ex) + '\n')
        sites.append(
                            {
                                'name': site,
                                'status_code': r.status_code,
                                'cookie_count': total_cookies,
                                'samesite_count': samesite,
                                'httponly_count': http_only,
                                'secure': secure,
                                'samesite_strict': strict,
                                'samesite_lax': lax,
                                'samesite_none': ssnone,
                                'path_count': path_count,
                                'path_nondefault_count': path_nondefault_count
                        
                            }
                        )


# Writes the results to a json file to be read by table.py
with open('results.json', 'w') as f:
    json.dump(sites, f)
