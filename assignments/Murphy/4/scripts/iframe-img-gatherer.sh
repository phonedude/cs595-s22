#!/bin/bash

n=1
while [ $n -le 100 ];
    do
        echo "Writing file #$n."
        /cygdrive/c/Progra~2/Google/Chrome/Application/./chrome --disable-gpu --screenshot=iframe-imgs/html-$n.png --headless http://localhost:4000/html-$n

        n=$((n+1))
    done
