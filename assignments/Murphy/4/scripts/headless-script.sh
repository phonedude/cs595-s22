#!/bin/bash

#./chrome --disable-gpu --dump-dom --headless http://localhost:4000/html-4

n=1
while [ $n -le 100 ];
    do
        echo "Writing file #$n."
        /cygdrive/c/Progra~2/Google/Chrome/Application/./chrome --disable-gpu --dump-dom --headless http://localhost:4000/html-$n >> results/html-$n.txt

        n=$((n+1))
    done


