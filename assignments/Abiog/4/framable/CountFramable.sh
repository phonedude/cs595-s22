#!/bin/bash

for FILE in results/urlhtml/*; do
    grep "succeeded, loaded =" $FILE | wc -l | awk '{print $0-1}'>> CountSucceed.txt;
    grep "failed, loaded =" $FILE | wc -l | awk '{print $0-1}'>> CountFailed.txt
done