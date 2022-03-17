#!/bin/bash

n=1

while [ $n -le 100 ];
    do
        echo -e "app.get('/html-$n', (req, res) => {
            res.render('html-$n')
        }) \n" >> app_getters_for_html.txt

        n=$((n+1))
    done