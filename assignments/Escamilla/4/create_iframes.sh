#!/bin/bash
while read p; do
  echo -n 'hello world

    <script>
    function checkload() {


            const loaded = document.getElementById("checkme").contentWindow.window.length;

            if (loaded == 0) {
                    const node = document.createElement("p");
                    const textnode = document.createTextNode("failed, loaded = " + loaded);
                    node.appendChild(textnode);
                    document.getElementById("resultHere").appendChild(node);
            } else if (loaded > 0) {
                    const node = document.createElement("p");
                    const textnode = document.createTextNode("succeeded, loaded = " + loaded);
                    node.appendChild(textnode);
                    document.getElementById("resultHere").appendChild(node);
            }

    }
    </script>

    <div id="resultHere"></div>

    <iframe onload="checkload()" id="checkme" src="http:////' >> framable/iframe-$p.html; 
    echo -n $p >> framable/iframe-$p.html; 
    echo -n '"></iframe>' >> framable/iframe-$p.html;
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-gpu --dump-dom  --headless framable/iframe-$p.html > framable/iframe-$p.results
done < ../../Nelson/3/EVOGT001@ODU.EDU