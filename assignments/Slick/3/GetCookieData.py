from http.cookiejar import CookiePolicy
import requests, json
import logging
import traceback
import socket
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities    

all_sites = open('RSLIC001@ODU.EDU')
urls = [site.replace("\n","") for site in all_sites.readlines()]
black_list_sites = []
# verify=False - allow invalid SSL certs
# allow_redirects=True - follow redirects
terminating_status_codes = []
number_of_cookies = []
total_cookies_http_only = []
total_cookies_secure = []
total_cookies_same_site = []
same_site_cookie_count = []
same_site_cookie_count_strict = []
total_lax = []
total_none = []
total_cookie_paths_non_root = []
allData = dict({})
# warning suppression: export PYTHONWARNINGS="ignore:Unverified HTTPS request"
samesiteDict = {"none":0, "lax":0,"strict":0}
siteInfoMap = {}
def get_status(logs):
    for log in logs:
        if log['message']:
            d = json.loads(log['message'])
            try:
                content_type = 'text/html' in d['message']['params']['response']['headers']['content-type']
                response_received = d['message']['method'] == 'Network.responseReceived'
                if content_type and response_received:
                    return d['message']['params']['response']['status']
            except:
                pass
for site in urls:
    
    urlInformation = {"statuscode":0,"cookiecount":0,"cookieinfo":{}}
    try:
        #if(site != 'alexa.com' and site != 'alicdn.com' and site != 'tripadvisor.com'):
        print("starting ",site)
        x = requests.head("http://"+site, verify=False,allow_redirects=True,timeout=10)
        # For each site, the number of different cookies that are set
        urlInformation["cookiecount"] = len(x.cookies)
        urlInformation["statuscode"] = x.status_code
        print("     sc: ",x.status_code)
        # For each cookie, extract the attributes:
        '''
            site_cookie_dict - One per site, maintains all cookie properties for the url as a list.     
        '''
        site_cookie_dict = {"names":[],"httpOnly":[],"secure":[],"samesite":[],"path":[]}
        
        for cookie in x.cookies:
            site_cookie_dict["names"].append(cookie.name)
            #print(cookie.__dict__['_rest'])
            if cookie.path_specified:
                site_cookie_dict["path"].append(cookie.path)
                #print(cookie.path)
            else:
                site_cookie_dict["path"].append(None) 
            if len([key for key in cookie.__dict__['_rest'].keys() if key.lower() == 'httponly']) > 0:
                #print ("")
                site_cookie_dict["httpOnly"].append(True)
            else:
                site_cookie_dict["httpOnly"].append(False)
            if cookie.secure:
                site_cookie_dict["secure"].append(True)
            else:
                site_cookie_dict["secure"].append(False)
            if cookie.has_nonstandard_attr('samesite') or cookie.has_nonstandard_attr('Sameite') or cookie.has_nonstandard_attr('same-site') or cookie.has_nonstandard_attr('sameSite') or cookie.has_nonstandard_attr('SameSite'):
                policy = cookie.get_nonstandard_attr('samesite')
                policy = str(policy).lower()
                #print(policy)
                if policy == "none":
                    site_cookie_dict["samesite"].append("none")
                if policy == "lax":
                    site_cookie_dict["samesite"].append("lax")
                if policy == "strict":
                    site_cookie_dict["samesite"].append("strict")
        urlInformation["cookieinfo"] = site_cookie_dict
        siteInfoMap[site] = urlInformation
        print("finished ",site)
    except Exception as e:
     #   print("Offending site",site)
        #logging.error(traceback.format_exc())
        print("Offending site ",site)
        try:
            d = DesiredCapabilities.CHROME.copy()
            d['goog:loggingPrefs'] = { 'performance':'ALL' }
            driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver', service_args=["--verbose", "--log-path=chromedriverxx.log"], desired_capabilities=d)
            print('[INFO] Logging with browser')
            driver.get('https://'+site)
            cookies = driver.get_cookies()
            site_cookie_dict = {"names":[],"httpOnly":[],"secure":[],"samesite":[],"path":[]}
            '''
                        for cookie in cookies:
                            print(cookie["path"])
                            print(cookie["secure"])
                            print(cookie["httpOnly"])
                            if "sameSite" in cookie.keys():
                                print(cookie["sameSite"]
                            
            '''
            for cookie in cookies:
                site_cookie_dict["names"].append(cookie["name"])
                #print(cookie.__dict__['_rest'])
                if "path" in cookie.keys():
                    site_cookie_dict["path"].append(cookie["path"])
                    #print(cookie.path)
                else:
                    site_cookie_dict["path"].append(None) 
                if "httpOnly" in cookie.keys():
                    #print ("")
                    site_cookie_dict["httpOnly"].append(True)
                else:
                    site_cookie_dict["httpOnly"].append(False)
                if "secure" in cookie.keys():
                    site_cookie_dict["secure"].append(True)
                else:
                    site_cookie_dict["secure"].append(False)
                if "sameSite" in cookie.keys():
                    policy = cookie['sameSite']
                    policy = str(policy).lower()
                    #print(policy)
                    if policy == "none":
                        site_cookie_dict["samesite"].append("none")
                    if policy == "lax":
                        site_cookie_dict["samesite"].append("lax")
                    if policy == "strict":
                        site_cookie_dict["samesite"].append("strict")
            logs = driver.get_log('performance')
            print("Status: ",get_status(logs))
            #urlInformation["statuscode"] = r.status_code
            print("Cookies ",len(cookies))
            print(site_cookie_dict)
            urlInformation["cookiecount"] =   len(cookies)
            urlInformation["statuscode"] = get_status(logs)
            urlInformation["cookieinfo"] = site_cookie_dict
            siteInfoMap[site] = urlInformation
            driver.quit()
        except Exception as e:
            print(e)
            black_list_sites.append(site)

annoying_sites = open("a_file.txt", "w")
for element in black_list_sites:
    annoying_sites.write(element + "\n")
annoying_sites.close()
f = open("SiteData.json", "w")
json.dump(siteInfoMap, f)
f.close()
print(black_list_sites)