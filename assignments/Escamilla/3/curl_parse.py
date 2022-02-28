import os
import re
import statistics

cookies = []
no_response = []
file_list = sorted(os.listdir("curl_output/"))
for file_name in file_list:
    with open("curl_output/" + file_name, 'r') as f:
        status = ""
        num_cookies = 0
        http_only = 0
        secure = 0
        samesite = 0
        ss_lax = 0
        ss_strict = 0
        ss_none = 0
        path = 0
        other_path = 0
        for line in f:
            http_code = re.findall(r"HTTP\/.{1,3} (\d*)", line)
            if len(http_code) != 0:
                status = http_code[0]
            cookie = re.findall(r"^[Ss]et-[Cc]ookie: (.*)$", line)
            if len(cookie) != 0:
                num_cookies = num_cookies + 1
                has_http_only = re.search(r"[Hh]ttp[Oo]nly", cookie[0])
                if has_http_only:
                    http_only = http_only + 1

                has_secure = re.search(r"[Ss]ecure", cookie[0])
                if has_secure:
                    secure = secure + 1
                
                has_samesite = re.findall(r"SameSite=(.*)", cookie[0])
                if len(has_samesite) != 0:
                    samesite = samesite + 1
                    if has_samesite[0] == "Strict":
                        ss_strict = ss_strict + 1
                    elif has_samesite[0] == "Lax":
                        ss_lax = ss_lax + 1
                    elif has_samesite[0] == "None" or has_samesite[0] == "none":
                        ss_none = ss_none + 1

                has_path = re.findall(r"[Pp]ath=(.*?;)", cookie[0])
                if len(has_path) != 0:
                    path = path + 1
                    if has_path[0] != "/;":
                        other_path = other_path + 1
    if status == "":
        no_response.append(file_name[:-4])
    else:
        print("| " + file_name[:-4] + " | " + status + " | " + str(num_cookies) + " | " + str(http_only) + " | " + str(secure) + " | " + str(samesite) + " | " + str(ss_strict) + " | " + str(ss_lax) + " | " + str(ss_none) + " | " + str(path) + " | " + str(other_path) + " |")
        cookies.append(num_cookies)
print(no_response)
print("Min: " + str(min(cookies)))
print("Max: " + str(max(cookies)))
print("Mean: " + str(statistics.mean(cookies)))
print("Median: " + str(statistics.median(cookies)))
            