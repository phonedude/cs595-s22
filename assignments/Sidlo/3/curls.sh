#!/bin/bash
IFS=$'\n'
file=links.txt
lines=$(cat ${file})
for line in ${lines}; do
   curl -ILsk "${line}" > "${line}"".txt"
done
IFS=""
exit ${?}
