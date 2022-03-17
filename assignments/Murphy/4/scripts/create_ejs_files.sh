#!/bin/bash

path_file=$1
n=1

while IFS=$' \t\n\r' read -r line;
    do
        line=$line
        echo "reading $n: $line"
        file="html-$n.ejs"
        echo "<!doctype html>
<head>
    <body>
        <a href='/iframe-html-pages'>Back</a>
        <script>
            function checkload() {

                const loaded = document.getElementById('checkme').contentWindow.window.length;
                
                if (loaded == 0) {
                        const node = document.createElement('p');
                        const textnode = document.createTextNode('failed, loaded = ' + loaded);
                        node.appendChild(textnode);
                        document.getElementById('resultHere').appendChild(node);
                } else if (loaded > 0) {
                        const node = document.createElement('p');
                        const textnode = document.createTextNode('succeeded, loaded = ' + loaded);
                        node.appendChild(textnode);
                        document.getElementById('resultHere').appendChild(node);
                }

            }
        </script>
    </body>
</head>

<div id='resultHere'></div>

<iframe onload='checkload()' id='checkme' src='https://www.$line/'></iframe>" >> views/html-$n.ejs

        n=$((n+1))
        printf "\n"
    done <$path_file