#!/bin/bash

for file in html/*; do
    google-chrome --disable-gpu --dump-dom --headless $file >> frame-results/$file.txt
done
