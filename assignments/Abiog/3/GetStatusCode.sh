#!/bin/bash

input="urls.txt"
output="statuscode.txt"

while IFS= read -r line
do
	curl -ILsk "$line" | grep -i "HTTP/" | tail -1 | cut -d' ' -f2 >> "$output"
done < "$input"