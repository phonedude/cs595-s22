#!/bin/bash
# --max-time 120
path_file=$1
n=0

while IFS=$' \t\n\r' read -r line;
    do
        line=$line
        echo "fetching line No. $n: $line"
        file="$line.txt"
        curl -ILsk --max-time 120 $line > Curl_Output/$file
        curl -ILsk --max-time 120 $line | grep -Ei "Set-Cookie|HTTP/1.1|HTTP/1.0" > Curl_Output_Grepify/$file

        n=$((n+1))
        printf "\n"
    done < $path_file
