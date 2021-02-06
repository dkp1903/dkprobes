---
title: Git-ting it right
date: "2021-01-30T22:40:32.169Z"
description: Discussing the most important aspects of Git - accompanying notes
tags: ["dsa"]

---

This is the accompanying article of the Git session I took on 30th January, 2021. 

### Summary of the session

Here's the [link to the recording](https://daiict.webex.com/ec3300/eventcenter/recording/recordAction.do?theAction=poprecord&siteurl=daiict&entappname=url3300&internalRecordTicket=4832534b000000042e26fe01bf25d58ecc0aca8f165afc9979390587ecc3544f00364cadc10a95b9&renewticket=0&isurlact=true&format=short&rnd=6824475338&RCID=f89ed6e57ae4468d8006aea5305f86c1&rID=192965887&needFilter=false&recordID=192965887&apiname=lsr.php&AT=pb&actappname=ec3300&&SP=EC&entactname=%2FnbrRecordingURL.do&actname=%2Feventcenter%2Fframe%2Fg.do
). Password - IAS@ieee1

[My slides are available here](https://drive.google.com/file/d/1f2RQ8vpnw_FvtQJFTLRhh8_IIS8hMb5P/view?usp=sharing)

To give a brief summary of all that was discussed that day, we understood - 

- What is Git, why is it such a big deal? Why do folks say it's life and death?
Quick answer : Because companies practically live on git to manage extra large code infrastructure in extra numerous teams - it's imperative to have a tool to allow tracking changes, making sure code isn't lost, and to find out who to blame when something goes wrong

- What is the difference between Git and GitHub? : You're likely not to forget this one

- What are some of the basic linux commands that you need to know for Git
	- ls
	- cd
	- pwd
	- mkdir

- Gitting started - create a normal folder(directory) and make it a git repo

- What's local vs remote repo

- Working area, staging area, commit area

- git add and all its options

- git commit

- git remote add origin repo-url

- git push -u origin master

- What does it mean to clone a repo

- git log

- git diff

- Here's where I was getting that error earlier (it wasn't technically an error, I was looking at the wrong version of the file) - git reset
	- git reset --soft
	- git reset --mixed
	- git reset --hard

- What is a branch? Why do we need a branch? How do we make a branch? How do we push a branch?

- What is pull request? What is merge and merge commit and merge conflict?

- Some extra commands
	- git reflog
	- git stash
	- git revert
	- git cherrypick

- About Github - what are some salient features of Github? What are issues? How can you use it?


### Resources, as promised - 

- Here's a pretty decent article that I followed while making the slides - [Link](https://itnext.io/become-a-git-pro-in-just-one-blog-a-thorough-guide-to-git-architecture-and-command-line-interface-93fbe9bdb395)
It has enough info to help you know almost all the git you'll ever need

- [A FREE Udacity course on Git](https://www.udacity.com/course/version-control-with-git--ud123)

- [An online Git playground](https://www.katacoda.com/courses/git)

### These are resources, yes, but what is the way to get better at Git?

- As cliche as it sounds, it's practice - you'll only learn when you are trying to push, it fails and the world ends. So, it's as well that you end the world on your personal repos than you do on a company repo. 

- Most developers claim that they have hardly ever seen Github's home page. Please do go through the explore, follow the right folks who are active in the open source community.

- Make sure all your projects are on Github, so that you have something to showcase when you sit in interviews.


That's about it from my end. You can follow me on [Github](https://github.com/dkp1903), [Twitter](https://twitter.com/dkp1903), [LinkedIn](https://linkedin.com/in/dkp1903)


Happy gitting


DKP 	

