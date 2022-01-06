## Assignment 1, CS 495/595 Web Security, Spring 2022

Due: 2021-01-24

Points available: 15

### Basics of HTML, JavaScript, and Node

* This is based on [assignment 0](https://web.stanford.edu/class/cs253/assign0) from Feross Aboukhadijeh's class.  Consult the instructions there for additional guidance if needed.

* I've also submitted a (partial) version of what your submission should look like; consult [Nelson/1](Nelson/1) if you are unsure what things should be named, what to upload, etc.  

### Using npm to download "workshops" about HTML, JavaScript, and Node

On your computer, use npm to globally ("-g") install these packages:

```
npm install -g learnyouhtml javascripting learnyounode
```

You can omit "-g" if you don't want to install them globally, but it's probably better to make them global.

### Setting Up GitHub

Set up an account on GitHub.  Go to [https://github.com/phonedude/cs595-s22](https://github.com/phonedude/cs595-s22) and click the "Fork" button (top right).  This will create a copy of my repository in your GitHub account.  But the files nave not been moved to your local machine.  To do that, open a terminal window (replace YOURGITHUBACCTNAME (mine is "phonedude") with the name of your GitHub account):

```
git clone https://github.com/YOURGITHUBACCTNAME/cs595-s22.git
cd cs595-s22
```

This has now moved a copy of your fork of my repo from github.com to your local machine, where you will do your programming, development, testing, etc.  

### Preparing Assignment 1 for Submission

This assumes you're already in the copy of your repo on your local machine; YOURLASTNAME is your last name (mine is "Nelson")):

```
cd assignments
mkdir YOURLASTNAME
cd YOURLASTNAME
mkdir 1
cd 1
mkdir html
mkdir javascript
mkdir node
cd html 
learnyouhtml
# do all the HTML excercises in the "html" directory; saving all related files in "html"
cd ../javascript
javascripting
# do all the JavaScript excercises in the "javascript" directory; saving all related files in "javascript"
cd ../node
learnyounode
# do all the Node excercises in the "node" directory; saving all related files in "node"
```

Each of the commands "learnyouhtml", "javascripting", and "learnyounode" will have you do a series of simple exercises to prove mastery of the particular task.  Each task will have you create a file, then you'll "verify" the file, and the workshop will check it.  If you're successful, it will mark that task as "[COMPLETED]".  Else, it will provide hints as to why it was unsuccessful and you re-verify after editing.  For example, to verify the HTML "lists" tasks, do:

```
cd html
learnyouhtml
vi my-list-demo.html # create the file with the desired <ul>, <ol>, <li>, etc. elements
learnyouhtml verify my-list-demo.html
learnyouhtml # to choose the next task
```

Similarly:

```
cd ../javascript
javascripting
vi introduction.js
javascripting verify introduction.js
javascripting # continue until complete
cd ../node
learnyounode
vi hello-world.js
learnyounode verify hello-world.js
learnyounode # continue until complete
```

The HTML and JavaScript workshops are pretty easy, so you should have no problems.  For learning Node, you'll probably need to read the [Node.js documentation](https://nodejs.org/api/).  Ask the email list if you get stuck.  

### Submission

* Create a README.md that contains:
  * A description of the assignment, directories, files, etc.
  * Three screen shots, one each showing completion of learnyouhtml, javascripting, and learnyounode.
  * A link to a Youtube video showing you list the files in the directory and showing the end screen for each workshop.

Again, look at [Nelson/1](Nelson/1) for a template.

To upload to GitHub, do:

```
git add 1 # this will recursively add all the files in the directory
git commit -m "A1 submission" # or whatever mesg is appropriate
git push origin main # this moves the code from your local machine to github.com
```

Then inspect in your fork on GitHub (e.g., https://github.com/YOURGITHUBACCTNAME/cs595-s22).  If all looks good, issue a pull request (PR) to my repo (see [week 1 slides](https://docs.google.com/presentation/d/1EZomYYzDeLNzCOlTsFUWgVHUhuiCGgXPY8G3r-i_Yic/edit) for details).

The idea is to collect all of the code, images, documentation, etc. necessary for someone to understand Assginment 1 into a single directory.  If it is code, data, etc. that you created, move it somewhere into ```assignments/YOURLASTNAME/1```.  We will follow this pattern for all assignments.

After the assignment is complete, you can optionally uninstall these packages with:

```
npm rm -g learnyouhtml javascripting learnyounode
```

### Youtube video

* Record your screen of you 1) viewing the files, 2) starting the server, 3) loading each of the three paths in your browser.  I am issuing grades based on what your video shows; if you don't show/demonstrate something in your video, I'm not grading it.  
* Upload that video to Youtube (see [week 1 slides](https://docs.google.com/presentation/d/1EZomYYzDeLNzCOlTsFUWgVHUhuiCGgXPY8G3r-i_Yic/edit) for details).

