#!/bin/bash

#curl -ILsk www.bbc.co.uk | grep -i "x-frame-options: DENY" | wc -l

grep -ir 'x-frame' curl_responses/* | tac | sort -u -t: -k1,1
echo -e "\n"

echo "-n" "Total number of x-frame-options set: "
grep -ir 'x-frame' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l 

echo "-n" "Set to DENY: "
grep -ir 'x-frame-options: deny' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

echo "-n" "Set to SAMEORIGIN: "
grep -ir 'x-frame-options: sameorigin' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

echo "-n" "Set to ALLOWALL: "
grep -ir 'x-frame-options: allowall' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l

echo "-n" "Set to ALLOW-FROM: "
grep -ir 'x-frame-options: allow-from' curl_responses/* | tac | sort -u -t: -k1,1 | wc -l