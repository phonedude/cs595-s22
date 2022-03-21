<?php
$context = stream_context_create(
    array(
        "http" => array(
            "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
        )
    )
);
// From URL to get webpage contents.
$url = $_GET['url'];

// Initialize a CURL session.
$ch = curl_init();

// Return Page contents.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
//grab URL and pass it to the variable.
curl_setopt($ch, CURLOPT_URL, $url);

$result = curl_exec($ch);

//echo $result;
$redirectURL = strval(curl_getinfo($ch,CURLINFO_EFFECTIVE_URL ));
curl_setopt($ch, CURLOPT_URL, $url);
$conts = file_get_contents($redirectURL,true,$context);
$pathPrefix = "";
$pathPrefix.="./framable/";
$urlTrim = rtrim($url, "/");
$pathPrefix.= strval($urlTrim);
$pathPrefix.= ".html";
//print_r($pathPrefix);
file_put_contents($pathPrefix,$conts);
echo $conts;
//echo $redirectURL;
?>
