#!/bin/bash
while read p; do
  echo "$p"
  curl -ILks $p -m 120 > curl_output/$p.txt
done < ../../Nelson/3/EVOGT001@ODU.EDU
python3 curl_parse.py > table.txt