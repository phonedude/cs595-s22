from pytablewriter import MarkdownTableWriter
import json
import statistics
def main():
    # Opening JSON file
    f = open('SiteData.json')
    
    # returns JSON object as
    # a dictionary
    data = json.load(f)
    valueMatrix  = [[key] for key in data.keys()]
    count = 0
    total_cookies = 0
    max_cookies = {"url":"","count":None}
    min_cookies = {"url":"","count":None}
    cookie_count_array = []
    for key, value in data.items():
        valueMatrix[count].append(count+1)
        valueMatrix[count].append((value["statuscode"]))
        valueMatrix[count].append(( value["cookiecount"] ))
        cookie_count_array.append(value["cookiecount"])
        secure_count = len([val for val in value["cookieinfo"]["secure"] if val == True])
        valueMatrix[count].append(secure_count)

        http_only_count = len([val for val in value["cookieinfo"]["httpOnly"] if val == True])
        valueMatrix[count].append(http_only_count)

        total_same_site = len([val for val in value["cookieinfo"]["samesite"]])
        valueMatrix[count].append(total_same_site)

        total_none_same_site = len([val for val in value["cookieinfo"]["samesite"] if val == "none"])
        valueMatrix[count].append(total_none_same_site)

        total_lax_same_site = len([val for val in value["cookieinfo"]["samesite"] if val == "lax"])
        valueMatrix[count].append(total_lax_same_site)

        total_strict_same_site = len([val for val in value["cookieinfo"]["samesite"] if val == "strict"])
        valueMatrix[count].append(total_strict_same_site)

        total_paths = len([val for val in value["cookieinfo"]["path"] if val != None])
        valueMatrix[count].append(total_paths)

        total_paths_not_root = len([val for val in value["cookieinfo"]["path"] if val != None and val != "/"])
        valueMatrix[count].append(total_paths_not_root)
        total_cookies += value["cookiecount"]
        count+=1
        if min_cookies["count"] == None or min_cookies["count"] < value["cookiecount"]:
            min_cookies["count"] = value["cookiecount"]
            min_cookies["url"] = key
        if max_cookies["count"] == None or max_cookies["count"] > value["cookiecount"]:
            max_cookies["count"] = value["cookiecount"]
            max_cookies["url"] = key
    site_headers = ["Num","URL","Status Code","Total Cookies","# of Secure Cookies","# of HTTP Only Cookies","# of SameSite cookies","# of same site none","# of same site lax","# of same site strict","# cookie paths","# non root paths"]
    
    writer = MarkdownTableWriter(
        table_name="Cookie Monster",
        headers=site_headers,
        
        value_matrix=valueMatrix,
        
    )
    min = max_cookies["count"]
    max = min_cookies["count"]
    print(max)
    print(min)
    med = statistics.median(cookie_count_array)
    mn = statistics.mean(cookie_count_array)  
    results_writer = MarkdownTableWriter(
        table_name="Results",
        headers=["Max Cookie Count", "Min Cookie Count","Median Cookie Count","Mean Cookie Count"],
      
        value_matrix=[[max,min,med,mn]],
        
    )
    blank = MarkdownTableWriter(
        table_name="",
        headers=[],
        value_matrix=[],
    )
    mark_down_string = ""
    #writer.write_table()
    #writer.dump("SiteData.md")
    f = open("README.md", "w")
    mark_down_string += writer.dumps()
    #mark_down_string += "###Analysis "+results_writer.dumps()
    f.write(" ")
    f.write("\n # Assignment 3, CS 495/595 Web Security, Spring 2022 \n### Robert Slick \n")
    f.write(" ## Overview ")
    f.write("\n- To make our requests and obtain our cookie information we use pythons request module. This is underpinned by a GET and HEAD methods similar to curl. The code below is the head request that follows all redirects and captures the information for the analysis used in the table generation.\n")
    f.write("``` python\nx = requests.head('http://'+site, verify=False,allow_redirects=True,timeout=3600)\n```")
    f.write("\nFollowing the above call 'x' holds the request object in which the cookie information is stored as property of the history of requests. For how we unpacked the request objects to extract the cookies, please see lines 47-85\n")
    f.write("\n## README Generation\n")
    f.write("README.md is generated programatically by TableGenerate.py. We use the package pytablewriter to convert our JSON file, SiteData.json, into a string representing a markdown table.  We embed the rest of the markdown code into python strings and write them out to the file README.md. The README is rewritten each time TableGenerate.py is ran.\n")
    f.write('\n## Workarounds To Tough URLs\n')
    f.write("\n- Selenium: Two sites, godaddy and tripadvisor, gave me timeouts and could not be resolved. Because they are both public facing urls, I worked around this by programmatically embedding a selenium browser using a python package for automation testing. (See API documentation here: https://selenium-python.readthedocs.io/installation.html). For each Get() request sent to a URL, the request object returned by Selenium allows retrieval of Cookie information similar to the way the python Request module does. According to their API docs, it is outside the scope of the selenium API to provision status codes reporting for Get() methods. The status codes, however, can be obtained through piping out all of the logging information the selenium module recieves and parsing for the status code assosciated with the URL. This I automated with a string pattern search for status code.  The chromedriverxx.log file hods the logging information registered by the most recent Get() API call and is used for extracting status codes. The selenium broswer module is invoked only when the timeout errors are thrown in the normal requests method. The following sites invoke a timeout: godaddy.com, tripadvisor.com googleusercontent.com. Through Selenium, we were able to obtain the required cookie data for godaddy.com and tripadvisor.com but not googleusercontent.com.\n")
    f.write("\nFile Structure Overview\n")
    table = '''
    ```
    3
    │   README.md - Contains table and cookie analysis
    │   a_file.txt - Used to hold names of sites that were not reachable with curl    
    │   chromedriverxx.log - Log file for selenium browser
    |   GetCookieData.py - Driver code for curl and cookie acquisition. Outputs SiteData.json.
    │   TableGenerate.py - Generates cookie table and README.md using SiteData.json
    │   a_file.txt - Holds any urls that timeout during curl
    |   SiteData.json - Holds all of the request data, cookie data and historical response data for each URL. Generated by GetCookieData.py.
    ```
    '''
    f.write("\n"+table+"\n")
    f.write(mark_down_string)
    f.write('\n\n')
    f.write(results_writer.dumps())
    f.write("\n## Obstinate URLs\n")
    f.write("\n I was unsuccessful in completing a curl request and in getting cookie information on the following sites: \n")
    f.write("\n- googleusercontent.com\n")
    f.write("\n## Extra Credit\n")
    f.write("The origin of the phrase 'It's turtles all the way down' is widely attributed to an anecdote told by psychologist William James.  Following a lecture James gave on the structure of the universe, an old lady appproached James with a compelling counter arguement to what she considered an overly-heliocentric and turtle-absent philosophy held by James. Her theory was that we live on the crust of an earth that sat on the back of a giant turtle. Upon consideration, James replied by asking what grounds the turtle itself stood upon. To this she replied: a second turtle. Naturally, James was curious about the grounds the second turtle was rooted to. Upon inquiry into this question, she replied 'It's turtles all the way down.' This is a demonstration of infinite regress which is underpinned by a recursive principle that determines how each subsequent entity depends on or is produced by a predecessor. For completion, it is worth noting that the 'turtle' playing a part in the structure of the universe has been around for some time. In Hindu mythology, the turtle stands stalwart with four elephants on its back. In the Hindu tradition, it is upon the backs of these elphants that the earth stands. It is a hallmark of human intellect that through hundreds of years of exhaustive rumination, when the story finally reached the old lady, our cultivated cleverness enabled us to remove the four elephants from the structural picture on the grounds of absurdity.")
    f.write(" In the class slides the problem 'infinite' regress is represented by the establishment of framing chains which attackers can establish to embed malicious sites under the guise of more innocuous ones. This was a tactic used up until recently by hackers because browsers only did a top-level check on windows thereby enabling the surface site to sit on the back of evil turtle sites chained 'all the way down.' ")
    f.close()
if __name__ == "__main__":
    main()