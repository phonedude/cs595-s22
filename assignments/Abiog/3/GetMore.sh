#!/bin/bash

setcookie="setcookie.txt"
httponly="httponly.txt"
secure="secure.txt"
samesite="samesite.txt"
strict="strict.txt"
lax="lax.txt"
none="none.txt"
path="path.txt"
pathset="pathset.txt"

for FILE in HttpResponses/*; do
        grep -i -o "set-cookie" $FILE | wc -l >> "$setcookie"
        grep -i -o "HttpOnly" $FILE | wc -l >> "$httponly"
        grep -i -o "Secure" $FILE | wc -l >> "$secure"
        grep -i -o "SameSite" $FILE | wc -l >> "$samesite"
        grep -i -o "samesite=strict" $FILE | wc -l >> "$strict"
        grep -i -o "samesite=lax" $FILE | wc -l >> "$lax"
        grep -i -o "samesite=none" $FILE | wc -l >> "$none"
        grep -i -o "path=" $FILE | wc -l >> "$path"
        grep -i -o "path=/[a-zA-Z0-9]" $FILE | wc -l >> "$pathset"
done