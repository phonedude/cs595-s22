#!/bin/bash

for FILE in urlhtml/*; do
    google-chrome --disable-gpu --dump-dom --headless $FILE >> results/$FILE.txt
done
