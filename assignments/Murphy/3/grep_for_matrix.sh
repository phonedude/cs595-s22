#!/bin/bash
echo "-n" "# of Cookies: "
grep -ir 'Set-Cookie' Curl_Output/ | wc -l
echo "-n" "HttpOnly: "
grep -ir 'HttpOnly' Curl_Output/ | wc -l
echo "-n" "Secure: "
grep -ir 'Secure' Curl_Output/ |wc -l
echo "-n" "SameSite Total: "
grep -ir 'SameSite' Curl_Output/ | wc -l
echo "-n" "SameSite=Strict: "
grep -ir 'SameSite=Strict' Curl_Output/ | wc -l
echo "-n" "SameSite=Lax: "
grep -ir 'SameSite=Lax' Curl_Output/ | wc -l
echo "-n" "SameSite=None: "
grep -ir 'SameSite=None' Curl_Output/ | wc -l
echo "-n" "# of Path=/: "
grep -ir 'Path=/' Curl_Output/ | wc -l
echo "|   File Path   |  # of Cookie |"
grep -ic 'Set-Cookie' Curl_Output/* | grep -v :0
cat Curl_Output/*.txt | grep -ir 'Set-Cookie' Curl_Output/ > all_cookies.txt
