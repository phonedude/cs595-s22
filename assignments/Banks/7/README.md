# Assignment 7 - Keshaun Banks

Video of demonstration: [https://youtu.be/73wxsw5S_0A](https://youtu.be/73wxsw5S_0A)

For this assignment, I used Amazon.com's login page as my target. To do this, I saved
the html file (and relevant static resources) to my computer. I then edited the html file
to make the login appear like the older amazon login and modified the destination for the form submisison. This was easier than using the modern login
where the email is entered and the user has to press a button to see the password box. This fake webpage is hosted by ``server.js`` at http://localhost:4444/

When "Sign In" is pressed, the form creates a POST request to http://localhost:4444/Thief. This request contains the email and the password of the victim. The server then prints the credentials to console and logs them into log.txt and redirects the user to the real Amazon login page. This redirection is meant to trick the user into thinking that the login page simply glitched and refreshed so they would be none the wiser.
## Old login page
<img src=old-page.png width="300">

## New login page
<img src=new-page.png width=300>



# Zphiser
The use of Zphiser allows me to create phishing pages in literal seconds. I just run the tool, choose a site, and then my fake webpage is set up.

Video of demonstrations: (Netflix, Microsoft/Xbox, and Discord) [https://youtu.be/L0B8mf1UUBw](https://youtu.be/L0B8mf1UUBw)

## Example console output after putting in my credentials to the fake discord login page
<img src=zphisher-console.png width="300">

<img src=fake-discord.png width="300">

## Victim logins stored in usernames.dat
<img src=zphisher-password-log.png width="500">