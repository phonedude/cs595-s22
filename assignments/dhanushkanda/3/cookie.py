#!/usr/bin/env python3


import json
import os
from statistics import median

# Function to run the curl command on the terminal, create a new text file with the url name, and save the headers there.
def curl(url,file):
		command = f"curl -ILsk {url}"			# giving the command
		funct = os.popen(command)				# os function to run the curl command on the terminal
		output = funct.read()					# getting the output
		with open(file, "w") as f:				# opening the file
			f.write(output)						# writing the output from the previous step into the file


# Function to get the length of cookies and a dictionary containing the cookie information
def grep(url,file):
	command = f"grep 'set-cookie:' {file}"		# to search for the line with the set-cookie header information
	funct = os.popen(command)					# os function to run the grep command on the terminal
	cookies = funct.readlines()					# getting the output of the line, and there maybe more than 1 cookie hence using readlines
	len_cookies = len(cookies)					# checking the length of the cookie
	cookie_dic = {}								# initializing an empty dictionary to store each cookie and its corresponsing values
	i = 0										# initializing the number of cookies to 0 in the beginning
	if len_cookies >= 0:
		for cookie in cookies:					# for multiple cookies
			dic = cookie_parameters(cookie)	# creating a dictionary with the cookie information
			cookie_dic[i] = dic					# adding the created cookie dictionary into the collection of cookies
			i = i + 1							# incrementing the cookie counter by 1
	return len_cookies, cookie_dic				# returning the length of the cookie and the collection of cookies


# Function to create a dictionary with the information of a particular cookie
def cookie_parameters(cookie):
	cookie_val = cookie.split("set-cookie:")[1]	# splitting the cookie from the set string
	key_val = cookie_val.split(";")				# getting the list by splitting the cookie value by ;
	cookie_dict = {}							# initializing an empty dictionary to store the values for the specific cookie
	for key in key_val:
		try:
			key,value = key.split("=",1)		# splitting just once
			key = key.strip(" ")				# stripping whitespaces
		except:
			key = key.split("=",1)[0]			# getting the 1st element
			key = key.strip(" ")		
			value = "n"						# assigning "n" if there are no values
		parameters = ["httponly","secure","samesite","path"]	# defining the parameters that we might encounter
		key = key.strip(" \n")
		if key.lower() in parameters:							# checking if the key has one of the parameters specified above
			cookie_dict[key] = value							# if seen, then adding it to the dictionary
	return cookie_dict											# returning the cookie dictionary


# Function to get the status code alone
def status_code(url):	
	str = '%{http_code}'										# just defining a string called "http_code" for display purpose
	command = ("curl -s -o /dev/null -IL -w %s %s" % (str,url))	# the command used in the terminal
	stream = os.popen(command)									# os function to run the curl command on the terminal
	status_code = stream.read()									# getting the output
	return status_code											# returning the status code


# Function used to analyze the collected data and to create the summary table
def summary(urls, max_cook, data_dict):
	with open ("table.tsv", "w") as f:							# creating an output file to store the table
		list = [str(x) for x in range(1,max_cook + 1)]			# creating a list with the numbers ranging from 1 to the maximum number of cookies
		s = "\t\t\t\t"											# creating a string to store 4 tabs, because each cookie can be one of the 4 types
		numbers = s.join(list) 									# joining the list of max number with the 4 tabs to create the structure of the table
		n_sc_list = []		
		string = "\tHttpOnly\tSecure\tSameSite\tPath" * max_cook		# creating a string with the column headers multiplied by the maximum number of cookies
		f.write(f" \t \t \tTotal\t \t \t \t{numbers}\n")				# writing the column headers in the table
		f.write(f"URL\tstatus-code\tnumber-of-cookies\tTotal-HttpOnly\tTotal-Secure\tTotal-SameSite\tTotal-Path{string}\n")			# writing the column headers in the table
		HttpOnly, Secure, SameSite, SameSite_Strict, SameSite_Lax, SameSite_None, Path, Path_Other = 0,0,0,0,0,0,0,0				# initializing values to 0
		for url in urls:										# looping through each url
			url = url.strip("\n")								# stripping the newline character
			status = data_dict[url]['status-code']				# getting the status code
			num_cookies = data_dict[url]['number-of-cookies']			# getting the number of cookies
			n_sc_list.append(num_cookies)								# appending it to the list
			
			tot_httponly, tot_secure, tot_samesite, tot_path= 0,0,0,0			# initializing values to 0
			httponly, secure, samesite, path, cookie_row = "no","no","no","no",""	# initialing values to "n"
			for i in range(num_cookies):
				x = data_dict[url]['cookie-parameters'][i] 
				keys = x.keys()
				if(len(keys) == 0):						
					httponly, secure, samesite, path = "no", "no", "no", "no"		# if there are no keys, placeholder "n" is used		
				else:					
					for key in keys:											# has more than 0 keys, iterating through all keys
						if key.lower() == "httponly":							# if the key is httponly, increasing the count by 1
							tot_httponly = tot_httponly + 1
							httponly = "yes"
							HttpOnly = HttpOnly + 1
							
						if key.lower() == "secure":								# if the key is secure, increasing the count by 1
							tot_secure = tot_secure + 1
							secure  = "yes"
							Secure = Secure + 1

						if key.lower() == "samesite":							# if the key is samesite, increasing the count by 1
							tot_samesite = tot_samesite + 1
							samesite  = data_dict[url]['cookie-parameters'][i][key]
							samesite = samesite.strip("\n")
							SameSite = SameSite + 1
							if samesite.lower() == "strict": 						# checking if it is the "strict"
								SameSite_Strict = SameSite_Strict + 1
							if samesite.lower() == "lax": 							# checking if it is the "lax"
								SameSite_Lax = SameSite_Lax + 1
							if samesite.lower() == "none": 							# checking if it is the "none"
								SameSite_None = SameSite_None + 1
						if key.lower() == "path":									# if the key is path, increasing the count by 1
							tot_path = tot_path + 1
							path  = data_dict[url]['cookie-parameters'][i][key]
							path = path.strip("\n")
							Path = Path + 1
							if path != "/":
								Path_Other = Path_Other + 1							# if the key is not path, increasing the count by 1
				row_val = f"{httponly}\t{secure}\t{samesite}\t{path}\t"
				cookie_row = cookie_row + row_val
			f.write(f"{url}\t{status}\t{num_cookies}\t{tot_httponly}\t{tot_secure}\t{tot_samesite}\t{tot_path}\t{cookie_row}\n")		# writing the row to file

	# summary calculation begin here
	num_list = [int(x) for x in n_sc_list]
	min_number = min(num_list)
	max_number = max(num_list)
	avg_number = sum(num_list) / len(num_list)
	median_number = median(num_list)

	# printing the summary and the questions asked in the homework
	print("\nProvided below is the summary of cookie statistics\n")
	print("How many cookies set HttpOnly? ", HttpOnly)
	print("How many cookies set Secure? ", Secure)
	print("How many cookies set SameSite? ", SameSite)
	print("For those that set SameSite, how many are Strict? How many are Lax? How many are None?")
	print("\tStrict: ", SameSite_Strict)
	print("\tLax: ", SameSite_Lax)
	print("\tNone: ", SameSite_None)
	print("How many cookies set a Path: ", Path)
	print("\tHow many of those are values other than '/'? ", Path_Other)
	print("\nSummarizing the entire table, what are the Min/Max/Mean/Median number of cookies for the 100 sites?")
	print("Minimum number of cookies: ", min_number)
	print("Maximum number of cookies: ", max_number)
	print("Average number of cookies: ", round(avg_number,2))			# rounding the average to 2 decimal points
	print("Median number of cookies: ", median_number)
		


# Main function
if __name__ == '__main__':
	with open("SDHAN005@ODU.EDU", "r") as f:					# opening the file containing the urls
		urls = f.readlines()									# reading each line							
	
	dict_of_dict = {}											# a dictionary of dictionary, contains the cookies of all the urls
	stat_code, number_of_cookies, cookie_dict = None, None, None	# setting status codes, number of cookies and cookie dictionary to none
	max_cookie = 0												# setting the maximum number of cookies to 0, and later will find the max value

	for url in urls:											# running through each url in the file
		data = {}												# a dictionary defined to store the status code, number of cookies and the cookie parameters for each cookie encountered
		url = url.strip("\n")									# stripping the whitespaces
		print(url)
		file = f"output/{url}.txt"								# creating a file with the url name to store the output from the 'curl' function and save in the 'curl_output' folder
		curl(url,file)											# calling the 'curl' function to 
		stat_code = status_code(url)							# calling the 'status_code' function to get the status code
		#print(stat_code)
			
		number_of_cookies, cookie_dict = grep(url,file)			# calling the 'grep' function to get the number of cookies in a particular url and the cookie dictionary containing the information about the various cookies in that url
		data["status-code"] = stat_code							# adding the status code to the data dictionary
		data["number-of-cookies"] = number_of_cookies			# adding the number of cookies to the data dictionary
		data["cookie-parameters"] = cookie_dict					# adding the cookie parameters to the data dictionary
		dict_of_dict[url] = data								# adding the url as key and the cookie information for that particular url as the value 

		if number_of_cookies > max_cookie:
			max_cookie = number_of_cookies

	print("Maximum number of cookies: ", max_cookie) 			# Getting the max number of cookies found for a single URL
	summary(urls, max_cookie, dict_of_dict)						# Calling the summary function for calculations & analysis
	


