#!/bin/bash

input="urls.txt"

while IFS= read -r line
do
	curl -ILsk "$line" > "$line.txt"
done < "$input"