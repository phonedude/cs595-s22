#!/bin/bash

input="urls.txt"

while IFS= read -r line
do
    echo "<html>
<head>
</head>
<body>
<h1>My Website</h1>
<br>

<script>
function checkload() {


        const loaded = document.getElementById('checkme').contentWindow.window.length;

        if (loaded == 0) {
                const node = document.createElement(\"p\");
                const textnode = document.createTextNode(\"failed, loaded = \" + loaded);
                node.appendChild(textnode);
                document.getElementById(\"resultHere\").appendChild(node);
        } else if (loaded > 0) {
                const node = document.createElement(\"p\");
                const textnode = document.createTextNode(\"succeeded, loaded = \" + loaded);
                node.appendChild(textnode);
                document.getElementById(\"resultHere\").appendChild(node);
        }

}
</script>

<div id=\"resultHere\"></div>

<iframe onload=\"checkload()\" id=\"checkme\" src=\"http://$line\"></iframe>


</body>
</html>" > "./urlhtml/$line.html"


done < "$input"
