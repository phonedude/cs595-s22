#!/usr/bin/env python3

import os


def curl(url,file):
		command = f"curl -ILsk {url}"					# giving the command
		funct = os.popen(command)						# os function to run the curl command on the terminal
		output = funct.read()							# getting the output
		with open(file, "w") as f:						# opening the file
			f.write(output.lower())						# writing the output from the previous step into the file


if __name__ == '__main__':
	with open("SDHAN005@ODU.EDU", "r") as f:
		urls = f.readlines()
		for url in urls:
			url = url.strip("\n")
			print(url)
			file = f"output/{url}.txt"		
			curl(url, file)
	print("Completed")