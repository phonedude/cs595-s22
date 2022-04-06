# Assignment 3: Cookie Report


* The files and folders in my homework 3 are listed below,
  * [Table with cookie summary](table.tsv)
  * [Code to collect the curl responses and create a table with the values](cookie.py)
  * [CURL responses](output)
  
  
  
* Summary of the cookies
  * How many cookies set HttpOnly?  50
  * How many cookies set Secure?  63
  * How many cookies set SameSite?  32
    * For those that set SameSite, how many are Strict? How many are Lax? How many are None?
	   * Strict:  0
	   * Lax:  12
	   * None:  20
  * How many cookies set a Path:  115
    * How many of those are values other than '/'?  0



* Summarizing the entire table
  * Minimum number of cookies:  0
  * Maximum number of cookies:  8
  * Average number of cookies:  1.18
  * Median number of cookies:  0
  

## Extra credit: It's turtles all the way down...

* An interesting xkcd comic I found online: https://xkcd.com/1416/

* Turtles all the way down is a concept of the problem of infinite regress. For instance let’s say the whole earth rests on the back of a turtle. This turtle rests on the back of an even larger turtle. Then this is supported by another larger turtle below it and it is an indefinite collection of turtles.

* In respect to web security, this referes to the scenario where we come across an embedding chain. For example target.com embeds attacker.com which embeds target.com. 

