#!/bin/bash


    grep "succeeded, loaded =" results/urlhtml/* | wc -l | awk '{print $0-97}'>> TotalCountSucceed.txt;
    grep "failed, loaded =" results/urlhtml/* | wc -l | awk '{print $0-97}'>> TotalCountFailed.txt
