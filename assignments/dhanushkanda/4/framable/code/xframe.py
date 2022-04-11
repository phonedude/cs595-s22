#!/usr/bin/env python3

import os

def xframe(url,file):	
	command = f"grep 'X-Frame-Options:\|x-frame-options:' {file}"				# to search for the line with the x-frame header information
	funct = os.popen(command)													# os function to run the grep command on the terminal
	x_frame = funct.readlines()													# getting the output of the line
	count = len(x_frame)														# checking how many headers are there for x-frames
	options = []																# instantiating a list to store the x-frame options
	frame_list = []
	if count == 0:
		options = [None]
	else:
		for item in x_frame:
			x, frame = item.split(": ")
			frame = frame.strip("\n")
			frame_list.append(frame)
		[options.append(x) for x in frame_list if x not in options] 
	n = len(options)
	return options


if __name__ == '__main__':
	with open("SDHAN005@ODU.EDU", "r") as f:
		urls = f.readlines()

	print("Checking the X-Frame-Options header")
	with open("summary.csv", "w") as i:
		for url in urls:
			url = url.strip("\n")
			file = f"output/{url}.txt"		
			options = xframe(url,file)
			i.write(f"{url},{options}\n")