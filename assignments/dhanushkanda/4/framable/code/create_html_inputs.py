#!/usr/bin/env python3

import os

if __name__ == '__main__':
	with open("SDHAN005@ODU.EDU", "r") as f:
		urls = f.readlines()
	
	with open("main.html", "r") as f:
		 = f.read()
	print("Framing each URL in the file SDHAN005@ODU.EDU and creatng the HTML")		
	for url in urls:
		url = url.strip("\n")													# Stripping the newline character
		filename = f"framable/{url}.html"										# Giving a new file name as the URL name
		html = g.replace("place_url_here", url)									# Replacing with the URL we have
		with open(filename, "w") as h:
			h.write(html)														# Writing to file
	print("Completed")